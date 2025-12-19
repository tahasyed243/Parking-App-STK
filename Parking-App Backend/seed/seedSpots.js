import mongoose from 'mongoose';
import ParkingSpot from './models/ParkingSpot.js';
import dotenv from 'dotenv';

dotenv.config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/parking-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');

    // Clear existing data
    await ParkingSpot.deleteMany();
    console.log('🗑️  Cleared existing spots');

    // Create new spots
    const spots = [];
    for (let i = 1; i <= 15; i++) {
      let status = 'free';
      let reservedBy = null;
      let reservedUntil = null;

      // Some variety in data
      if (i === 2 || i === 5) {
        status = 'reserved';
        reservedBy = i === 2 ? 'John' : 'Alice';
        reservedUntil = Date.now() + (i === 2 ? 30 : 15) * 60000; // 30 or 15 minutes from now
      } else if (i === 3 || i === 7) {
        status = 'occupied';
        reservedBy = i === 3 ? 'Bob' : 'Charlie';
      }

      spots.push({
        number: i,
        status,
        reservedBy,
        reservedUntil,
      });
    }

    // Insert spots
    await ParkingSpot.insertMany(spots);
    console.log(`✅ ${spots.length} spots seeded successfully`);

    // Show what was created
    const createdSpots = await ParkingSpot.find();
    console.log('\n📊 Created spots:');
    createdSpots.forEach(spot => {
      console.log(`  Spot #${spot.number}: ${spot.status} ${spot.reservedBy ? `(${spot.reservedBy})` : ''}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
};

seedDatabase();