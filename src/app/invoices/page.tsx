import { AppShell } from "@/components/AppShell";
import Link from "next/link";
import { Plus } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function InvoicesPage() {
  const invoices = [
    { id: "1", number: "INV-2026-001", client: "Emma & James Wilson", type: "Deposit", amount: 185, status: "paid", due: "2026-11-01" },
    { id: "2", number: "INV-2026-002", client: "Emma & James Wilson", type: "Final Balance", amount: 1665, status: "sent", due: "2026-11-12" },
    { id: "3", number: "INV-2026-003", client: "Sarah Thompson", type: "Deposit", amount: 90, status: "paid", due: "2026-11-20" },
  ];

  const statusColor: Record<string, string> = {
    draft: "bg-slate-100 text-slate-700",
    sent: "bg-blue-50 text-blue-700",
    paid: "bg-emerald-50 text-emerald-700",
    overdue: "bg-red-50 text-red-700",
  };

  return (
    <AppShell>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Invoices</h1>
          <p className="text-slate-500 mt-1">Deposits, balances and payments</p>
        </div>
        <Link
          href="/invoices/new"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
        >
          <Plus className="h-4 w-4" />
          New Invoice
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-500 text-left">
            <tr>
              <th className="px-5 py-3 font-medium">Invoice #</th>
              <th className="px-5 py-3 font-medium">Client</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Due</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50">
                <td className="px-5 py-3.5 font-medium text-slate-900">{inv.number}</td>
                <td className="px-5 py-3.5 text-slate-600">{inv.client}</td>
                <td className="px-5 py-3.5 text-slate-600">{inv.type}</td>
                <td className="px-5 py-3.5 text-slate-600">{formatDate(inv.due)}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColor[inv.status]}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right font-medium">{formatCurrency(inv.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
