require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://cost_user:Ac07_123@cluster0.oco6hwh.mongodb.net/costtrack?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✓ MongoDB Connected'))
  .catch(err => {
    console.error('✗ MongoDB Connection Error:', err.message);
    process.exit(1);
  });

// Routes
app.use('/api/produk', require('./routes/produkRoutes'));
app.use('/api/komponen', require('./routes/komponenRoutes'));
app.use('/api/riwayat', require('./routes/riwayatRoutes'));
app.use('/api/kurs', require('./routes/kursRoutes'));
app.use('/api/hpe', require('./routes/hpeRoutes'));

// Stats endpoint
const statsController = require('./controllers/statsController');
app.get('/api/stats/dashboard', statsController.getDashboardStats);

// Serve Frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
