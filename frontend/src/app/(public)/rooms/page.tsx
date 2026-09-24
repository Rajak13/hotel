import Link from "next/link";

export default function RoomsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* HEADER */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">Rooms & Suites</h1>
        <p className="text-sm text-neutral-500">Explore accommodation options in Dharan</p>
      </div>

      {/* FILTER BAR SECTION */}
      <div className="p-4 border rounded bg-neutral-50 space-y-2">
        <p className="text-xs uppercase font-semibold text-neutral-400">[Section: Interactive Room Categorization Filter Bar]</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="border bg-white p-2 rounded">View: All (Hills, City, Garden)</div>
          <div className="border bg-white p-2 rounded">Bed Type: All (King, Queen, Twin)</div>
          <div className="border bg-white p-2 rounded">Occupancy: Up to 4 guests</div>
          <div className="border bg-white p-2 rounded">Price Range: NPR 3,000 - 10,000</div>
        </div>
      </div>

      {/* ROOM LISTING SECTION */}
      <div className="space-y-6">
        <p className="text-xs uppercase font-semibold text-neutral-400">[Section: Room Cards List]</p>
        
        {/* ROOM CARD 1 */}
        <div className="border rounded p-4 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 h-44 bg-neutral-200 rounded flex items-center justify-center text-xs text-neutral-500">
            [Room Image & Gallery]
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-bold">Deluxe Mountain View</h2>
              <span className="font-bold text-neutral-900">NPR 5,500 <span className="text-xs text-neutral-500">/ night</span></span>
            </div>
            <p className="text-xs text-neutral-500">Floor 2 • King Bed • 320 sq.ft • Max 2 Guests • Mountain View</p>
            <p className="text-sm text-neutral-600">
              Private balcony with panoramic view of the Dharan hills, solar hot water, fast WiFi, and organic breakfast included.
            </p>
            <div className="flex gap-2 pt-2 text-xs">
              <span className="border px-2 py-1 rounded bg-neutral-100">WiFi</span>
              <span className="border px-2 py-1 rounded bg-neutral-100">Balcony</span>
              <span className="border px-2 py-1 rounded bg-neutral-100">Air Conditioning</span>
              <span className="border px-2 py-1 rounded bg-neutral-100">Breakfast</span>
            </div>
            <div className="flex gap-3 pt-3 text-xs">
              <Link href="/rooms/deluxe-mountain-view" className="border px-4 py-2 rounded font-medium">
                View Specifications & Floorplan
              </Link>
              <Link href="/booking?room=deluxe-mountain-view" className="bg-neutral-900 text-white px-4 py-2 rounded font-medium">
                Select & Book
              </Link>
              <Link href="/compare" className="border px-3 py-2 rounded text-neutral-600">
                + Add to Compare
              </Link>
            </div>
          </div>
        </div>

        {/* ROOM CARD 2 */}
        <div className="border rounded p-4 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 h-44 bg-neutral-200 rounded flex items-center justify-center text-xs text-neutral-500">
            [Room Image & Gallery]
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-bold">Executive City Suite</h2>
              <span className="font-bold text-neutral-900">NPR 8,500 <span className="text-xs text-neutral-500">/ night</span></span>
            </div>
            <p className="text-xs text-neutral-500">Floor 3 • King Bed • 480 sq.ft • Max 3 Guests • City View</p>
            <p className="text-sm text-neutral-600">
              Spacious suite overlooking Dharan clock tower and market with private workspace, soaking tub, and minibar.
            </p>
            <div className="flex gap-2 pt-2 text-xs">
              <span className="border px-2 py-1 rounded bg-neutral-100">WiFi</span>
              <span className="border px-2 py-1 rounded bg-neutral-100">Deep Tub</span>
              <span className="border px-2 py-1 rounded bg-neutral-100">Living Lounge</span>
            </div>
            <div className="flex gap-3 pt-3 text-xs">
              <Link href="/rooms/executive-city-suite" className="border px-4 py-2 rounded font-medium">
                View Specifications & Floorplan
              </Link>
              <Link href="/booking?room=executive-city-suite" className="bg-neutral-900 text-white px-4 py-2 rounded font-medium">
                Select & Book
              </Link>
              <Link href="/compare" className="border px-3 py-2 rounded text-neutral-600">
                + Add to Compare
              </Link>
            </div>
          </div>
        </div>

        {/* ROOM CARD 3 */}
        <div className="border rounded p-4 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 h-44 bg-neutral-200 rounded flex items-center justify-center text-xs text-neutral-500">
            [Room Image & Gallery]
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-bold">Standard Queen</h2>
              <span className="font-bold text-neutral-900">NPR 3,800 <span className="text-xs text-neutral-500">/ night</span></span>
            </div>
            <p className="text-xs text-neutral-500">Floor 1 • Queen Bed • 240 sq.ft • Max 2 Guests • Courtyard View</p>
            <p className="text-sm text-neutral-600">
              Cozy, quiet room ideal for short stays, BPKIHS hospital visitors, and solo travelers.
            </p>
            <div className="flex gap-2 pt-2 text-xs">
              <span className="border px-2 py-1 rounded bg-neutral-100">WiFi</span>
              <span className="border px-2 py-1 rounded bg-neutral-100">Work Desk</span>
            </div>
            <div className="flex gap-3 pt-3 text-xs">
              <Link href="/rooms/standard-queen" className="border px-4 py-2 rounded font-medium">
                View Specifications & Floorplan
              </Link>
              <Link href="/booking?room=standard-queen" className="bg-neutral-900 text-white px-4 py-2 rounded font-medium">
                Select & Book
              </Link>
              <Link href="/compare" className="border px-3 py-2 rounded text-neutral-600">
                + Add to Compare
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
