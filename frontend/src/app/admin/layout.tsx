import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-neutral-100 text-neutral-900">
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-white border-r p-4 flex flex-col justify-between">
        <div className="space-y-6">
          <div>
            <Link href="/admin" className="font-bold text-lg block tracking-wide">
              HOTEL OPS
            </Link>
            <span className="text-xs text-neutral-400">Dharan Staff Dashboard</span>
          </div>

          <nav className="space-y-1 text-sm font-medium">
            <Link
              href="/admin"
              className="block px-3 py-2 rounded hover:bg-neutral-100 text-neutral-700"
            >
              Dashboard Overview
            </Link>
            <Link
              href="/admin/calendar"
              className="block px-3 py-2 rounded hover:bg-neutral-100 text-neutral-700"
            >
              Booking Calendar Grid
            </Link>
            <Link
              href="/admin/rooms"
              className="block px-3 py-2 rounded hover:bg-neutral-100 text-neutral-700"
            >
              Room Inventory & Rates
            </Link>
            <Link
              href="/admin/housekeeping"
              className="block px-3 py-2 rounded hover:bg-neutral-100 text-neutral-700"
            >
              Housekeeping & Tasks
            </Link>
            <Link
              href="/admin/reports"
              className="block px-3 py-2 rounded hover:bg-neutral-100 text-neutral-700"
            >
              Reports & Revenue (ADR)
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t text-xs text-neutral-500 space-y-2">
          <p>Logged in: <strong>General Manager</strong></p>
          <div className="flex gap-2">
            <Link href="/" className="underline">View Public Site</Link>
            <span>•</span>
            <a href="http://127.0.0.1:8000/admin/" target="_blank" rel="noreferrer" className="underline">
              Django Admin
            </a>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
