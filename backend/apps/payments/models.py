from django.db import models
from apps.reservations.models import Reservation


class PaymentGateway(models.TextChoices):
    ESEWA = "ESEWA", "eSewa (ePay v2)"
    KHALTI = "KHALTI", "Khalti"
    FONEPAY = "FONEPAY", "Fonepay QR / ConnectIPS"
    STRIPE = "STRIPE", "Stripe / International Cards"
    CASH = "CASH", "Cash / Pay on Arrival"


class PaymentStatus(models.TextChoices):
    INITIATED = "INITIATED", "Initiated"
    SUCCESS = "SUCCESS", "Success / Paid"
    FAILED = "FAILED", "Failed"
    REFUNDED = "REFUNDED", "Refunded"


class PaymentTransaction(models.Model):
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE, related_name="payments")
    gateway = models.CharField(max_length=20, choices=PaymentGateway.choices)
    amount_npr = models.DecimalField(max_digits=12, decimal_places=2)
    amount_usd = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    status = models.CharField(max_length=20, choices=PaymentStatus.choices, default=PaymentStatus.INITIATED)
    
    transaction_uuid = models.CharField(max_length=100, unique=True)
    gateway_reference_id = models.CharField(max_length=100, blank=True, null=True)
    payment_slip = models.FileField(upload_to="payment_slips/", blank=True, null=True)
    
    metadata = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.gateway} - NPR {self.amount_npr} ({self.status}) for {self.reservation.booking_reference}"
