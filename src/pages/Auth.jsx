import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Default credentials for demo purposes
  const defaultCredentials = {
    email: 'demo@verocta.com',
    password: 'password123'
  }

  function handleInputChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    
    if (mode === 'login') {
      // Check if credentials match the default ones
      if (formData.email === defaultCredentials.email && 
          formData.password === defaultCredentials.password) {
        
        // Store user data in localStorage
        const userData = {
          name: 'Demo User',
          email: formData.email,
          isLoggedIn: true
        }
        localStorage.setItem('user', JSON.stringify(userData))
        
        // Navigate to dashboard
        navigate('/dashboard')
      } else {
        setError('Invalid email or password. Use demo@verocta.com / password123')
      }
    } else {
      // Signup logic
      if (!formData.name || !formData.email || !formData.password) {
        setError('Please fill all fields')
        return
      }
      
      // Store user data in localStorage
      const userData = {
        name: formData.name,
        email: formData.email,
        isLoggedIn: true
      }
      localStorage.setItem('user', JSON.stringify(userData))
      
      // Navigate to dashboard
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen grid place-items-center py-16">
      <div className="w-full max-w-md  rounded-2xl p-8 border border-slate-300 shadow-xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-white font-semibold">
            <img className='w-20' src="/logo.png" alt="" />
            
          </div>
          <div className="mt-2 text-slate-800">{mode === 'login' ? 'Welcome back' : 'Create your account'}</div>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-800 rounded-md text-zinc-900 text-sm">
            {error}
          </div>
        )}
        
        {mode === 'login' && (
          <div className="mb-4 p-3 bg-slate-300 border border-slate-700 rounded-md text-black text-sm">
            Demo credentials: demo@verocta.com / password123
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm text-slate-800 mb-1">Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-md  border border-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" 
                placeholder="Ada Lovelace" 
              />
            </div>
          )}
          <div>
            <label className="block text-sm text-slate-800 mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-md  border border-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" 
              placeholder="you@company.com" 
            />
          </div>
          <div>
            <label className="block text-sm text-slate-800 mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full rounded-md  border border-slate-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" 
              placeholder="••••••••" 
            />
          </div>
          <button className="btn-primary text-center w-fit py-3 rounded-md btn-primary text-white font-medium" type="submit">
            {mode === 'login' ? 'Login' : 'Create account'}
          </button>
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