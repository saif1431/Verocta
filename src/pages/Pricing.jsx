export default function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', features: ['Upload 2 CSVs/mo', 'Basic categories', 'Email support'] },
    { name: 'Pro', price: '$12/mo', features: ['Unlimited CSVs', 'AI insights', 'PDF reports', 'Priority support'] },
    { name: 'Team', price: '$29/mo', features: ['Multi-user', 'Shared dashboards', 'Export & API (coming)'] },
  ]
  return (
    <div className="container-page py-16">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="text-slate-300 mt-2">Simple plans. No surprises.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
            <div className="text-xl font-semibold">{p.name}</div>
            <div className="text-3xl font-bold mt-2">{p.price}</div>
            <ul className="mt-4 space-y-2 text-slate-300">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="btn-primary mt-6 w-full">Choose {p.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}


