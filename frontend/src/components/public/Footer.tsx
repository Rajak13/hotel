import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-50 py-8 mt-auto text-sm text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-semibold text-neutral-800">Hotel Operations & Booking Platform</p>
          <p className="text-xs text-neutral-500">Dharan, Koshi Province, Nepal</p>
        </div>
        <div className="flex gap-4 text-xs">
          <Link href="/rooms" className="hover:underline">Rooms</Link>
          <Link href="/booking" className="hover:underline">Reservations</Link>
          <Link href="/guest-portal" className="hover:underline">Express Check-in</Link>
          <Link href="/admin" className="hover:underline">Staff Operations</Link>
        </div>
      </div>
    </footer>
  );
}
