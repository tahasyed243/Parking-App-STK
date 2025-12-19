import ParkingSpot from "../models/ParkingSpot.js";

// Get all spots
export const getSpots = async (req, res) => {
  const spots = await ParkingSpot.find();
  res.json(spots);
};

// Reserve spot
export const reserveSpot = async (req, res) => {
  const { name, minutes } = req.body;

  const spot = await ParkingSpot.findById(req.params.id);
  if (!spot) return res.status(404).json({ message: "Spot not found" });

  spot.status = "reserved";
  spot.reservedBy = name;
  spot.reservedUntil = Date.now() + minutes * 60000;

  await spot.save();
  res.json(spot);
};

// Occupy spot
export const occupySpot = async (req, res) => {
  const spot = await ParkingSpot.findById(req.params.id);
  if (!spot) return res.status(404).json({ message: "Spot not found" });

  spot.status = "occupied";
  spot.reservedBy = null;
  spot.reservedUntil = null;

  await spot.save();
  res.json(spot);
};

// Free spot
export const freeSpot = async (req, res) => {
  const spot = await ParkingSpot.findById(req.params.id);
  if (!spot) return res.status(404).json({ message: "Spot not found" });

  spot.status = "free";
  spot.reservedBy = null;
  spot.reservedUntil = null;

  await spot.save();
  res.json(spot);
};
