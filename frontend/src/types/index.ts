// Core Domain Types for Hotel Platform (Dharan, Nepal)

export type UserRole = "SUPER_ADMIN" | "FRONT_DESK" | "HOUSEKEEPING" | "GUEST";

export type RoomCleanlinessStatus =
  | "CLEAN"
  | "DIRTY"
  | "INSPECTION_REQUIRED"
  | "OUT_OF_SERVICE";

export type ReservationStatus =
  | "PENDING"
  | "CONFIRMED"
  | "CHECKED_IN"
  | "CHECKED_OUT"
  | "CANCELLED";

export type PaymentGatewayType =
  | "ESEWA"
  | "KHALTI"
  | "FONEPAY"
  | "STRIPE"
  | "CASH";

export interface Amenity {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface RoomCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  base_price_npr: string;
  base_price_usd?: string;
  max_occupancy: number;
  bed_type: string;
  view_type: string;
  room_size_sqft: number;
  amenities: Amenity[];
  virtual_tour_url?: string;
  floor_plan_image?: string;
}

export interface Room {
  id: number;
  room_number: string;
  category: number;
  category_name?: string;
  floor: number;
  status: RoomCleanlinessStatus;
  assigned_cleaner?: number;
  notes?: string;
  is_active: boolean;
}

export interface AddonService {
  id: number;
  name: string;
  description: string;
  price_npr: string;
  is_active: boolean;
}

export interface Reservation {
  id: number;
  booking_reference: string;
  guest_name: string;
  guest_phone: string;
  guest_email: string;
  category: number;
  category_name?: string;
  room?: number;
  room_number?: string;
  check_in_date: string;
  check_out_date: string;
  adults: number;
  children: number;
  status: ReservationStatus;
  source: string;
  special_requests?: string;
  estimated_arrival_time?: string;
  id_verified: boolean;
  total_price_npr: string;
  addons?: {
    id: number;
    addon_name: string;
    quantity: number;
    unit_price_npr: string;
  }[];
  created_at: string;
}

export interface MaintenanceTicket {
  id: number;
  room: number;
  room_number?: string;
  reported_by?: number;
  title: string;
  description: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED";
  photo?: string;
  created_at: string;
  resolved_at?: string;
}
