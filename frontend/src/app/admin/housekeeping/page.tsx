"use client";

import { useState } from "react";

export default function AdminHousekeepingPage() {
  const [rooms, setRooms] = useState([
    { id: 101, number: "101", category: "Standard Queen", floor: 1, status: "CLEAN", cleaner: "Ram Rai" },
    { id: 102, number: "102", category: "Standard Queen", floor: 1, status: "DIRTY", cleaner: "Unassigned" },
    { id: 103, number: "103", category: "Standard Queen", floor: 1, status: "OUT_OF_SERVICE", cleaner: "None" },
    { id: 201, number: "201", category: "Deluxe Mountain", floor: 2, status: "INSPECTION_REQUIRED", cleaner: "Ram Rai" },
    { id: 202, number: "202", category: "Deluxe Mountain", floor: 2, status: "DIRTY", cleaner: "Sita S." },
    { id: 301, number: "301", category: "Executive Suite", floor: 3, status: "CLEAN", cleaner: "Ram Rai" },
  ]);

  const updateStatus = (id: number, newStatus: string) => {
    setRooms((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CLEAN":
        return "border-green-500 bg-green-50 text-green-900";
      case "DIRTY":
        return "border-amber-500 bg-amber-50 text-amber-900";
      case "INSPECTION_REQUIRED":
        return "border-blue-500 bg-blue-50 text-blue-900";
      case "OUT_OF_SERVICE":
        return "border-red-500 bg-red-50 text-red-900";
      default:
        return "border-neutral-300";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Housekeeping & Operations Tracker</h1>
          <p className="text-xs text-neutral-500">
            Real-time room cleanliness statuses and maintenance logs (Mobile optimized for cleaners)
          </p>
        </div>
        <button className="bg-neutral-900 text-white px-4 py-2 rounded text-xs font-semibold">
          + Log Maintenance Ticket
        </button>
      </div>

      {/* QUICK STATUS SUMMARY PILLS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 border rounded bg-green-50 border-green-200">
          <span className="font-semibold text-green-900">2 Clean & Ready</span>
        </div>
        <div className="p-3 border rounded bg-amber-50 border-amber-200">
          <span className="font-semibold text-amber-900">2 Dirty / Needs Cleaning</span>
        </div>
        <div className="p-3 border rounded bg-blue-50 border-blue-200">
          <span className="font-semibold text-blue-900">1 Inspection Required</span>
        </div>
        <div className="p-3 border rounded bg-red-50 border-red-200">
          <span className="font-semibold text-red-900">1 Out of Service</span>
        </div>
      </div>

      {/* LIVE ROOM STATUS CARDS (ONE-TOUCH FAST ACTIONS) */}
      <section className="space-y-3">
        <p className="text-xs uppercase font-semibold text-neutral-400">[Section: 3.3 Live Room Status Dashboard]</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <div key={room.number} className={`border-2 rounded p-4 space-y-3 bg-white ${getStatusColor(room.status)}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">Room {room.number}</h3>
                  <p className="text-xs opacity-75">{room.category} • Floor {room.floor}</p>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded bg-white/70 border">
                  {room.status.replace(/_/g, " ")}
                </span>
              </div>

              <p className="text-xs opacity-80">Assigned: {room.cleaner}</p>

              {/* ONE-TOUCH TOUCH ACTION BUTTONS */}
              <div className="pt-2 border-t grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => updateStatus(room.id, "CLEAN")}
                  className="bg-green-700 text-white py-1.5 rounded font-medium text-center hover:bg-green-800"
                >
                  ✓ Mark Clean
                </button>
                <button
                  onClick={() => updateStatus(room.id, "DIRTY")}
                  className="bg-amber-600 text-white py-1.5 rounded font-medium text-center hover:bg-amber-700"
                >
                  Mark Dirty
                </button>
                <button
                  onClick={() => updateStatus(room.id, "INSPECTION_REQUIRED")}
                  className="bg-blue-600 text-white py-1.5 rounded font-medium text-center hover:bg-blue-700"
                >
                  Request Inspect
                </button>
                <button
                  onClick={() => updateStatus(room.id, "OUT_OF_SERVICE")}
                  className="bg-red-700 text-white py-1.5 rounded font-medium text-center hover:bg-red-800"
                >
                  Mark OOO
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: MAINTENANCE TICKETING */}
      <section className="border bg-white rounded p-4 space-y-3">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="font-semibold text-sm">Active Maintenance Tickets</h2>
          <span className="text-xs text-neutral-400">1 Urgent</span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="p-3 border rounded flex justify-between items-center bg-red-50 border-red-200">
            <div>
              <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mr-2">URGENT</span>
              <strong>Room 103: Solar water heater pressure valve leak</strong>
              <p className="text-neutral-500 mt-1">Reported by Ram Rai • 2 hours ago • Maintenance assigned</p>
            </div>
            <button className="bg-neutral-900 text-white px-3 py-1.5 rounded text-xs">Mark Resolved</button>
          </div>
        </div>
      </section>
    </div>
  );
}
