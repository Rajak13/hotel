from django.contrib.auth.models import AbstractUser
from django.db import models


class UserRole(models.TextChoices):
    SUPER_ADMIN = "SUPER_ADMIN", "Super Admin / General Manager"
    FRONT_DESK = "FRONT_DESK", "Front Desk / Receptionist"
    HOUSEKEEPING = "HOUSEKEEPING", "Housekeeping / Maintenance Staff"
    GUEST = "GUEST", "Customer / Guest"


class User(AbstractUser):
    role = models.CharField(
        max_length=20,
        choices=UserRole.choices,
        default=UserRole.GUEST,
    )
    phone_number = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"


class GuestProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="guest_profile")
    citizenship_or_passport = models.CharField(max_length=50, blank=True, null=True)
    id_document_image = models.FileField(upload_to="guest_ids/", blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100, default="Dharan")
    country = models.CharField(max_length=100, default="Nepal")
    emergency_contact = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Profile: {self.user.get_full_name() or self.user.username}"
