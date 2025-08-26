import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen grid place-items-center py-16">
      <div className="w-full max-w-md glass rounded-2xl p-8 border border-slate-800">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-white font-semibold">
            <span className="inline-block h-8 w-8 rounded bg-indigo-600"></span>
            Verocta
          </div>
          <div className="mt-2 text-slate-400">{mode === 'login' ? 'Welcome back' : 'Create your account'}</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Ada Lovelace" />
            </div>
          )}
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Password</label>
            <input type="password" className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="••••••••" />
          </div>
          <button className="btn-primary w-full" type="submit">{mode === 'login' ? 'Login' : 'Create account'}</button>
        </form>
        <div className="text-center mt-4 text-sm text-slate-400">
          {mode === 'login' ? (
            <>Don't have an account? <button className="text-indigo-400 hover:text-indigo-300" onClick={() => setMode('signup')}>Sign up</button></>
          ) : (
            <>Already have an account? <button className="text-indigo-400 hover:text-indigo-300" onClick={() => setMode('login')}>Log in</button></>
          )}
        </div>
      </div>
    </div>
  )
}


