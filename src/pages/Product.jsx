export default function Product() {
  const features = [
    {
      title: 'SpendScore + Traffic Light',
      desc: 'A single score with green/amber/red status to summarize your spending health.',
    },
    { title: 'CSV Import', desc: 'Upload Monzo and Xero CSVs in seconds.' },
    { title: 'Smart Categorization', desc: 'Automatic grouping into meaningful spending categories.' },
    { title: 'AI Insights', desc: 'Recommendations to reduce costs and improve cash flow.' },
    { title: 'Reports', desc: 'Export clean PDF summaries for stakeholders.' },
    { title: 'Dashboard', desc: 'At-a-glance overview with key trends.' },
  ]
  return (
    <div className="container-page py-16">
      <h1 className="text-3xl font-bold">Product</h1>
      <p className="text-slate-300 mt-2 max-w-2xl">Verocta helps founders and finance teams see spending clearly and act quickly.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl bg-slate-900 p-6 border border-slate-800">
            <div className="text-indigo-400 font-semibold">{f.title}</div>
            <div className="text-slate-300 mt-1">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


