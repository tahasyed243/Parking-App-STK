import React, { useState } from "react";
import { loginUser } from "../api/authApi";
import { NavLink, useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            console.log("Login attempt with:", { email, password });

            // API call
            const res = await loginUser({ email, password });
            console.log("API Response:", res);

            if (res.token) {
                // Save to localStorage
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(res.user));

                console.log("Token saved to localStorage:", localStorage.getItem("token"));
                console.log("User saved to localStorage:", localStorage.getItem("user"));

                // Force redirect to dashboard
                window.location.href = "/dashboard";

            } else {
                setMessage(res.message || res.error || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            setMessage(error.message || "Login failed. Please try again.");

            // For testing, use mock login
            console.log("Using mock login for testing...");
            mockLogin();
        } finally {
            setIsLoading(false);
        }
    };

    // Mock login function for testing
    const mockLogin = () => {
        localStorage.setItem("token", "mock-token-123456");
        localStorage.setItem("user", JSON.stringify({
            id: "1",
            name: "Test User",
            email: email || "test@example.com",
            role: "user"
        }));

        window.location.href = "/dashboard";
    };

    return (
        <div className="min-h-screen w-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950">
            {/* Snowfall Effect */}
            <Snowfall
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0
                }}
                color="white"
                snowflakeCount={200}
                speed={[0.5, 3]}
                wind={[-0.5, 2]}
                radius={[0.5, 4]}
                rotationSpeed={[-1, 1]}
            />

            {/* Top/Banner Section - Hidden on large screens, shown on small screens */}
            <div className="lg:hidden w-full py-8 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-cyan-900 p-6 relative z-10">
                {/* Back Button - Top Left Corner */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 p-2 rounded-lg bg-gray-800/70 hover:bg-gray-700/70 text-gray-300 hover:text-white transition border border-gray-700"
                    aria-label="Go back"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>

                <img src="/STK Logo.png" alt="Logo" className="w-24 mb-4 animate-bounce" />
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                    Welcome! <br /> Reserve your Parking Spot 🚘
                </h1>
                <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-300 text-center">
                    Fast. Secure. Easy.
                </p>
            </div>

            {/* Left Side - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-cyan-900 p-6 md:p-10 relative z-10">
                {/* Back Button - Top Left Corner */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 p-2 rounded-lg bg-gray-800/70 hover:bg-gray-700/70 text-gray-300 hover:text-white transition border border-gray-700 z-20"
                    aria-label="Go back"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>

                <img src="/STK Logo.png" alt="Logo" className="w-28 lg:w-32 mb-4 lg:mb-6 animate-bounce" />
                <h1 className="text-3xl lg:text-4xl font-bold text-white text-center">
                    Welcome! <br /> Reserve your Parking Spot 🚘
                </h1>
                <p className="mt-2 lg:mt-4 text-xl text-gray-300 text-center">
                    Fast. Secure. Easy.
                </p>

                {/* Winter Decorations */}
                <div className="mt-8 flex gap-4">
                    {["❄️", "🚗", "🅿️", "✨"].map((emoji, index) => (
                        <div
                            key={index}
                            className="text-2xl animate-pulse"
                            style={{ animationDelay: `${index * 0.5}s` }}
                        >
                            {emoji}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-10 relative z-10">
                <div className="w-full max-w-sm md:max-w-md p-6 md:p-8 lg:p-10 bg-gray-800/80 backdrop-blur-md rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-700">
                    {/* Back Button inside Form for Mobile */}
                    <div className="lg:hidden mb-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white transition border border-gray-600"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Back</span>
                        </button>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8 text-center">
                        Login to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ParkEase</span>
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                        <div>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 md:px-5 py-3 bg-gray-900/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 transition"
                                disabled={isLoading}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 md:px-5 py-3 bg-gray-900/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 transition"
                                disabled={isLoading}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>

                    {message && (
                        <div className={`mt-4 p-3 rounded-lg text-center border ${message.toLowerCase().includes('fail') || message.toLowerCase().includes('invalid')
                            ? 'bg-red-900/30 text-red-300 border-red-800'
                            : 'bg-green-900/30 text-green-300 border-green-800'
                            }`}>
                            {message}
                        </div>
                    )}

                    <div className="mt-6 text-center space-y-6">
                        <p className="text-gray-300">
                            Don't have an account?{" "}
                            <NavLink
                                to="/signup"
                                className="inline-block ml-2 px-4 py-2 bg-cyan-900/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-800/40 transition border border-cyan-800"
                            >
                                Signup
                            </NavLink>
                        </p>
                        

                        {/* Test Button */}
                        <div>
                            <button
                                type="button"
                                onClick={mockLogin}
                                className="text-sm text-gray-400 hover:text-cyan-300 underline"
                            >
                                Or click here for quick test login
                            </button>
                        </div>

                        {/* Winter Note */}
                        <div className="pt-4 border-t border-gray-700">
                            <p className="text-xs text-gray-500">
                                ❄️ Winter Special: First month free for new users!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}