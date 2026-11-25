import { AppShell } from "@/components/AppShell";
import Link from "next/link";
import { Plus, Search } from "lucide-react";

export default function ClientsPage() {
  // Placeholder data – will be replaced with Prisma query
  const clients = [
    { id: "1", name: "Emma & James Wilson", email: "emma@example.com", phone: "07700 900123", status: "booked", shoots: 1 },
    { id: "2", name: "Sarah Thompson", email: "sarah.t@example.com", phone: "07700 900456", status: "lead", shoots: 0 },
    { id: "3", name: "Bright Agency", email: "hello@bright.agency", phone: "01274 123456", status: "quoted", shoots: 1 },
  ];

  const statusColor: Record<string, string> = {
    lead: "bg-slate-100 text-slate-700",
    quoted: "bg-amber-50 text-amber-700",
    booked: "bg-blue-50 text-blue-700",
    completed: "bg-emerald-50 text-emerald-700",
    past: "bg-slate-100 text-slate-500",
  };

  return (
    <AppShell>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Clients</h1>
          <p className="text-slate-500 mt-1">Manage your clients and leads</p>
        </div>
        <Link
          href="/clients/new"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
        >
          <Plus className="h-4 w-4" />
          New Client
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search clients..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 text-left">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Phone</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Shoots</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {clients.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50">
                <td className="px-5 py-3.5">
                  <Link href={`/clients/${c.id}`} className="font-medium text-slate-900 hover:text-blue-600">
                    {c.name}
                  </Link>
                </td>
                <td className="px-5 py-3.5 text-slate-600">{c.email}</td>
                <td className="px-5 py-3.5 text-slate-600">{c.phone}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColor[c.status] || statusColor.lead}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-slate-600">{c.shoots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
