import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="container-page py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link to="/upload" className="btn-primary">Upload CSV</Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
          <div className="text-slate-400 text-sm">SpendScore</div>
          <div className="text-5xl font-bold text-indigo-400">82</div>
        </div>
        <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
          <div className="text-slate-400 text-sm">Traffic Light</div>
          <div className="text-3xl font-bold text-emerald-400">Green</div>
        </div>
        <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
          <div className="text-slate-400 text-sm">Key Insights</div>
          <ul className="mt-2 text-slate-300 list-disc list-inside space-y-1">
            <li>Subscriptions up 8% MoM</li>
            <li>Vendor X increased rates</li>
            <li>Consider annual plan savings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


