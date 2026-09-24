from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RoomCategoryViewSet, RoomViewSet, MaintenanceTicketViewSet, AmenityViewSet

router = DefaultRouter()
router.register(r"categories", RoomCategoryViewSet, basename="room-categories")
router.register(r"rooms", RoomViewSet, basename="rooms")
router.register(r"amenities", AmenityViewSet, basename="amenities")
router.register(r"maintenance", MaintenanceTicketViewSet, basename="maintenance-tickets")

urlpatterns = [
    path("", include(router.urls)),
]
