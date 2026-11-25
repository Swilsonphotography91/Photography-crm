import { AppShell } from "@/components/AppShell";
import { formatDate } from "@/lib/utils";
import { Calendar, Users, PoundSterling, Clock, Package } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Upcoming Shoots", value: "3", icon: Calendar, color: "bg-blue-500" },
    { label: "Active Clients", value: "12", icon: Users, color: "bg-emerald-500" },
    { label: "Outstanding", value: "£1,850", icon: PoundSterling, color: "bg-amber-500" },
    { label: "This Month", value: "£4,200", icon: Clock, color: "bg-violet-500" },
  ];

  const upcoming = [
    { id: "1", title: "Wilson Wedding", date: "2026-12-12", client: "Emma & James", status: "Booked" },
    { id: "2", title: "Family Portrait – Thompsons", date: "2026-12-18", client: "Sarah Thompson", status: "Deposit Paid" },
    { id: "3", title: "Corporate Headshots", date: "2027-01-08", client: "Bright Agency", status: "Quoted" },
  ];

  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back. Here’s what’s happening.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{s.label}</p>
                <p className="text-2xl font-bold mt-1 text-slate-900">{s.value}</p>
              </div>
              <div className={`${s.color} p-3 rounded-lg text-white`}>
                <s.icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Upcoming Bookings</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {upcoming.map((b) => (
              <div key={b.id} className="px-5 py-4 flex items-center justify-between hover:bg-slate-50">
                <div>
                  <p className="font-medium text-slate-900">{b.title}</p>
                  <p className="text-sm text-slate-500">{b.client}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{formatDate(b.date)}</p>
                  <span className="inline-flex mt-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Quick Actions</h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-3">
            <a href="/clients/new" className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition">
              <Users className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium">New Client</span>
            </a>
            <a href="/bookings/new" className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition">
              <Calendar className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium">New Booking</span>
            </a>
            <a href="/invoices/new" className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition">
              <PoundSterling className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium">New Invoice</span>
            </a>
            <a href="/packages" className="flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition">
              <Package className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium">Packages</span>
            </a>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
