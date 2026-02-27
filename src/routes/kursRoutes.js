const express = require('express');
const router = express.Router();
const controller = require('../controllers/kursController');
const { validateKurs, validateMongoId } = require('../middleware/validation');

// Specific routes first, then generic routes
router.get('/today', controller.getToday);
router.get('/latest', controller.getLatest);
router.post('/upload-csv', controller.uploadCSV);
router.post('/refresh', controller.refreshJisdor);
router.get('/', controller.getAll);  // GET /api/kurs
router.post('/', validateKurs, controller.create);
router.get('/:id', validateMongoId, controller.getById);
router.put('/:id', validateMongoId, validateKurs, controller.update);
router.delete('/:id', validateMongoId, controller.delete);  // DELETE /api/kurs/:id

module.exports = router;
