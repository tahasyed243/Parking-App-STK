import React, { useState, useEffect, useRef } from "react";

export default function ReservationForm({ spot, onClose, onReserve }) {
  const [name, setName] = useState("");
  const [minutes, setMinutes] = useState(30);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleEsc = (e) => { if(e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReserve(name.trim() || "Guest", minutes);
  };

  return (
    <div
      className="fixed inset-0 flex items-center text-black justify-center bg-black/40 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded w-80 shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold mb-4">Reserve Spot #{spot.number}</h3>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Your Name (Optional)"
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="number"
            min="1"
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={minutes}
            onChange={e => setMinutes(Number(e.target.value))}
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded transition"
              type="submit"
            >
              Reserve
            </button>
            <button
              className="border px-3 py-1 rounded hover:bg-gray-100 transition"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
