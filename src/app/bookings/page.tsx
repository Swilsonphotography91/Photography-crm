import { AppShell } from "@/components/AppShell";
import Link from "next/link";
import { Plus } from "lucide-react";
import { formatDate, formatCurrency } from "@/lib/utils";

export default function BookingsPage() {
  const bookings = [
    { id: "1", title: "Wilson Wedding", client: "Emma & James", date: "2026-12-12", status: "booked", price: 1850 },
    { id: "2", title: "Family Portrait – Thompsons", client: "Sarah Thompson", date: "2026-12-18", status: "deposit_paid", price: 450 },
    { id: "3", title: "Corporate Headshots", client: "Bright Agency", date: "2027-01-08", status: "quoted", price: 650 },
  ];

  const statusLabel: Record<string, string> = {
    inquiry: "Inquiry",
    quoted: "Quoted",
    deposit_paid: "Deposit Paid",
    booked: "Booked",
    completed: "Completed",
    cancelled: "Cancelled",
    delivered: "Delivered",
  };

  const statusColor: Record<string, string> = {
    inquiry: "bg-slate-100 text-slate-700",
    quoted: "bg-amber-50 text-amber-700",
    deposit_paid: "bg-blue-50 text-blue-700",
    booked: "bg-emerald-50 text-emerald-700",
    completed: "bg-violet-50 text-violet-700",
    cancelled: "bg-red-50 text-red-700",
    delivered: "bg-slate-100 text-slate-500",
  };

  return (
    <AppShell>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Bookings</h1>
          <p className="text-slate-500 mt-1">All shoots and sessions</p>
        </div>
        <Link
          href="/bookings/new"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
        >
          <Plus className="h-4 w-4" />
          New Booking
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 text-left">
            <tr>
              <th className="px-5 py-3 font-medium">Booking</th>
              <th className="px-5 py-3 font-medium">Client</th>
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-slate-50">
                <td className="px-5 py-3.5">
                  <Link href={`/bookings/${b.id}`} className="font-medium text-slate-900 hover:text-blue-600">
                    {b.title}
                  </Link>
                </td>
                <td className="px-5 py-3.5 text-slate-600">{b.client}</td>
                <td className="px-5 py-3.5 text-slate-600">{formatDate(b.date)}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor[b.status]}`}>
                    {statusLabel[b.status] || b.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right font-medium">{formatCurrency(b.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
