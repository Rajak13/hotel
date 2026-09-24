import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div>
          <Link href="/" className="font-bold text-lg tracking-wide">
            HOTEL DHARAN
          </Link>
          <span className="text-xs text-neutral-500 ml-2">Dharan, Sunsari, Nepal</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/rooms" className="hover:underline">Rooms & Suites</Link>
          <Link href="/compare" className="hover:underline">Compare</Link>
          <Link href="/booking" className="hover:underline">Book Now</Link>
          <Link href="/guest-portal" className="hover:underline">Guest Portal</Link>
          <Link href="/admin" className="text-blue-600 font-medium hover:underline">Staff Portal</Link>
        </nav>
      </div>
    </header>
  );
}
