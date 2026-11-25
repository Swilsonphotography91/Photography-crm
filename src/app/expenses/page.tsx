import { AppShell } from "@/components/AppShell";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function ExpensesPage() {
  return (
    <AppShell>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Expenses</h1>
          <p className="text-slate-500 mt-1">Track money going out (gear, travel, software, etc.)</p>
        </div>
        <Link
          href="/expenses/new"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition"
        >
          <Plus className="h-4 w-4" />
          Add Expense
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 text-center text-slate-500">
        <p>No expenses recorded yet.</p>
        <p className="text-sm mt-2">This section is ready – we can wire up the form and list next.</p>
      </div>
    </AppShell>
  );
}
