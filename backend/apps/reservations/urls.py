from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservationViewSet, AddonServiceViewSet, FolioViewSet

router = DefaultRouter()
router.register(r"bookings", ReservationViewSet, basename="reservations")
router.register(r"addons", AddonServiceViewSet, basename="addons")
router.register(r"folios", FolioViewSet, basename="folios")

urlpatterns = [
    path("", include(router.urls)),
]
