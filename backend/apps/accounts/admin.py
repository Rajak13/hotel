from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, GuestProfile


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ("Hotel Role & Contact", {"fields": ("role", "phone_number")}),
    )
    list_display = ("username", "email", "role", "phone_number", "is_staff")
    list_filter = ("role", "is_staff", "is_active")


@admin.register(GuestProfile)
class GuestProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "city", "country", "emergency_contact", "created_at")
    search_fields = ("user__username", "user__first_name", "user__last_name", "city")
