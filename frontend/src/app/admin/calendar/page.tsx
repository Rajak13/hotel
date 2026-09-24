"use client";

import { useState } from "react";

export default function AdminCalendarPage() {
  const [showWalkInModal, setShowWalkInModal] = useState(false);

  const dates = ["Sep 24", "Sep 25", "Sep 26", "Sep 27", "Sep 28", "Sep 29", "Sep 30"];
  const rooms = [
    { number: "101", type: "Standard Queen", floor: "1" },
    { number: "102", type: "Standard Queen", floor: "1" },
    { number: "201", type: "Deluxe Mountain", floor: "2" },
    { number: "202", type: "Deluxe Mountain", floor: "2" },
    { number: "301", type: "Executive Suite", floor: "3" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Interactive Booking Calendar Grid</h1>
          <p className="text-xs text-neutral-500">
            Multi-room timeline view across calendar days with status indicators
          </p>
        </div>
        <button
          onClick={() => setShowWalkInModal(true)}
          className="bg-neutral-900 text-white px-4 py-2 rounded text-xs font-semibold"
        >
          + Fast-Track Walk-in Booking
        </button>
      </div>

      {/* CALENDAR MATRIX / GRID PLACEHOLDER */}
      <div className="border bg-white rounded overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b bg-neutral-50">
              <th className="p-3 border-r font-semibold w-36">Room / Category</th>
              {dates.map((d) => (
                <th key={d} className="p-3 border-r text-center font-semibold">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {rooms.map((room) => (
              <tr key={room.number} className="h-14">
                <td className="p-3 border-r bg-neutral-50">
                  <p className="font-bold">Room {room.number}</p>
                  <p className="text-[10px] text-neutral-400">{room.type}</p>
                </td>
                {/* DATES BLOCKS */}
                <td className="p-1 border-r text-center">
                  <div className="h-full bg-green-100 text-green-800 rounded p-1 text-[11px] font-medium flex items-center justify-center">
                    Subash T. (Checked-In)
                  </div>
                </td>
                <td className="p-1 border-r text-center">
                  <div className="h-full bg-blue-100 text-blue-800 rounded p-1 text-[11px] font-medium flex items-center justify-center">
                    Dr. Pradhan (Confirmed)
                  </div>
                </td>
                <td className="p-1 border-r text-center">
                  <span className="text-neutral-400">Available</span>
                </td>
                <td className="p-1 border-r text-center">
                  <div className="h-full bg-red-100 text-red-800 rounded p-1 text-[11px] font-medium flex items-center justify-center">
                    Blocked (OOO)
                  </div>
                </td>
                <td className="p-1 border-r text-center">
                  <span className="text-neutral-400">Available</span>
                </td>
                <td className="p-1 border-r text-center">
                  <span className="text-neutral-400">Available</span>
                </td>
                <td className="p-1 border-r text-center">
                  <span className="text-neutral-400">Available</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* WALK-IN MODAL PLACEHOLDER */}
      {showWalkInModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="font-bold text-sm">Walk-In / Phone Reservation</h3>
              <button onClick={() => setShowWalkInModal(false)} className="text-sm font-bold">✕</button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-neutral-500 block">Guest Name</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Guest Full Name" />
              </div>
              <div>
                <label className="text-neutral-500 block">Phone Number</label>
                <input type="tel" className="w-full border p-2 rounded" placeholder="+977 98XXXXXXXX" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-neutral-500 block">Room Number</label>
                  <select className="w-full border p-2 rounded">
                    <option>Room 101 (Standard)</option>
                    <option>Room 201 (Deluxe)</option>
                    <option>Room 301 (Suite)</option>
                  </select>
                </div>
                <div>
                  <label className="text-neutral-500 block">Nights</label>
                  <input type="number" defaultValue={1} className="w-full border p-2 rounded" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2 text-xs">
              <button onClick={() => setShowWalkInModal(false)} className="border px-3 py-2 rounded">Cancel</button>
              <button onClick={() => setShowWalkInModal(false)} className="bg-neutral-900 text-white px-4 py-2 rounded">
                Create & Check-In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
