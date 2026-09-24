from django.contrib import admin
from .models import AddonService, Reservation, ReservationAddon, Folio, FolioItem


class ReservationAddonInline(admin.TabularInline):
    model = ReservationAddon
    extra = 1


class FolioItemInline(admin.TabularInline):
    model = FolioItem
    extra = 1


@admin.register(AddonService)
class AddonServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "price_npr", "is_active")


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = (
        "booking_reference",
        "guest_name",
        "category",
        "room",
        "check_in_date",
        "check_out_date",
        "status",
        "source",
        "total_price_npr",
    )
    list_filter = ("status", "source", "check_in_date", "check_out_date")
    search_fields = ("booking_reference", "guest_name", "guest_phone")
    inlines = [ReservationAddonInline]


@admin.register(Folio)
class FolioAdmin(admin.ModelAdmin):
    list_display = ("reservation", "total_amount_npr", "paid_amount_npr", "balance_due_npr", "is_settled", "pan_number")
    list_filter = ("is_settled",)
    inlines = [FolioItemInline]
