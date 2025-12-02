const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

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
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

module.exports = app;
