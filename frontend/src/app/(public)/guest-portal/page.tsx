"use client";

import { useState } from "react";

export default function GuestPortalPage() {
  const [bookingRef, setBookingRef] = useState("DHR-2026-8A39F");
  const [isFound, setIsFound] = useState(false);
  const [isCheckinDone, setIsCheckinDone] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">Guest Portal & Express Check-In</h1>
        <p className="text-sm text-neutral-500">
          Manage your stay, submit express check-in verification, and make concierge requests prior to arrival.
        </p>
      </div>

      {/* LOOKUP RESERVATION */}
      <section className="border rounded p-4 bg-neutral-50 space-y-3">
        <h2 className="text-sm font-semibold uppercase text-neutral-600">Find Your Reservation</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={bookingRef}
            onChange={(e) => setBookingRef(e.target.value)}
            placeholder="e.g. DHR-2026-8A39F"
            className="flex-1 border p-2 rounded text-sm bg-white"
          />
          <button
            onClick={() => setIsFound(true)}
            className="bg-neutral-900 text-white px-5 py-2 rounded text-sm font-medium"
          >
            Retrieve Stay
          </button>
        </div>
      </section>

      {isFound && (
        <div className="space-y-6">
          {/* SECTION 1: RESERVATION DETAILS & SELF-MANAGEMENT */}
          <section className="border rounded p-4 space-y-3">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-bold">Stay Overview</h2>
              <span className="text-xs bg-green-100 text-green-800 font-semibold px-2.5 py-1 rounded">Confirmed</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div>
                <span className="text-xs text-neutral-400 block">Room</span>
                <span className="font-semibold">Deluxe Mountain View</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block">Check-in</span>
                <span className="font-semibold">Sep 25, 2026 (2:00 PM)</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block">Check-out</span>
                <span className="font-semibold">Sep 27, 2026 (12:00 PM)</span>
              </div>
              <div>
                <span className="text-xs text-neutral-400 block">Guests</span>
                <span className="font-semibold">2 Adults</span>
              </div>
            </div>
            <div className="flex gap-3 text-xs pt-2">
              <button className="border px-3 py-1.5 rounded">Modify Dates</button>
              <button className="border border-red-300 text-red-600 px-3 py-1.5 rounded">Cancel Stay</button>
            </div>
          </section>

          {/* SECTION 2: EXPRESS WEB CHECK-IN */}
          <section className="border rounded p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Express Web Check-in</h2>
              <span className="text-xs text-neutral-400">[Section: Pre-Arrival Verification]</span>
            </div>
            {isCheckinDone ? (
              <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded text-sm">
                ✓ Express check-in completed. Your digital room key & front desk fast-pass are ready for arrival.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsCheckinDone(true);
                }}
                className="space-y-3 text-sm"
              >
                <div>
                  <label className="text-xs text-neutral-500 block">Estimated Arrival Time at Hotel</label>
                  <input type="time" defaultValue="14:30" className="border p-2 rounded w-full sm:w-60" />
                </div>
                <div>
                  <label className="text-xs text-neutral-500 block">Upload ID Document (Citizenship, Passport, or Driving License)</label>
                  <input type="file" className="border p-2 rounded w-full bg-white text-xs" />
                  <p className="text-xs text-neutral-400 mt-1">Required for hotel registration compliance in Nepal</p>
                </div>
                <button type="submit" className="bg-neutral-900 text-white px-5 py-2 rounded text-xs font-semibold">
                  Complete Express Check-in
                </button>
              </form>
            )}
          </section>

          {/* SECTION 3: DIGITAL CONCIERGE & SPECIAL REQUESTS */}
          <section className="border rounded p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Digital Concierge Requests</h2>
              <span className="text-xs text-neutral-400">[Section: Digital Guest Concierge]</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <label className="border p-2 rounded flex items-center gap-2 cursor-pointer bg-neutral-50">
                <input type="checkbox" /> Extra Pillows
              </label>
              <label className="border p-2 rounded flex items-center gap-2 cursor-pointer bg-neutral-50">
                <input type="checkbox" /> Quiet / High Floor Room
              </label>
              <label className="border p-2 rounded flex items-center gap-2 cursor-pointer bg-neutral-50">
                <input type="checkbox" /> Vegetarian / Halal Breakfast
              </label>
              <label className="border p-2 rounded flex items-center gap-2 cursor-pointer bg-neutral-50">
                <input type="checkbox" /> Late Check-out Request
              </label>
              <label className="border p-2 rounded flex items-center gap-2 cursor-pointer bg-neutral-50">
                <input type="checkbox" /> Baby Cot / Extra Bed
              </label>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/9779800000000?text=Hello%20Hotel%20Dharan%2C%20I%20have%20a%20concierge%20question%20for%20booking%20DHR-2026-8A39F"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs bg-green-700 text-white px-4 py-2 rounded font-medium"
              >
                Chat directly on WhatsApp Concierge
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
