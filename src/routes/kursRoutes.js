const express = require('express');
const router = express.Router();
const controller = require('../controllers/kursController');

router.get('/today', controller.getToday);
router.get('/:tanggal', controller.getByDate);
router.post('/', controller.create);
router.post('/upload-csv', controller.uploadCSV);

module.exports = router;
