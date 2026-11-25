import { AppShell } from "@/components/AppShell";
import Link from "next/link";
import { Plus } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PackagesPage() {
  const packages = [
    { id: "1", name: "Full Day Wedding", description: "10–12 hours coverage, second shooter option, full gallery", price: 1850, depositPct: 10, hours: 11 },
    { id: "2", name: "Half Day Wedding", description: "5–6 hours coverage, ceremony + reception highlights", price: 1100, depositPct: 10, hours: 6 },
    { id: "3", name: "Portrait Session", description: "1–2 hours, 30+ edited images", price: 350, depositPct: 20, hours: 1.5 },
    { id: "4", name: "Family Session", description: "1.5 hours outdoor or studio", price: 450, depositPct: 20, hours: 1.5 },
  ];

  return (
    <AppShell>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Packages</h1>
          <p className="text-slate-500 mt-1">Your photography packages and pricing</p>
        </div>
        <Link
          href="/packages/new"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
        >
          <Plus className="h-4 w-4" />
          New Package
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {packages.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:border-blue-200 transition">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg text-slate-900">{p.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{p.description}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-slate-900">{formatCurrency(p.price)}</p>
                <p className="text-xs text-slate-500 mt-0.5">{p.depositPct}% deposit</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
              <span>{p.hours} hrs coverage</span>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
