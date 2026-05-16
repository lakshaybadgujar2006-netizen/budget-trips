import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mountain, Menu, X, User as UserIcon, LogOut, LayoutDashboard } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loginWithGoogle, logout } = useAuth();
  const ADMIN_EMAIL = 'luckybadgujar2006@gmail.com';

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/packages', label: 'Tour Packages' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const isAdmin = user?.email === ADMIN_EMAIL;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="bg-emerald-600 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold font-sans text-gray-900 tracking-tight uppercase">Budget <span className="text-emerald-600">Trips</span></span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-emerald-600",
                    isActive ? "text-emerald-600" : "text-gray-600"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            {isAdmin && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  cn(
                    "text-sm font-bold transition-colors hover:text-orange-600 flex items-center gap-1",
                    isActive ? "text-orange-600" : "text-gray-400"
                  )
                }
              >
                <LayoutDashboard className="h-4 w-4" />
                Admin
              </NavLink>
            )}
            
            <div className="h-8 w-[1px] bg-gray-100 mx-2"></div>

            {user ? (
              <div className="flex items-center gap-4">
                <NavLink to="/profile" className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700 border border-emerald-200 overflow-hidden shadow-inner group-hover:border-emerald-500 transition-all">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
                    ) : (
                      user.displayName?.charAt(0).toUpperCase() || 'U'
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 leading-none">Traveler</span>
                    <span className="text-sm font-black text-gray-900 hidden lg:block leading-tight group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{user.displayName?.split(' ')[0]}</span>
                  </div>
                </NavLink>
                <button 
                  onClick={() => logout()}
                  className="p-1.5 text-gray-400 hover:text-red-500 transition-colors bg-gray-50 rounded-lg"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <NavLink 
                to="/auth"
                className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full transition-all"
              >
                <UserIcon className="h-4 w-4" />
                Sign In
              </NavLink>
            )}

            <NavLink
              to="/booking"
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg"
            >
              Book Now
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {user && (
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700 border border-emerald-200">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full rounded-full" />
                ) : (
                  user.displayName?.charAt(0).toUpperCase() || 'U'
                )}
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-bottom border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    isActive ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            {user ? (
              <>
                <NavLink 
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 w-full px-3 py-4 text-base font-bold text-gray-900 bg-gray-50 rounded-2xl mt-4"
                >
                  <UserIcon className="h-5 w-5 text-emerald-600" /> My Profile
                </NavLink>
                <button 
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="flex items-center gap-2 w-full px-3 py-4 text-base font-bold text-red-600 bg-red-50 rounded-2xl mt-2"
                >
                  <LogOut className="h-5 w-5" /> Sign Out
                </button>
              </>
            ) : (
              <NavLink 
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 w-full px-3 py-4 text-base font-bold text-emerald-600 bg-emerald-50 rounded-2xl mt-4"
              >
                <UserIcon className="h-5 w-5" /> Sign In
              </NavLink>
            )}

            <NavLink
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-emerald-600 text-white px-6 py-3 rounded-md text-base font-medium mt-4"
            >
              Book Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
