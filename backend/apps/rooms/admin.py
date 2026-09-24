from django.contrib import admin
from .models import Amenity, RoomCategory, Room, MaintenanceTicket


@admin.register(Amenity)
class AmenityAdmin(admin.ModelAdmin):
    list_display = ("name", "icon")
    search_fields = ("name",)


@admin.register(RoomCategory)
class RoomCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "base_price_npr", "bed_type", "view_type", "max_occupancy")
    prepopulated_fields = {"slug": ("name",)}
    filter_horizontal = ("amenities",)


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ("room_number", "category", "floor", "status", "assigned_cleaner", "is_active")
    list_filter = ("status", "floor", "category", "is_active")
    search_fields = ("room_number",)


@admin.register(MaintenanceTicket)
class MaintenanceTicketAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "room", "priority", "status", "reported_by", "created_at")
    list_filter = ("priority", "status")
    search_fields = ("title", "room__room_number")
