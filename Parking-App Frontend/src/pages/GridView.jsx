import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParkingSpot from "../components/ParkingSpot";
import ReservationForm from "../components/ReservationForm";
import { getSpots, reserveSpot, occupySpot, freeSpot } from "../api/parkingApi";
import Navbar from '../components/Navbar'
import Snowfall from "react-snowfall";

export default function GridView() {
  const [spots, setSpots] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchSpots = async () => {
    const data = await getSpots();
    setSpots(data);
  };

  useEffect(() => { fetchSpots(); }, []);

  const handleReserve = async (name, minutes) => {
    if (!selected) return;
    await reserveSpot(selected._id, name, minutes);
    setSelected(null);
    fetchSpots();
  };

  const handleOccupy = async (spot) => { await occupySpot(spot._id); fetchSpots(); };
  const handleFree = async (spot) => { await freeSpot(spot._id); fetchSpots(); };

  return (
    <div>
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
      <div className="px-3 sm:px-6 lg:px-10 py-6 bg-gray-800 min-h-[90vh]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800">
            Choose Your Parking Spot
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
            Click on a free spot to reserve it <span>🚘</span>
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {spots.map(spot => (
            <motion.div
              key={spot._id}
              onClick={() => spot.status === "free" && setSelected(spot)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ParkingSpot
                spot={spot}
                onOccupy={() => handleOccupy(spot)}
                onFree={() => handleFree(spot)}
                onSelect={() => spot.status === "free" && setSelected(spot)}
              />
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <ReservationForm
            spot={selected}
            onClose={() => setSelected(null)}
            onReserve={handleReserve}
          />
        )}
      </div>
    </div>
  );
}
