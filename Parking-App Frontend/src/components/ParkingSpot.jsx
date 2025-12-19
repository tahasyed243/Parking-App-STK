import React, { useEffect, useState } from "react";
import { formatRemaining } from "../utils/formatTime";

export default function ParkingSpot({ spot, onSelect, onOccupy, onFree }) {
  const [tick, setTick] = useState(0);

  // live timer re-render every 1s if reserved
  useEffect(() => {
    if (spot.status === "reserved") {
      const interval = setInterval(() => setTick(t => t + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [spot.status]);

  const remaining = formatRemaining(spot.reservedUntil);
  const bgClass =
    spot.status === "free"
      ? "bg-green-400"
      : spot.status === "reserved"
      ? "bg-yellow-200"
      : "bg-red-200";

  return (
    <div
      className={`p-4 text-black rounded shadow flex flex-col justify-between min-h-[120px] ${bgClass} cursor-pointer`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">#{spot.number}</span>
        <span className="text-xs text-gray-600 capitalize">{spot.status}</span>
      </div>

      {spot.status === "free" && <span className="text-gray-500">Tap to reserve</span>}

      {spot.status === "reserved" && (
        <>
          <div>
            <span className="font-semibold truncate block">{spot.reservedBy}</span>
            <span className="text-gray-500 font-mono">{remaining}</span>
          </div>
          <div className="flex gap-1 mt-auto">
            <button
              onClick={onOccupy}
              className="flex-1 bg-purple-600 text-white text-xs py-1 rounded"
            >
              Occupy
            </button>
            <button
              onClick={onFree}
              className="flex-1 border border-gray-300 text-gray-700 text-xs py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      )}

      {spot.status === "occupied" && (
        <>
          <span className="font-semibold text-red-600">Occupied</span>
          <button
            onClick={onFree}
            className="mt-2 bg-gray-200 text-gray-700 text-xs py-1 rounded"
          >
            Free
          </button>
        </>
      )}
    </div>
  );
}
