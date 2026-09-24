"use client";

import { useState } from "react";
import { Calendar, Users, BedDouble, ArrowRight } from "lucide-react";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("2026-09-25");
  const [checkOut, setCheckOut] = useState("2026-09-27");
  const [guests, setGuests] = useState("2 Adults");
  const [roomType, setRoomType] = useState("all");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="relative bg-[#F5F5F1] text-neutral-900 border border-[#E5E5DF] rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 items-center text-left">
          
          {/* FIELD 1: CHECK-IN */}
          <div className="px-4 py-2 rounded-xl sm:rounded-full hover:bg-black/[0.03] transition-colors border border-transparent hover:border-black/10 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EAEAE4] flex items-center justify-center shrink-0">
                <Calendar className="w-3.5 h-3.5 text-[#12544F]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#55635E] block">
                  Check In
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-[#092328] text-xs sm:text-sm font-semibold focus:outline-none w-full cursor-pointer [color-scheme:light]"
                />
              </div>
            </div>
          </div>

          {/* FIELD 2: CHECK-OUT */}
          <div className="px-4 py-2 rounded-xl sm:rounded-full hover:bg-black/[0.03] transition-colors border border-transparent hover:border-black/10 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EAEAE4] flex items-center justify-center shrink-0">
                <Calendar className="w-3.5 h-3.5 text-[#12544F]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#55635E] block">
                  Check Out
                </span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-[#092328] text-xs sm:text-sm font-semibold focus:outline-none w-full cursor-pointer [color-scheme:light]"
                />
              </div>
            </div>
          </div>

          {/* FIELD 3: GUESTS */}
          <div className="px-4 py-2 rounded-xl sm:rounded-full hover:bg-black/[0.03] transition-colors border border-transparent hover:border-black/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EAEAE4] flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5 text-[#12544F]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#55635E] block">
                  Guests
                </span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-[#092328] text-xs sm:text-sm font-semibold focus:outline-none w-full cursor-pointer [color-scheme:light]"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults</option>
                  <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                  <option value="3+ Guests (Family)">3+ Guests (Family)</option>
                </select>
              </div>
            </div>
          </div>

          {/* FIELD 4: ROOM TYPE */}
          <div className="px-4 py-2 rounded-xl sm:rounded-full hover:bg-black/[0.03] transition-colors border border-transparent hover:border-black/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EAEAE4] flex items-center justify-center shrink-0">
                <BedDouble className="w-3.5 h-3.5 text-[#12544F]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#55635E] block">
                  Room
                </span>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="bg-transparent text-[#092328] text-xs sm:text-sm font-semibold focus:outline-none w-full cursor-pointer [color-scheme:light]"
                >
                  <option value="all">All Suites</option>
                  <option value="deluxe-mountain-view">Deluxe Mountain View</option>
                  <option value="executive-city-suite">Executive City Suite</option>
                  <option value="standard-queen">Standard Queen</option>
                </select>
              </div>
            </div>
          </div>

          {/* FIELD 5: WARM OFF-WHITE BUTTON WITH CONTRAST PINE TEXT */}
          <div className="p-1">
            <button
              type="submit"
              className="w-full h-full min-h-[46px] bg-[#EAEAE4] hover:bg-[#E2E2DA] active:bg-[#DCDCD2] text-[#092328] border border-[#D5D5CE] font-bold text-xs tracking-[0.18em] uppercase rounded-xl sm:rounded-full px-6 py-3 flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{clicked ? "Searching..." : "Check Rates"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#12544F]" />
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
