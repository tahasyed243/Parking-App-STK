// src/pages/FeaturesPage.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Snowfall from "react-snowfall";
import PublicNavbar from "../components/PublicNavbar";

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

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState("all");

    const categories = [
        { id: "all", label: "All Features" },
        { id: "booking", label: "Booking" },
        { id: "navigation", label: "Navigation" },
        { id: "security", label: "Security" },
        { id: "management", label: "Management" },
        { id: "analytics", label: "Analytics" }
    ];

    const features = [
        {
            category: "booking",
            title: "Instant Booking",
            description: "Reserve parking spots in under 60 seconds with our streamlined booking process.",
            icon: "⚡",
            color: "from-blue-500 to-cyan-500",
            gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
        },
        {
            category: "navigation",
            title: "Live GPS Navigation",
            description: "Turn-by-turn directions directly to your reserved parking spot with real-time updates.",
            icon: "📍",
            color: "from-purple-500 to-pink-500",
            gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
        },
        {
            category: "security",
            title: "Secure Payments",
            description: "Bank-level encryption for all transactions with multiple payment options.",
            icon: "🔒",
            color: "from-green-500 to-emerald-500",
            gradient: "bg-gradient-to-br from-green-500 to-emerald-500"
        },
        {
            category: "management",
            title: "Reservation Management",
            description: "Easily view, modify, or cancel your bookings from one intuitive dashboard.",
            icon: "📊",
            color: "from-orange-500 to-yellow-500",
            gradient: "bg-gradient-to-br from-orange-500 to-yellow-500"
        },
        {
            category: "booking",
            title: "Smart Search",
            description: "Find available spots based on price, location, and amenities with AI recommendations.",
            icon: "🔍",
            color: "from-indigo-500 to-blue-500",
            gradient: "bg-gradient-to-br from-indigo-500 to-blue-500"
        },
        {
            category: "navigation",
            title: "Traffic Integration",
            description: "Real-time traffic updates to optimize your route to the parking location.",
            icon: "🚦",
            color: "from-red-500 to-orange-500",
            gradient: "bg-gradient-to-br from-red-500 to-orange-500"
        },
        {
            category: "security",
            title: "Digital Receipts",
            description: "Automated digital receipts and expense tracking for all your parking transactions.",
            icon: "🧾",
            color: "from-teal-500 to-green-500",
            gradient: "bg-gradient-to-br from-teal-500 to-green-500"
        },
        {
            category: "management",
            title: "Multiple Vehicles",
            description: "Manage parking for multiple vehicles from a single unified account.",
            icon: "🚗",
            color: "from-pink-500 to-rose-500",
            gradient: "bg-gradient-to-br from-pink-500 to-rose-500"
        },
        {
            category: "analytics",
            title: "Usage Analytics",
            description: "Detailed reports and insights on your parking habits and expenses.",
            icon: "📈",
            color: "from-cyan-500 to-blue-500",
            gradient: "bg-gradient-to-br from-cyan-500 to-blue-500"
        },
        {
            category: "booking",
            title: "Recurring Reservations",
            description: "Set up automatic weekly or monthly parking reservations for your routine.",
            icon: "🔄",
            color: "from-blue-500 to-indigo-500",
            gradient: "bg-gradient-to-br from-blue-500 to-indigo-500"
        },
        {
            category: "security",
            title: "Two-Factor Authentication",
            description: "Enhanced security with 2FA for all account activities and transactions.",
            icon: "🛡️",
            color: "from-emerald-500 to-green-500",
            gradient: "bg-gradient-to-br from-emerald-500 to-green-500"
        },
        {
            category: "analytics",
            title: "Cost Optimization",
            description: "Smart suggestions to help you save money on parking based on usage patterns.",
            icon: "💰",
            color: "from-yellow-500 to-amber-500",
            gradient: "bg-gradient-to-br from-yellow-500 to-amber-500"
        }
    ];

    const filteredFeatures = activeTab === "all"
        ? features
        : features.filter(feature => feature.category === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950 relative overflow-hidden">
            <PublicNavbar />
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

            <main className="relative z-10 container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Features</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to make parking effortless, efficient, and thoroughly enjoyable.
                    </p>

                    {/* Decorative Elements */}
                    <div className="flex justify-center gap-4 mt-8">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 backdrop-blur-sm ${activeTab === category.id
                                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg border border-cyan-500 transform scale-105'
                                : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700/70 border border-gray-700 hover:border-cyan-700/50 hover:scale-105'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Features Counter */}
                <div className="text-center mb-8">
                    <p className="text-gray-400">
                        Showing <span className="text-cyan-300 font-bold">{filteredFeatures.length}</span> features
                        {activeTab !== "all" && ` in ${categories.find(c => c.id === activeTab)?.label}`}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                    {filteredFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-700 hover:border-cyan-700/50 relative overflow-hidden"
                        >
                            {/* Background Gradient Effect */}
                            <div className={`absolute inset-0 ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            {/* Icon Container */}
                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-xl ${feature.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                                    {feature.icon}
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-6 right-6">
                                    <span className="px-3 py-1 text-xs font-medium bg-gray-900/80 text-gray-300 rounded-full border border-gray-600 backdrop-blur-sm">
                                        {categories.find(c => c.id === feature.category)?.label}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                                    {feature.description}
                                </p>

                                {/* Learn More Button */}
                                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="text-sm text-cyan-400 font-medium flex items-center gap-2 hover:text-cyan-300">
                                        Learn more
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Section */}
                <div className="bg-gradient-to-r from-gray-800/90 via-gray-900/90 to-indigo-900/90 rounded-3xl p-8 md:p-12 text-white backdrop-blur-lg border border-gray-700 shadow-2xl mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ParkEase</span>?
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            See how we transform the traditional parking experience into a modern solution
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Traditional Parking",
                                points: [
                                    "Average 15+ minutes searching for spots",
                                    "Limited payment options & cash-only spots",
                                    "No reservation guarantees or availability info",
                                    "Higher stress levels & wasted time",
                                    "No digital records or expense tracking"
                                ],
                                color: "text-red-400",
                                bgColor: "from-red-900/30 to-red-800/20",
                                borderColor: "border-red-800/50",
                                icon: "🚫"
                            },
                            {
                                title: "Our Solution",
                                points: [
                                    "Reserve in under 60 seconds",
                                    "Multiple secure payment methods",
                                    "Guaranteed spot waiting for you",
                                    "Stress-free, predictable experience",
                                    "All digital with complete records"
                                ],
                                color: "text-green-400",
                                bgColor: "from-green-900/30 to-emerald-800/20",
                                borderColor: "border-green-800/50",
                                icon: "✅"
                            },
                            {
                                title: "Time & Money Saved",
                                points: [
                                    "Save 20+ hours per year",
                                    "Reduce fuel consumption by 25%",
                                    "Lower carbon footprint significantly",
                                    "More productive & family time",
                                    "Better work-life balance achieved"
                                ],
                                color: "text-cyan-400",
                                bgColor: "from-cyan-900/30 to-blue-800/20",
                                borderColor: "border-cyan-800/50",
                                icon: "💰"
                            }
                        ].map((column, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${column.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${column.borderColor} hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden`}
                            >
                                <div className="absolute top-4 right-4 text-3xl opacity-20">
                                    {column.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-6 ${column.color} flex items-center gap-2`}>
                                    {column.title}
                                </h3>
                                <ul className="space-y-3 relative z-10">
                                    {column.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start group/item">
                                            <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400 group-hover/item:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="mt-12 pt-8 border-t border-gray-700">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { value: "15K+", label: "Happy Users", icon: "👥", color: "text-cyan-300" },
                                { value: "8K+", label: "Parking Spots", icon: "🅿️", color: "text-blue-300" },
                                { value: "99.8%", label: "Satisfaction", icon: "⭐", color: "text-yellow-300" },
                                { value: "24/7", label: "Support", icon: "🛠️", color: "text-green-300" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="text-2xl mb-2 opacity-70 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} group-hover:scale-105 transition-transform`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-3xl p-8 md:p-12 backdrop-blur-lg border border-cyan-800/50 shadow-2xl relative overflow-hidden">
                        {/* Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Ready to Experience Smart Parking?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Join thousands of users who have transformed their parking experience with ParkEase
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                {localStorage.getItem("token") ? (
                                    <NavLink
                                        to="/dashboard"
                                        className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                    >
                                        Go to Dashboard →
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
                                            className="px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-bold rounded-full hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                                        >
                                            Contact Sales
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <div className="relative z-10 mt-20">
                <Footer />
            </div>
        </div>
    );
} 