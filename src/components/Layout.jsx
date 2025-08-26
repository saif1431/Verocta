import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-800'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Layout() {
  const location = useLocation()
  const hideHeaderFooter = location.pathname.startsWith('/auth')

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && (
        <header className="border-b border-slate-800/80 bg-slate-950/80 sticky top-0 z-40 backdrop-blur">
          <div className="container-page flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-white font-semibold">
              <span className="inline-block h-8 w-8 rounded bg-indigo-600"></span>
              Verocta
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              <NavItem to="/product" label="Product" />
              <NavItem to="/pricing" label="Pricing" />
              <NavItem to="/about" label="About" />
              <NavItem to="/upload" label="Upload" />
              <NavItem to="/insights" label="Insights" />
              <NavItem to="/reports" label="Reports" />
            </nav>
            <div className="flex items-center gap-2">
              <Link to="/auth" className="btn-secondary">Login</Link>
              <Link to="/dashboard" className="btn-primary">Open App</Link>
            </div>
          </div>
        </header>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      {!hideHeaderFooter && (
        <footer className="border-t border-slate-800/80 mt-16">
          <div className="container-page py-10 text-sm text-slate-400 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 text-white font-semibold mb-2">
                <span className="inline-block h-6 w-6 rounded bg-indigo-600"></span>
                Verocta
              </div>
              <p className="text-slate-400">Smarter spending for small businesses.</p>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="text-slate-300 font-medium mb-2">Product</div>
                <ul className="space-y-1">
                  <li><Link to="/product" className="hover:text-white">Features</Link></li>
                  <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                  <li><Link to="/upload" className="hover:text-white">CSV Upload</Link></li>
                </ul>
              </div>
              <div>
                <div className="text-slate-300 font-medium mb-2">Company</div>
                <ul className="space-y-1">
                  <li><Link to="/about" className="hover:text-white">About</Link></li>
                  <li><Link to="/legal/terms" className="hover:text-white">Terms</Link></li>
                  <li><Link to="/legal/privacy" className="hover:text-white">Privacy</Link></li>
                </ul>
              </div>
            </div>
            <div className="text-slate-400">
              © {new Date().getFullYear()} Verocta. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}


