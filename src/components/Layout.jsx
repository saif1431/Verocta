import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';

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

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-md font-medium transition-colors ${
          isActive ? 'text-black ' : 'text-black hover:text-white hover:bg-[#4A90E2]'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && (
        <header className="border-b bg-white text-black border-slate-300 sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <img className='w-22' src="/logo.png" alt="Verocta Logo" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex text-black items-center gap-2">
              <NavItem to="/product" label="Product" />
              <NavItem to="/pricing" label="Pricing" />
              <NavItem to="/Resources" label="Resources" />
              <NavItem to="/Company" label="Company" />
              <NavItem to="/Legal" label="Legal" />
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <div className='flex items-center gap-2'>
                  <ProfileDropdown />
                  <Link to="/dashboard" className="py-3 px-6 rounded-md btn-secondary hover:text-white">
                    Dashboard
                  </Link>
                </div>          
              ) : (
                <>
                  <Link to="/auth" className="border-2 py-3 px-4 rounded-md btn-primary hover:text-white">
                    Login
                  </Link>
                  <Link to="" className="py-3 px-6 rounded-md btn-secondary hover:text-white">
                    Start your free trial
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-opacity-50" onClick={closeMobileMenu}>
              <div 
                className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-6">
                    <button 
                      onClick={closeMobileMenu}
                      className="p-2 rounded-md hover:bg-gray-100"
                      aria-label="Close menu"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-4 mb-8">
                    <NavItem to="/product" label="Product" onClick={closeMobileMenu} />
                    <NavItem to="/pricing" label="Pricing" onClick={closeMobileMenu} />
                    <NavItem to="/Resources" label="Resources" onClick={closeMobileMenu} />
                    <NavItem to="/Company" label="Company" onClick={closeMobileMenu} />
                    <NavItem to="/Legal" label="Legal" onClick={closeMobileMenu} />
                  </nav>

                  {/* Mobile Auth Buttons */}
                  <div className="mt-auto space-y-4">
                    {user ? (
                      <>
                        <div className="p-3 bg-gray-100 rounded-md">
                          <p className="text-sm font-medium text-gray-800">Signed in as</p>
                          <p className="text-sm text-gray-600 truncate">{user.email}</p>
                        </div>
                        <Link 
                          to="/dashboard" 
                          className="block w-full text-center py-3 px-4 rounded-md btn-secondary hover:text-white"
                          onClick={closeMobileMenu}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            localStorage.removeItem('user');
                            setUser(null);
                            closeMobileMenu();
                            window.location.href = '/';
                          }}
                          className="block w-full text-center py-3 px-4 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                          Sign out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link 
                          to="/auth" 
                          className="block w-full text-center py-3 px-4 rounded-md border-2 btn-primary hover:text-white"
                          onClick={closeMobileMenu}
                        >
                          Login
                        </Link>
                        <Link 
                          to="" 
                          className="block w-full text-center py-3 px-4 rounded-md btn-secondary hover:text-white"
                          onClick={closeMobileMenu}
                        >
                          Start your free trial
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}