import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getSpots } from "../api/parkingApi";
import { div } from "framer-motion/client";
import Navbar from "../components/Navbar";
import Snowfall from "react-snowfall";

export default function Dashboard() {
    const [stats, setStats] = useState({ free: 0, reserved: 0, occupied: 0 });
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchStats = async () => {
            const spots = await getSpots();
            setStats({
                free: spots.filter((s) => s.status === "free").length,
                reserved: spots.filter((s) => s.status === "reserved").length,
                occupied: spots.filter((s) => s.status === "occupied").length,
            });
        };
        fetchStats();
    }, []);

    return (
        <div className="bg-gray-800">
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
            <Navbar />
            <div className="min-h-[105vh] flex flex-col items-center opacity-80 justify-center px-4 bg-gray-800">
                {/* Glass Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl bg-white/30 backdrop-blur-3xl 
                    border border-white/20 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] 
                    p-10 sm:p-14 text-center relative overflow-hidden"
                >
                    {/* Floating Car Icon */}
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-32 h-32 mx-auto mb-6 rounded-full opacity-100
                         bg-linear-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white text-6xl shadow-2xl"
                    >
                        🚗
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-2 tracking-wide">
                        Parking Management
                    </h1>

                    {/* Logged-in User Info */}
                    <p className="text-gray-200 text-lg mb-6">
                        Welcome, <span className="font-bold text-3xl dashed">{user?.name}</span> ({user?.email})
                    </p>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {["Free", "Reserved", "Occupied"].map((status, idx) => {
                            const colors = [
                                { bg: "from-green-400 to-green-600", hover: "hover:bg-green-600", text: "text-white" },
                                { bg: "from-yellow-400 to-yellow-600", hover: "hover:bg-yellow-600", text: "text-white" },
                                { bg: "from-red-400 to-red-600", hover: "hover:bg-red-800", text: "text-white" },
                            ];
                            const value = [stats.free, stats.reserved, stats.occupied][idx];
                            return (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    key={status}
                                    className={`rounded-3xl p-6 shadow-2xl relative overflow-hidden bg-linear-to-tr ${colors[idx].bg}`}
                                >
                                    <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full opacity-20 blur-3xl bg-white/30"></div>
                                    <h3 className={`font-bold text-lg ${colors[idx].text}`}>{status}</h3>
                                    <p className={`text-4xl mt-2 font-extrabold ${colors[idx].text}`}>{value}</p>
                                    <p className={`text-sm mt-1 ${colors[idx].text}/80`}>
                                        {status === "Free"
                                            ? "Available parking"
                                            : status === "Reserved"
                                                ? "Booked spots"
                                                : "Currently in use"}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs text-gray-400 mt-10"
                >
                    Use the navigation bar to switch between views
                </motion.p>
            </div>
        </div>
    );
}
