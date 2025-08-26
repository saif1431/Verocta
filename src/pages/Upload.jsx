import { useState } from 'react'

export default function Upload() {
  const [fileName, setFileName] = useState('')
  const [rows, setRows] = useState(0)

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    // Placeholder parse: count lines quickly (demo only)
    const reader = new FileReader()
    reader.onload = () => {
      const text = reader.result || ''
      const lineCount = String(text).split(/\n/).length
      setRows(lineCount)
    }
    reader.readAsText(file)
  }

  return (
    <div className="container-page py-16">
      <h1 className="text-3xl font-bold">Upload CSV</h1>
      <p className="text-slate-300 mt-2">Import Monzo or Xero CSVs. We will categorize and analyze them.</p>

      <div className="mt-8 rounded-xl bg-slate-900 p-6 border border-slate-800">
        <label className="block text-sm text-slate-300 mb-2">Choose CSV file</label>
        <input type="file" accept=".csv" onChange={handleFile} className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-white hover:file:bg-indigo-500" />
        {fileName && (
          <div className="mt-4 text-slate-300">Loaded: {fileName} ({rows} rows)</div>
        )}
      </div>
    </div>
  )
}


