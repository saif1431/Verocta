import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent" />
        <div className="container-page py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Spend smarter. Grow faster.
              </h1>
              <p className="mt-4 text-lg text-slate-300 max-w-xl">
                Verocta turns your Monzo and Xero data into clear insights, a simple SpendScore, and AI recommendations you can act on.
              </p>
              <div className="mt-8 flex gap-3">
                <Link to="/dashboard" className="btn-primary">Get started</Link>
                <Link to="/product" className="btn-secondary">See how it works</Link>
              </div>
            </div>
            <div className="glass rounded-xl p-6 border border-slate-800/60">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-slate-900">
                  <div className="text-3xl font-bold text-indigo-400">82</div>
                  <div className="text-slate-400 text-sm">SpendScore</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-900">
                  <div className="text-3xl font-bold text-emerald-400">Green</div>
                  <div className="text-slate-400 text-sm">Traffic Light</div>
                </div>
                <div className="p-4 rounded-lg bg-slate-900">
                  <div className="text-3xl font-bold text-sky-400">12</div>
                  <div className="text-slate-400 text-sm">Insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-page py-20">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Upload CSVs', desc: 'Import Monzo or Xero CSVs securely.' },
            { title: 'We analyze', desc: 'We categorize spend and compute your SpendScore.' },
            { title: 'Get insights', desc: 'Actionable AI recommendations to optimize spend.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-slate-900 p-6 border border-slate-800">
              <div className="text-indigo-400 font-semibold">{item.title}</div>
              <div className="text-slate-300 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container-page py-10">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            'SpendScore with traffic light',
            'Smart categorization',
            'AI insights & recommendations',
            'CSV import (Monzo, Xero)',
            'PDF reports',
            'Dashboard overview',
          ].map((f) => (
            <div key={f} className="rounded-xl bg-slate-900 p-6 border border-slate-800 text-slate-300">{f}</div>
          ))}
        </div>
      </section>

      {/* Why Verocta */}
      <section className="container-page py-10">
        <h2 className="text-2xl font-semibold">Why Verocta</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { t: 'Clarity', d: 'See where your money goes in seconds.' },
            { t: 'Confidence', d: 'Know when spending is healthy or risky.' },
            { t: 'Action', d: 'Concrete steps to improve cash flow.' },
          ].map((i) => (
            <div key={i.t} className="rounded-xl bg-slate-900 p-6 border border-slate-800">
              <div className="text-indigo-400 font-semibold">{i.t}</div>
              <div className="text-slate-300 mt-1">{i.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing preview */}
      <section className="container-page py-20">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 flex items-center justify-between flex-col md:flex-row gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Simple pricing</h3>
            <p className="text-slate-300">Start free, upgrade when you need more.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/pricing" className="btn-secondary">View plans</Link>
            <Link to="/auth" className="btn-primary">Create account</Link>
          </div>
        </div>
      </section>
    </div>
  )
}


