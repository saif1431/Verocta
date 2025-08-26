import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

// ProfileDropdown Component
function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsOpen(false);
    // Force a refresh of the entire app to update the UI
    window.location.href = '/';
  };

  if (!user) return null;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-black hover:text-[#4A90E2] transition-colors"
      >
        <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>
        <span>{user.name || 'User'}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-lg border border-gray-200 z-10">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm text-gray-800 font-medium">{user.name}</p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-md font-medium transition-colors ${
          isActive ? 'text-black bg-primary' : 'text-black hover:text-white hover:bg-[#4A90E2]'
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Layout() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const hideHeaderFooter = location.pathname.startsWith('/auth');

  // Function to check authentication status
  const checkAuthStatus = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  };

  // Check authentication status on component mount and location change
  useEffect(() => {
    checkAuthStatus();
    
    // Listen for storage events (like when localStorage changes in another tab)
    const handleStorageChange = () => {
      checkAuthStatus();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && (
        <header className="border-b bg-white text-black border-slate-300 sticky top-0 z-40 ">
          <div className="container-page flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <img className='w-22' src="/logo.png" alt="" />
            </Link>
            <nav className="hidden md:flex text-black items-center gap-2">
              <NavItem to="/product" label="Product" />
              <NavItem to="/pricing" label="Pricing" />
              <NavItem to="/about" label="About" />
              <NavItem to="/upload" label="Upload" />
              <NavItem to="/insights" label="Insights" />
              <NavItem to="/reports" label="Reports" />
            </nav>
            <div className="flex items-center gap-2">
              {user ? (
                <ProfileDropdown />
              ) : (
                <>
                  <Link to="/auth" className="btn-secondary">Login</Link>
                  <Link to="/dashboard" className="btn-primary py-2">Open App</Link>
                </>
              )}
            </div>
          </div>
        </header>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      {!hideHeaderFooter && (
        <footer className="border-t border-slate-800/80 mt-16">
          <div className="container-page py-10 text-md grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 text-white font-semibold mb-2">
                <img className='w-16' src="/logo.png" alt="" />
                Verocta
              </div>
              <p className="">Smarter spending for small businesses.</p>
            </div>
            <div className="flex gap-22">
              <div>
                <div className="text-lg font-medium mb-2">Product</div>
                <ul className="space-y-1">
                  <li><Link to="/product" className="hover:text-gray-300">Features</Link></li>
                  <li><Link to="/pricing" className="hover:text-gray-300">Pricing</Link></li>
                  <li><Link to="/upload" className="hover:text-gray-300">CSV Upload</Link></li>
                </ul>
              </div>
              <div>
                <div className="text-white text-lg font-medium mb-2">Company</div>
                <ul className="space-y-1">
                  <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                  <li><Link to="/legal/terms" className="hover:text-gray-300">Terms</Link></li>
                  <li><Link to="/legal/privacy" className="hover:text-gray-300">Privacy</Link></li>
                </ul>
              </div>
            </div>
            <div className="text-white">
              © {new Date().getFullYear()} Verocta. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}