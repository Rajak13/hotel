import Link from "next/link";

export default function RoomComparisonPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">Dynamic Room Comparison</h1>
        <p className="text-sm text-neutral-500">
          Compare up to 3 room categories side-by-side to choose the best stay for your visit to Dharan.
        </p>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b bg-neutral-100">
              <th className="p-3 w-1/4 font-semibold text-neutral-600">Feature / Metric</th>
              <th className="p-3 w-1/4 font-bold">Standard Queen</th>
              <th className="p-3 w-1/4 font-bold">Deluxe Mountain View</th>
              <th className="p-3 w-1/4 font-bold">Executive City Suite</th>
            </tr>
          </thead>
          <tbody className="divide-y text-neutral-700">
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Base Price</td>
              <td className="p-3 font-semibold">NPR 3,800 / night</td>
              <td className="p-3 font-semibold">NPR 5,500 / night</td>
              <td className="p-3 font-semibold">NPR 8,500 / night</td>
            </tr>
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Room Size</td>
              <td className="p-3">240 sq.ft</td>
              <td className="p-3">320 sq.ft</td>
              <td className="p-3">480 sq.ft</td>
            </tr>
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Bed Type</td>
              <td className="p-3">Queen Bed</td>
              <td className="p-3">King Bed</td>
              <td className="p-3">King Bed + Living Area</td>
            </tr>
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Scenic View</td>
              <td className="p-3">Courtyard View</td>
              <td className="p-3">Dharan Foothills / Mountain</td>
              <td className="p-3">Dharan City & Clock Tower</td>
            </tr>
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Max Occupancy</td>
              <td className="p-3">2 Adults</td>
              <td className="p-3">2 Adults</td>
              <td className="p-3">3 Adults (Sofa Bed)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Balcony</td>
              <td className="p-3 text-neutral-400">No</td>
              <td className="p-3 text-green-700 font-medium">Yes (Private Balcony)</td>
              <td className="p-3 text-green-700 font-medium">Yes (Corner Terrace)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Tub / Jacuzzi</td>
              <td className="p-3 text-neutral-400">Walk-in Shower</td>
              <td className="p-3 text-neutral-400">Walk-in Rain Shower</td>
              <td className="p-3 text-green-700 font-medium">Deep Soaking Tub</td>
            </tr>
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Included Breakfast</td>
              <td className="p-3">Continental</td>
              <td className="p-3">Buffet & Organic Local</td>
              <td className="p-3">In-Room or Buffet</td>
            </tr>
            <tr>
              <td className="p-3 font-medium bg-neutral-50">Action</td>
              <td className="p-3">
                <Link href="/booking?room=standard-queen" className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded inline-block">
                  Book Standard
                </Link>
              </td>
              <td className="p-3">
                <Link href="/booking?room=deluxe-mountain-view" className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded inline-block">
                  Book Deluxe
                </Link>
              </td>
              <td className="p-3">
                <Link href="/booking?room=executive-city-suite" className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded inline-block">
                  Book Executive
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
