export default function AdminRoomsPage() {
  const rooms = [
    { number: "101", category: "Standard Queen", floor: 1, basePrice: 3800, weekendRate: 4200, status: "Active" },
    { number: "102", category: "Standard Queen", floor: 1, basePrice: 3800, weekendRate: 4200, status: "Active" },
    { number: "103", category: "Standard Queen", floor: 1, basePrice: 3800, weekendRate: 4200, status: "Out of Order (OOO)" },
    { number: "201", category: "Deluxe Mountain View", floor: 2, basePrice: 5500, weekendRate: 6200, status: "Active" },
    { number: "202", category: "Deluxe Mountain View", floor: 2, basePrice: 5500, weekendRate: 6200, status: "Active" },
    { number: "301", category: "Executive City Suite", floor: 3, basePrice: 8500, weekendRate: 9500, status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Room & Rate Management</h1>
          <p className="text-xs text-neutral-500">
            Control room inventory, dynamic pricing rules, seasonal surges, and out-of-order (OOO) blocks.
          </p>
        </div>
        <button className="bg-neutral-900 text-white px-4 py-2 rounded text-xs font-semibold">
          + Add New Room
        </button>
      </div>

      {/* DYNAMIC RATE ENGINE SETTINGS */}
      <section className="border bg-white rounded p-4 space-y-3">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="font-semibold text-sm">Dynamic Rate Rules (Dharan Tourism & Seasons)</h2>
          <span className="text-xs text-neutral-400">[Section: 3.1 Dynamic Rate Engine]</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="border p-3 rounded space-y-1">
            <span className="font-semibold block">Weekend Surge Rate</span>
            <p className="text-neutral-500">Auto +15% price adjustment for Friday & Saturday stays</p>
            <span className="text-green-700 font-bold block">Status: ENABLED</span>
          </div>
          <div className="border p-3 rounded space-y-1">
            <span className="font-semibold block">Festival / Dashain-Tihar Season</span>
            <p className="text-neutral-500">High occupancy surge pricing preset for October/November</p>
            <span className="text-neutral-500 font-bold block">Status: CONFIGURED</span>
          </div>
          <div className="border p-3 rounded space-y-1">
            <span className="font-semibold block">Minimum Stay Policy</span>
            <p className="text-neutral-500">Standard: 1 night / Festival weekends: 2 nights</p>
            <span className="text-blue-700 font-bold block">Active</span>
          </div>
        </div>
      </section>

      {/* INVENTORY TABLE */}
      <section className="border bg-white rounded overflow-hidden">
        <div className="p-3 border-b bg-neutral-50 flex justify-between items-center">
          <h2 className="font-semibold text-xs uppercase tracking-wider">Room Inventory Status</h2>
          <span className="text-xs text-neutral-500">6 Rooms Configured</span>
        </div>
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="border-b bg-neutral-100">
              <th className="p-3">Room #</th>
              <th className="p-3">Category</th>
              <th className="p-3">Floor</th>
              <th className="p-3">Weekday Rate (NPR)</th>
              <th className="p-3">Weekend Rate (NPR)</th>
              <th className="p-3">Operational Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {rooms.map((room) => (
              <tr key={room.number}>
                <td className="p-3 font-bold">Room {room.number}</td>
                <td className="p-3">{room.category}</td>
                <td className="p-3">Floor {room.floor}</td>
                <td className="p-3 font-medium">NPR {room.basePrice.toLocaleString()}</td>
                <td className="p-3 font-medium">NPR {room.weekendRate.toLocaleString()}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      room.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="p-3 text-right space-x-2">
                  <button className="border px-2.5 py-1 rounded">Edit</button>
                  <button className="border border-red-300 text-red-600 px-2.5 py-1 rounded">
                    {room.status === "Active" ? "Set OOO" : "Restore"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
