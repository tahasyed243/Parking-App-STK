import React, { useEffect, useState } from "react";
import { getSpots, reserveSpot, occupySpot, freeSpot } from "../api/parkingApi";
import { formatRemaining } from "../utils/formatTime";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Snowfall from "react-snowfall";

export default function TableView() {
  const [spots, setSpots] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => { fetchSpots(); }, [refresh]);

  const fetchSpots = async () => {
    const data = await getSpots();
    setSpots(data);
  };

  const handleReserve = async (spot) => {
    const name = prompt("Enter your name (optional)") || "Guest";
    const minutes = Number(prompt("Duration in minutes", "30")) || 30;
    await reserveSpot(spot._id, name, minutes);
    setRefresh(r => r + 1);
  };

  const handleOccupy = async (spot) => { await occupySpot(spot._id); setRefresh(r => r + 1); };
  const handleFree = async (spot) => { await freeSpot(spot._id); setRefresh(r => r + 1); };

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
      <div className="overflow-x-auto px-4 sm:px-6 lg:px-10 py-6">
        <h2 className="text-2xl font-bold text-gray-300 mb-6 text-center">Parking Spots Table</h2>

        <table className="min-w-full bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-linear-to-r from-purple-600 to-indigo-600 text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Reserved By</th>
              <th className="p-3 text-left">Remaining</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {spots.map((spot, index) => (
              <motion.tr
                key={spot._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3 text-green-400 font-medium">{spot.number}</td>
                <td className={`p-3 font-semibold capitalize ${spot.status === "free" ? "text-green-600" :
                  spot.status === "reserved" ? "text-yellow-600" :
                    "text-red-600"
                  }`}>
                  {spot.status}
                </td>
                <td className="p-3 text-green-400">{spot.reservedBy || "-"}</td>
                <td className="p-3 text-green-400">{spot.status === "reserved" ? formatRemaining(spot.reservedUntil) : "-"}</td>
                <td className="p-3 flex justify-center gap-2 flex-wrap">
                  {spot.status === "free" && (
                    <button
                      onClick={() => handleReserve(spot)}
                      className="bg-linear-to-r from-green-400 to-green-600 text-white px-4 py-1 rounded-lg shadow hover:shadow-lg transition"
                    >
                      Reserve
                    </button>
                  )}
                  {spot.status === "reserved" && (
                    <>
                      <button
                        onClick={() => handleOccupy(spot)}
                        className="bg-linear-to-r from-purple-500 to-purple-700 text-white px-4 py-1 rounded-lg shadow hover:shadow-lg transition"
                      >
                        Occupy
                      </button>
                      <button
                        onClick={() => handleFree(spot)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-1 rounded-lg shadow transition"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                  {spot.status === "occupied" && (
                    <button
                      onClick={() => handleFree(spot)}
                      className="bg-linear-to-r from-red-500 to-red-700 text-white px-4 py-1 rounded-lg shadow hover:shadow-lg transition"
                    >
                      Free
                    </button>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
