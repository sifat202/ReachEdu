import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'Tracks', path: '/courses' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Labs', path: '/labs' },
  ];

  // Active link gets a crisp pill highlight; inactive stays clean and subtle
  const linkClass = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-emerald-600 text-white shadow-xs'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-slate-200/80">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* LEFT CLUSTER: Demo Logo + Left-Aligned Navigation (NOT centered) */}
        <div className="flex items-center gap-6">
          {/* Demo Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-amber-300 flex items-center justify-center font-black text-lg tracking-tighter group-hover:rotate-3 transition-transform">
              R.
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">
              Reach<span className="text-emerald-600">Edu</span>
            </span>
          </Link>

          {/* Vertical Divider */}
          <span className="hidden md:inline-block h-5 w-px bg-slate-200" />

          {/* Desktop Links anchored to the LEFT beside the logo */}
          <ul className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end={item.path === '/'} className={linkClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CLUSTER: Demo Login Button + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/login"
            className="btn btn-sm rounded-full bg-slate-900 hover:bg-emerald-700 text-white border-none px-5 font-medium normal-case"
          >
            Demo Login
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="btn btn-sm btn-ghost btn-square md:hidden text-slate-800"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#FAF9F6] px-4 py-3 space-y-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;