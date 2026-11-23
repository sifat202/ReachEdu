import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import api from "../Api/Api";
// import { AuthContext } from '../Auth/AuthContext';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authError, setAuthError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const { user, loading, signInWithGoogle, logOut } = useContext(AuthContext);

  const navItems = [
    { name: "Overview", path: "/" },
    { name: "Tracks", path: "/tracks" },
    { name: "My Course", path: "/course" },
    { name: "More Courses", path: "/more-courses" },
  ];

  // Active link gets a crisp pill highlight; inactive stays clean and subtle
  const linkClass = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-emerald-600 text-white shadow-xs"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    }`;

  const handleDemoLogin = async () => {
    setAuthError("");
    setSigningIn(true);
    try {
      const result = await signInWithGoogle();
      console.log(result);
      const studentData = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };
      api.post("/students", studentData).then((res) => console.log(res.data));
    } catch (err) {
      setAuthError(err?.message || "Google sign-in failed");
    } finally {
      setSigningIn(false);
    }
  };

  const handleLogout = async () => {
    setAuthError("");
    try {
      await logOut();
    } catch (err) {
      setAuthError(err?.message || "Sign-out failed");
    }
  };

  const displayName = user?.displayName || user?.email || "Learner";
  const fallbackInitial = displayName.charAt(0).toUpperCase();

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
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={linkClass}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CLUSTER: Auth Avatar (when signed in) or Demo Login Button + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          {loading ? (
            <span className="loading loading-spinner loading-sm text-emerald-600" />
          ) : user ? (
            <div className="flex items-center gap-2">
              {/* Profile Picture Always Shown + Name Revealed on Hover */}
              <div className="relative group flex items-center">
                <div
                  title={displayName}
                  className="w-9 h-9 rounded-full ring-2 ring-emerald-600/80 overflow-hidden bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={displayName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{fallbackInitial}</span>
                  )}
                </div>

                {/* Hover Name Popover */}
                <span className="pointer-events-none opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-150 absolute top-full right-0 mt-2 whitespace-nowrap rounded-lg bg-slate-900 text-white text-xs font-medium px-3 py-1.5 shadow-md z-50">
                  {displayName}
                </span>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="btn btn-xs sm:btn-sm rounded-full btn-ghost text-slate-600 hover:text-slate-900 normal-case"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={signingIn}
              className="btn btn-sm rounded-full bg-slate-900 hover:bg-emerald-700 text-white border-none px-5 font-medium normal-case"
            >
              {signingIn ? "Signing in..." : "Login"}
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="btn btn-sm btn-ghost btn-square md:hidden text-slate-800"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16M4 12h10M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Optional Error Banner if Google Popup Fails */}
      {authError && (
        <div className="bg-red-50 border-t border-red-200 text-red-700 text-xs px-4 py-2 text-center">
          {authError}
        </div>
      )}

      {/* Mobile Drawer Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#FAF9F6] px-4 py-3 space-y-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
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
