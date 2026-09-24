from django.contrib import admin
from .models import PaymentTransaction


@admin.register(PaymentTransaction)
class PaymentTransactionAdmin(admin.ModelAdmin):
    list_display = ("transaction_uuid", "reservation", "gateway", "amount_npr", "status", "created_at")
    list_filter = ("gateway", "status", "created_at")
    search_fields = ("transaction_uuid", "gateway_reference_id", "reservation__booking_reference")
