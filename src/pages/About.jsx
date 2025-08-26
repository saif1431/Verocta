export default function About() {
  return (
    <div className="container-page py-16">
      <h1 className="text-3xl font-bold">About Verocta</h1>
      <p className="text-slate-300 mt-2 max-w-2xl">
        Our mission is to help small businesses spend smarter. We turn raw bank and accounting
        data into clarity and action so you can focus on growth.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          { t: 'Mission', d: 'Make financial decisions simple and data-driven for every SMB.' },
          { t: 'Values', d: 'Clarity, craftsmanship, and customer-first iteration.' },
          { t: 'Security', d: 'We follow best practices and never sell your data.' },
        ].map((i) => (
          <div key={i.t} className="rounded-xl bg-slate-900 p-6 border border-slate-800">
            <div className="text-indigo-400 font-semibold">{i.t}</div>
            <div className="text-slate-300 mt-1">{i.d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


