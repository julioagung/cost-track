const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://cost_user:Ac07_123@cluster0.oco6hwh.mongodb.net/costtrack?retryWrites=true&w=majority';
    
    await mongoose.connect(MONGODB_URI);
    console.log('✓ MongoDB Connected');
  } catch (err) {
    console.error('✗ MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
