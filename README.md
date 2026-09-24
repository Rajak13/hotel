# Hotel Dharan - Operations & Booking Platform

A full-stack hotel management and booking system designed for **Hotel Dharan (Dharan, Nepal)**.

---

## Architecture

- **Frontend (`frontend/`):** Next.js 16.3 (React 19 + TypeScript + Tailwind CSS v4 + Lucide Icons)
- **Backend (`backend/`):** Django 6.1.1 + Django REST Framework 3.18.1 + CORS + SQLite (dev) / PostgreSQL (prod)

---

## Quick Start

### 1. Start Django Backend (Port 8000)

```bash
cd backend
source .venv/bin/activate
python manage.py runserver
```

- **API Base:** `http://127.0.0.1:8000/api/`
- **Django Admin:** `http://127.0.0.1:8000/admin/`

#### Pre-seeded Accounts:
- **Super Admin:** `admin` / `adminpassword123`
- **Front Desk:** `frontdesk` / `staffpassword123`
- **Housekeeping:** `housekeeper` / `staffpassword123`

---

### 2. Start Next.js Frontend (Port 3000)

```bash
cd frontend
npm run dev
```

- **Web App:** `http://localhost:3000`

---

## Scaffolded Pages & Routes (Ready for Design References)

### Public / Guest Facing:
- `/` - **Home Page** (Hero, Availability Search Bar, Property Gallery, Featured Rooms, Local Experiences)
- `/rooms` - **Rooms & Suites** (Interactive Filters, Room Cards List)
- `/rooms/[slug]` - **Room Detail** (Specifications, Floorplan visualizer, 360 Tour, Booking Form)
- `/compare` - **Room Comparison** (Side-by-side comparison matrix)
- `/booking` - **Booking & Checkout** (Dates, Guest info, Add-on experiences, eSewa/Khalti/Fonepay/Stripe selector)
- `/guest-portal` - **Guest Portal** (Reservation retrieve, Express Web Check-in ID upload, Concierge requests)

### Staff / Admin Dashboard:
- `/admin` - **Overview** (Occupancy %, ADR, RevPAR, Today's arrivals/departures)
- `/admin/calendar` - **Interactive Booking Calendar** (Multi-room grid + Fast-track walk-in booking)
- `/admin/rooms` - **Room & Rate Management** (Inventory, Weekend surge rates, OOO blocking)
- `/admin/housekeeping` - **Housekeeping Tracker** (One-touch Clean/Dirty/Inspect status updates, Maintenance tickets)
- `/admin/reports` - **Revenue & Analytics** (13% VAT summaries, Payment method breakdown, Folio ledgers)
