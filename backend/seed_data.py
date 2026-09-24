"""
Seed script to populate initial sample data for Dharan Hotel Platform.
Run via: python seed_data.py
"""

import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hotel_core.settings")
django.setup()

from apps.accounts.models import User, UserRole
from apps.rooms.models import RoomCategory, Room, Amenity
from apps.reservations.models import AddonService


def run_seed():
    print("Seeding initial data for Hotel Operations Platform (Dharan, Nepal)...")

    # 1. Create Super Admin if not exists
    if not User.objects.filter(username="admin").exists():
        admin = User.objects.create_superuser(
            username="admin",
            email="admin@hoteldharan.com.np",
            password="adminpassword123",
            role=UserRole.SUPER_ADMIN,
            first_name="General",
            last_name="Manager",
        )
        print("Created Super Admin: admin / adminpassword123")

    # 2. Create Front Desk staff
    if not User.objects.filter(username="frontdesk").exists():
        User.objects.create_user(
            username="frontdesk",
            email="frontdesk@hoteldharan.com.np",
            password="staffpassword123",
            role=UserRole.FRONT_DESK,
            first_name="Sita",
            last_name="Shrestha",
            is_staff=True,
        )
        print("Created Front Desk: frontdesk / staffpassword123")

    # 3. Create Housekeeping staff
    if not User.objects.filter(username="housekeeper").exists():
        User.objects.create_user(
            username="housekeeper",
            email="housekeeper@hoteldharan.com.np",
            password="staffpassword123",
            role=UserRole.HOUSEKEEPING,
            first_name="Ram",
            last_name="Rai",
            is_staff=True,
        )
        print("Created Housekeeping: housekeeper / staffpassword123")

    # 4. Amenities
    amenities_data = [
        {"name": "High-Speed WiFi", "icon": "wifi", "description": "High-speed fiber internet"},
        {"name": "Dharan Hills View Balcony", "icon": "mountain", "description": "Private balcony facing the scenic hills"},
        {"name": "Air Conditioning", "icon": "wind", "description": "Climate controlled heating and cooling"},
        {"name": "Complimentary Breakfast", "icon": "coffee", "description": "Organic local & continental buffet"},
        {"name": "Room Service & Minibar", "icon": "utensils", "description": "24/7 in-room dining"},
        {"name": "Hot Water & Deep Soaking Tub", "icon": "bath", "description": "Solar & electric continuous hot water"},
    ]
    created_amenities = []
    for item in amenities_data:
        obj, _ = Amenity.objects.get_or_create(name=item["name"], defaults=item)
        created_amenities.append(obj)

    # 5. Room Categories
    categories_data = [
        {
            "name": "Deluxe Mountain View",
            "slug": "deluxe-mountain-view",
            "description": "Spacious room with a private balcony overlooking the Dharan foothills and lush tea garden breeze.",
            "base_price_npr": 5500.00,
            "base_price_usd": 42.00,
            "max_occupancy": 2,
            "bed_type": "KING",
            "view_type": "HILLS",
            "room_size_sqft": 320,
        },
        {
            "name": "Executive City Suite",
            "slug": "executive-city-suite",
            "description": "Luxurious suite with separate living area, work desk, and panorama of Dharan clock tower and valley.",
            "base_price_npr": 8500.00,
            "base_price_usd": 65.00,
            "max_occupancy": 3,
            "bed_type": "KING",
            "view_type": "CITY",
            "room_size_sqft": 480,
        },
        {
            "name": "Standard Queen",
            "slug": "standard-queen",
            "description": "Comfortable, quiet room ideal for solo travelers, business visits to Dharan/BPKIHS, or short stays.",
            "base_price_npr": 3800.00,
            "base_price_usd": 29.00,
            "max_occupancy": 2,
            "bed_type": "QUEEN",
            "view_type": "COURTYARD",
            "room_size_sqft": 240,
        },
    ]

    for cat_data in categories_data:
        category, _ = RoomCategory.objects.get_or_create(
            slug=cat_data["slug"],
            defaults=cat_data,
        )
        category.amenities.set(created_amenities[:4])

        # 6. Create sample rooms for each category
        floor = 1 if "Standard" in category.name else (2 if "Deluxe" in category.name else 3)
        for i in range(1, 4):
            room_num = f"{floor}0{i}"
            Room.objects.get_or_create(
                room_number=room_num,
                defaults={
                    "category": category,
                    "floor": floor,
                    "status": Room.CleanlinessStatus.CLEAN,
                },
            )

    # 7. Addon Experiences
    addons = [
        {"name": "Airport Pickup (Biratnagar Airport)", "price_npr": 2500.00, "description": "Private AC vehicle pickup from Biratnagar Airport to Dharan"},
        {"name": "Bhedetar & Namaste Jharna Tour", "price_npr": 3500.00, "description": "Half-day guided trip to Bhedetar hill station and waterfall"},
        {"name": "Traditional Nepali Dinner Package", "price_npr": 1200.00, "description": "Authentic eastern Nepali thali dinner for two"},
    ]
    for addon in addons:
        AddonService.objects.get_or_create(name=addon["name"], defaults=addon)

    print("Seeding completed successfully!")


if __name__ == "__main__":
    run_seed()
