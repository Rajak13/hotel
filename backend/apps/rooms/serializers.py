from rest_framework import serializers
from .models import Amenity, RoomCategory, Room, MaintenanceTicket


class AmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Amenity
        fields = ["id", "name", "icon", "description"]


class RoomCategorySerializer(serializers.ModelSerializer):
    amenities = AmenitySerializer(many=True, read_only=True)

    class Meta:
        model = RoomCategory
        fields = [
            "id",
            "name",
            "slug",
            "description",
            "base_price_npr",
            "base_price_usd",
            "max_occupancy",
            "bed_type",
            "view_type",
            "room_size_sqft",
            "amenities",
            "virtual_tour_url",
            "floor_plan_image",
        ]


class RoomSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source="category.name", read_only=True)

    class Meta:
        model = Room
        fields = [
            "id",
            "room_number",
            "category",
            "category_name",
            "floor",
            "status",
            "assigned_cleaner",
            "notes",
            "is_active",
        ]


class MaintenanceTicketSerializer(serializers.ModelSerializer):
    room_number = serializers.CharField(source="room.room_number", read_only=True)

    class Meta:
        model = MaintenanceTicket
        fields = [
            "id",
            "room",
            "room_number",
            "reported_by",
            "title",
            "description",
            "priority",
            "status",
            "photo",
            "created_at",
            "resolved_at",
        ]
