const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not set');
    }
    
    await mongoose.connect(MONGODB_URI);
    console.log('✓ MongoDB Connected');
  } catch (err) {
    console.error('✗ MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
