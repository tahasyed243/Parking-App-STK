// src/pages/HomePage.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Snowfall from "react-snowfall";

// Custom STK Logo Component
const STKLogo = () => (
  <div className="relative group">
    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
    
    {/* STK Logo Container */}
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 shadow-xl">
      <div className="flex items-center gap-0.5">
        {/* S Letter with gradient */}
        <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          S
        </span>
        
        {/* T Letter with gradient */}
        <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          T
        </span>
        
        {/* K Letter with gradient */}
        <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          K
        </span>
        
        {/* Sparkle Icon */}
        <svg className="w-3.5 h-3.5 ml-1 text-cyan-300 opacity-70" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    
    {/* Corner accents */}
    <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-r from-cyan-500 to-transparent rounded-full opacity-60"></div>
    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-l from-blue-500 to-transparent rounded-full opacity-60"></div>
  </div>
);

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const token = localStorage.getItem("token");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" }
  ];

  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300 hover:scale-105'}`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-lg font-medium transition-colors rounded-lg ${
      isActive ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-700' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950 relative overflow-hidden">
      {/* Snowfall Effect */}
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 0
        }}
        color="rgba(255, 255, 255, 0.8)"
        snowflakeCount={150}
        speed={[0.5, 2.5]}
        wind={[-0.5, 1.5]}
        radius={[0.5, 3]}
        rotationSpeed={[-0.5, 0.5]}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Public Navbar - Now Responsive! */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

              {/* Logo */}
              <NavLink to="/" className="flex items-center gap-3 group">
                <STKLogo />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    ParkEase
                  </span>
                  <span className="text-xs text-gray-400 font-medium tracking-wide">
                    Parking Management
                  </span>
                </div>
              </NavLink>
            </div>

            {/* Center: Desktop Navigation Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right: Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              {token ? (
                <NavLink
                  to="/dashboard"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Go to Dashboard
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="px-6 py-2 text-cyan-300 font-medium hover:bg-cyan-900/30 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Get Started
                  </NavLink>
                </>
              )}
            </div>

            {/* Right: Mobile Auth Button (Icon only) */}
            <div className="md:hidden flex items-center">
              {token ? (
                <NavLink
                  to="/dashboard"
                  className="p-2 rounded-lg text-cyan-300 hover:bg-cyan-900/30"
                  aria-label="Dashboard"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="p-2 rounded-lg text-cyan-300 hover:bg-cyan-900/30"
                  aria-label="Login"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur-lg">
              <div className="flex flex-col gap-2 px-2">
                {/* Mobile Navigation Links */}
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={mobileNavLinkClass}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}

                {/* Mobile Auth Buttons */}
                <div className="pt-4 border-t border-gray-800">
                  {token ? (
                    <NavLink
                      to="/dashboard"
                      className="block w-full px-4 py-3 text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Go to Dashboard
                    </NavLink>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <NavLink
                        to="/login"
                        className="block px-4 py-3 text-center text-cyan-300 font-medium hover:bg-cyan-900/30 rounded-lg transition border border-cyan-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/signup"
                        className="block px-4 py-3 text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Started
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Parking Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Simple</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Find, book, and manage parking spots effortlessly. Save time, reduce stress, and park smarter with our intuitive platform.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {token ? (
              <NavLink
                to="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
              >
                Go to Dashboard →
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                >
                  Start Free Trial
                </NavLink>
                <NavLink
                  to="/features"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-bold rounded-full hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  View Features
                </NavLink>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "10K+", label: "Happy Users" },
              { value: "5K+", label: "Parking Spots" },
              { value: "99%", label: "Satisfaction" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-700 transition-colors">
                <div className="text-3xl font-bold text-cyan-300 mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ParkEase</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Booking",
                description: "Reserve parking in under 60 seconds with our streamlined process.",
                icon: "⚡",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Secure & Safe",
                description: "Bank-level security for all your transactions and data.",
                icon: "🔒",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Live Tracking",
                description: "Real-time GPS navigation to your reserved parking spot.",
                icon: "📍",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-gray-800/80 to-cyan-900/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-700">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Parking Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of smart parkers who save time and reduce stress every day
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {token ? (
                <NavLink
                  to="/dashboard"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Go to Dashboard
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    Start Free Trial
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-bold rounded-full hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Sales
                  </NavLink>
                </>
              )}
            </div>

            <p className="mt-8 text-gray-400 text-sm">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </main>

      {/* Dark Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}