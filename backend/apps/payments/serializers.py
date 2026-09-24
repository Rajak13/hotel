from rest_framework import serializers
from .models import PaymentTransaction


class PaymentTransactionSerializer(serializers.ModelSerializer):
    booking_reference = serializers.CharField(source="reservation.booking_reference", read_only=True)

    class Meta:
        model = PaymentTransaction
        fields = [
            "id",
            "reservation",
            "booking_reference",
            "gateway",
            "amount_npr",
            "amount_usd",
            "status",
            "transaction_uuid",
            "gateway_reference_id",
            "payment_slip",
            "metadata",
            "created_at",
        ]
        read_only_fields = ["transaction_uuid", "status"]
