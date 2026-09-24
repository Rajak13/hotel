import uuid
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import PaymentTransaction, PaymentGateway, PaymentStatus
from .serializers import PaymentTransactionSerializer
from apps.reservations.models import Reservation


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = PaymentTransaction.objects.all().select_related("reservation")
    serializer_class = PaymentTransactionSerializer

    @action(detail=False, methods=["post"], url_path="initiate")
    def initiate_payment(self, request):
        """
        Initiates payment via eSewa, Khalti, Fonepay, or Stripe.
        """
        reservation_id = request.data.get("reservation_id")
        gateway = request.data.get("gateway")
        amount_npr = request.data.get("amount_npr")

        try:
            reservation = Reservation.objects.get(id=reservation_id)
        except Reservation.DoesNotExist:
            return Response({"error": "Reservation not found"}, status=status.HTTP_404_NOT_FOUND)

        if gateway not in PaymentGateway.values:
            return Response(
                {"error": f"Invalid gateway. Available: {PaymentGateway.values}"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        tx_uuid = f"TXN-{uuid.uuid4().hex[:12].upper()}"

        txn = PaymentTransaction.objects.create(
            reservation=reservation,
            gateway=gateway,
            amount_npr=amount_npr or reservation.total_price_npr,
            status=PaymentStatus.INITIATED,
            transaction_uuid=tx_uuid,
            metadata={"initiated_from": "web"},
        )

        return Response({
            "message": f"Payment initiated with {gateway}",
            "transaction_uuid": tx_uuid,
            "gateway": gateway,
            "amount_npr": str(txn.amount_npr),
            "booking_reference": reservation.booking_reference,
        }, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=["post"], url_path="verify")
    def verify_payment(self, request):
        """
        Callback/Webhook handler to verify payment from eSewa / Khalti / Stripe.
        """
        tx_uuid = request.data.get("transaction_uuid")
        gateway_ref = request.data.get("gateway_reference_id")
        is_success = request.data.get("success", False)

        try:
            txn = PaymentTransaction.objects.get(transaction_uuid=tx_uuid)
        except PaymentTransaction.DoesNotExist:
            return Response({"error": "Transaction not found"}, status=status.HTTP_404_NOT_FOUND)

        if is_success:
            txn.status = PaymentStatus.SUCCESS
            txn.gateway_reference_id = gateway_ref
            txn.save()

            # Confirm reservation
            txn.reservation.status = Reservation.Status.CONFIRMED
            txn.reservation.save()

            return Response({"status": "SUCCESS", "message": "Payment verified and booking confirmed"})
        else:
            txn.status = PaymentStatus.FAILED
            txn.save()
            return Response({"status": "FAILED", "message": "Payment verification failed"})
