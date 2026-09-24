export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Reporting & Revenue Analytics</h1>
          <p className="text-xs text-neutral-500">
            Exportable daily ledger summaries, payment method breakdowns, and tax reports (Super Admin)
          </p>
        </div>
        <div className="flex gap-2">
          <button className="border px-3 py-1.5 rounded text-xs font-medium">Export CSV</button>
          <button className="bg-neutral-900 text-white px-3 py-1.5 rounded text-xs font-medium">
            Download Official Tax Ledger (PAN)
          </button>
        </div>
      </div>

      {/* MONTHLY SUMMARY METRICS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border bg-white p-4 rounded space-y-1">
          <span className="text-xs text-neutral-500">Total Monthly Revenue (NPR)</span>
          <p className="text-2xl font-bold">NPR 1,284,500</p>
          <p className="text-xs text-neutral-400">September 2026</p>
        </div>
        <div className="border bg-white p-4 rounded space-y-1">
          <span className="text-xs text-neutral-500">13% Nepal VAT Collected</span>
          <p className="text-2xl font-bold">NPR 147,750</p>
          <p className="text-xs text-neutral-400">Audited for IRD filing</p>
        </div>
        <div className="border bg-white p-4 rounded space-y-1">
          <span className="text-xs text-neutral-500">Average Stay Duration</span>
          <p className="text-2xl font-bold">2.4 Nights</p>
          <p className="text-xs text-neutral-400">Peak: Friday-Sunday</p>
        </div>
      </section>

      {/* PAYMENT METHOD BREAKDOWN (NEPAL CONTEXT) */}
      <section className="border bg-white rounded p-4 space-y-3">
        <h2 className="font-semibold text-sm">Payment Method Breakdown (This Month)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
          <div className="border p-3 rounded">
            <span className="text-neutral-500 block">eSewa ePay</span>
            <span className="font-bold text-sm">NPR 485,000</span>
            <span className="text-neutral-400 block mt-1">37.7% share</span>
          </div>
          <div className="border p-3 rounded">
            <span className="text-neutral-500 block">Khalti Wallet</span>
            <span className="font-bold text-sm">NPR 290,000</span>
            <span className="text-neutral-400 block mt-1">22.6% share</span>
          </div>
          <div className="border p-3 rounded">
            <span className="text-neutral-500 block">Fonepay QR / Bank</span>
            <span className="font-bold text-sm">NPR 265,000</span>
            <span className="text-neutral-400 block mt-1">20.6% share</span>
          </div>
          <div className="border p-3 rounded">
            <span className="text-neutral-500 block">Stripe (Intl Cards)</span>
            <span className="font-bold text-sm">NPR 142,500</span>
            <span className="text-neutral-400 block mt-1">11.1% share</span>
          </div>
          <div className="border p-3 rounded">
            <span className="text-neutral-500 block">Cash on Arrival</span>
            <span className="font-bold text-sm">NPR 102,000</span>
            <span className="text-neutral-400 block mt-1">7.9% share</span>
          </div>
        </div>
      </section>

      {/* RECENT DAILY LEDGER TABLE */}
      <section className="border bg-white rounded overflow-hidden">
        <div className="p-3 border-b bg-neutral-50">
          <h2 className="font-semibold text-xs uppercase tracking-wider">Recent Daily Folio Ledger</h2>
        </div>
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="border-b bg-neutral-100">
              <th className="p-3">Folio ID</th>
              <th className="p-3">Ref</th>
              <th className="p-3">Guest</th>
              <th className="p-3">Room</th>
              <th className="p-3">Room Charge</th>
              <th className="p-3">13% VAT</th>
              <th className="p-3">Total NPR</th>
              <th className="p-3">Payment Gateway</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-3 font-mono">#FOL-901</td>
              <td className="p-3 font-semibold">DHR-2026-8A39F</td>
              <td className="p-3">Subash Tamang</td>
              <td className="p-3">Room 201</td>
              <td className="p-3">NPR 9,734</td>
              <td className="p-3">NPR 1,266</td>
              <td className="p-3 font-bold">NPR 11,000</td>
              <td className="p-3">eSewa</td>
              <td className="p-3"><span className="text-green-700 font-semibold">Settled</span></td>
            </tr>
            <tr>
              <td className="p-3 font-mono">#FOL-902</td>
              <td className="p-3 font-semibold">DHR-2026-1F42B</td>
              <td className="p-3">Anjali Sharma</td>
              <td className="p-3">Room 101</td>
              <td className="p-3">NPR 3,362</td>
              <td className="p-3">NPR 438</td>
              <td className="p-3 font-bold">NPR 3,800</td>
              <td className="p-3">Khalti</td>
              <td className="p-3"><span className="text-green-700 font-semibold">Settled</span></td>
            </tr>
            <tr>
              <td className="p-3 font-mono">#FOL-903</td>
              <td className="p-3 font-semibold">DHR-2026-6E11C</td>
              <td className="p-3">Dr. K. Pradhan</td>
              <td className="p-3">Room 202</td>
              <td className="p-3">NPR 9,734</td>
              <td className="p-3">NPR 1,266</td>
              <td className="p-3 font-bold">NPR 11,000</td>
              <td className="p-3">Fonepay QR</td>
              <td className="p-3"><span className="text-green-700 font-semibold">Settled</span></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
