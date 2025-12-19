// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// SVG Icons Components
const MenuIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const LogoutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });

  // Load user data from localStorage
  useEffect(() => {
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Navigation items configuration
  const navItems = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/grid", label: "Grid View" },
    { to: "/table", label: "Table View" },
  ];

  // Handle logout
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setTimeout(() => {
        window.location.href = "/";
      }, 300);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // CSS Classes
  const desktopLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
     ${isActive
      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
      : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
     ${isActive
      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <nav
      className="bg-gray-900 w-screen shadow-lg border-b border-gray-800 sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left Section - Logo & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>

            {/* Logo with Beautiful STK Text */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigate("/dashboard")}
              role="button"
              tabIndex={0}
              aria-label="Go to dashboard"
              onKeyDown={(e) => e.key === "Enter" && navigate("/dashboard")}
            >
              {/* STK Logo Container */}
              <div className="relative">
                {/* Main STK Logo with Gradient */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
                    
                    {/* STK Text */}
                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-2xl">
                      <div className="flex items-center gap-1">
                        {/* S Letter */}
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          S
                        </span>
                        
                        {/* T Letter */}
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          T
                        </span>
                        
                        {/* K Letter */}
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          K
                        </span>
                        
                        {/* Sparkle Effect */}
                        <svg className="w-4 h-4 ml-1 text-cyan-300 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Corner Accents */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-cyan-500 to-transparent rounded-full opacity-60"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-l from-blue-500 to-transparent rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Brand Name - ParkEase */}
              <div className="flex flex-col">
                <span className="font-bold text-white text-xl group-hover:text-cyan-300 transition-colors">
                  ParkEase
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-wide">
                  Parking Management
                </span>
              </div>
            </div>
          </div>

          {/* Center - Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={desktopLinkClass}
                end={item.to === "/dashboard"}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right - User Info & Logout */}
          <div className="flex items-center gap-4">
            {/* User Info - Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <div
                className="w-9 h-9 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md group/user"
                aria-label="User avatar"
              >
                <span className="group-hover/user:scale-110 transition-transform">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
              <div className="hidden lg:block">
                <p className="text-white text-sm font-medium truncate max-w-[150px]">
                  {user?.name || 'User'}
                </p>
                <p className="text-gray-400 text-xs truncate max-w-[150px]">
                  {user?.email || ''}
                </p>
              </div>
            </div>

            {/* Logout Button - Desktop */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Logout"
            >
              {isLoggingOut ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="hidden lg:inline">Logging out...</span>
                </>
              ) : (
                <>
                  <LogoutIcon className="w-5 h-5" />
                  <span className="hidden lg:inline">Logout</span>
                </>
              )}
            </button>

            {/* Logout Button - Mobile (Icon only) */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="sm:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Logout"
            >
              <LogoutIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu-container md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen
              ? 'max-h-96 opacity-100 py-4 border-t border-gray-800'
              : 'max-h-0 opacity-0'
            }`}
        >
          <div className="pt-4 pb-2 border-t border-gray-800 bg-gray-800/95 backdrop-blur-sm">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-1 px-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={mobileLinkClass}
                  onClick={() => setIsMobileMenuOpen(false)}
                  end={item.to === "/dashboard"}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* User Info in Mobile */}
            <div className="px-4 py-3 border-t border-gray-700 mt-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-gray-400 text-sm truncate">
                    {user?.email || ''}
                  </p>
                </div>
              </div>

              {/* Mobile Logout Button */}
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoggingOut ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging out...
                  </>
                ) : (
                  <>
                    <LogoutIcon className="w-5 h-5" />
                    Logout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}