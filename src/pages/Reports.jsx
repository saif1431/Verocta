export default function Reports() {
  function handleDownload() {
    const blob = new Blob([`Verocta Report\nGenerated: ${new Date().toISOString()}`], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'verocta-report.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container-page py-16">
      <h1 className="text-3xl font-bold">Reports</h1>
      <p className="text-slate-300 mt-2">Export summaries. PDF export can be wired with jsPDF later.</p>
      <div className="mt-6 rounded-xl bg-slate-900 p-6 border border-slate-800">
        <button className="btn-primary" onClick={handleDownload}>Download sample report</button>
      </div>
    </div>
  )
}


