import Link from "next/link";

interface RoomDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { slug } = await params;
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* BREADCRUMB */}
      <div className="text-xs text-neutral-500">
        <Link href="/" className="hover:underline">Home</Link> /{" "}
        <Link href="/rooms" className="hover:underline">Rooms</Link> /{" "}
        <span className="text-neutral-800 font-semibold">{formattedTitle}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: VISUAL SHOWCASE & DETAILS */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{formattedTitle}</h1>
            <p className="text-xs text-neutral-500">Dharan Foothills View • Luxury Stay</p>
          </div>

          {/* SECTION: PHOTO GALLERY & 360 TOUR INTEGRATION */}
          <div className="space-y-2">
            <p className="text-xs uppercase font-semibold text-neutral-400">[Section: Multi-angle Photo Gallery & 360° Virtual Tour]</p>
            <div className="h-64 sm:h-80 bg-neutral-200 border rounded flex flex-col items-center justify-center text-neutral-500">
              <span className="text-sm font-medium">[Main Room Showcase Image]</span>
              <span className="text-xs mt-1 underline cursor-pointer">Launch 360° Virtual Tour</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="h-16 bg-neutral-200 rounded flex items-center justify-center text-xs text-neutral-400">[Thumb 1]</div>
              <div className="h-16 bg-neutral-200 rounded flex items-center justify-center text-xs text-neutral-400">[Thumb 2]</div>
              <div className="h-16 bg-neutral-200 rounded flex items-center justify-center text-xs text-neutral-400">[Bathroom]</div>
              <div className="h-16 bg-neutral-200 rounded flex items-center justify-center text-xs text-neutral-400">[Balcony]</div>
            </div>
          </div>

          {/* SECTION: ROOM SPECIFICATIONS */}
          <div className="border rounded p-4 space-y-3">
            <h2 className="text-lg font-bold">Room Specifications</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div className="border p-2 rounded">
                <span className="text-xs text-neutral-400 block">Bed Size</span>
                <span className="font-semibold">King Size</span>
              </div>
              <div className="border p-2 rounded">
                <span className="text-xs text-neutral-400 block">Room Size</span>
                <span className="font-semibold">320 sq.ft</span>
              </div>
              <div className="border p-2 rounded">
                <span className="text-xs text-neutral-400 block">Max Guests</span>
                <span className="font-semibold">2 Adults</span>
              </div>
              <div className="border p-2 rounded">
                <span className="text-xs text-neutral-400 block">View</span>
                <span className="font-semibold">Dharan Hills</span>
              </div>
            </div>
          </div>

          {/* SECTION: FLOORPLAN VISUALIZER */}
          <div className="border rounded p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Virtual Room Preview & Floorplan</h2>
              <span className="text-xs text-neutral-400">[Section: Floorplan Visualizer]</span>
            </div>
            <div className="h-44 bg-neutral-100 border border-dashed rounded flex items-center justify-center text-xs text-neutral-500">
              [Interactive Floorplan Visualizer showing bed, bathroom, balcony, wardrobe locations]
            </div>
          </div>

          {/* SECTION: INCLUDED AMENITIES */}
          <div className="border rounded p-4 space-y-3">
            <h2 className="text-lg font-bold">Included Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-neutral-700">
              <div className="border p-2 rounded">✓ High-speed WiFi</div>
              <div className="border p-2 rounded">✓ Private Balcony</div>
              <div className="border p-2 rounded">✓ Solar Continuous Hot Water</div>
              <div className="border p-2 rounded">✓ Climate Controlled AC</div>
              <div className="border p-2 rounded">✓ Smart TV with Cable</div>
              <div className="border p-2 rounded">✓ Organic Breakfast Included</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOKING WIDGET */}
        <div className="space-y-4">
          <div className="border rounded p-4 sticky top-6 bg-neutral-50 space-y-4">
            <p className="text-xs uppercase font-semibold text-neutral-400">[Section: Room Booking Form Widget]</p>
            <div className="border-b pb-2">
              <span className="text-2xl font-bold">NPR 5,500</span>
              <span className="text-xs text-neutral-500"> / night</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="border bg-white p-2 rounded">Check-in: Select Date</div>
              <div className="border bg-white p-2 rounded">Check-out: Select Date</div>
              <div className="border bg-white p-2 rounded">Guests: 2 Adults</div>
            </div>
            <Link
              href={`/booking?room=${slug}`}
              className="block w-full py-3 bg-neutral-900 text-white rounded text-center text-sm font-semibold hover:bg-neutral-800"
            >
              Proceed to Booking
            </Link>
            <p className="text-xs text-neutral-500 text-center">Instant confirmation • No booking fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}
