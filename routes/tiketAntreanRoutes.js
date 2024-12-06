const express = require('express');
const {
  createTiketAntrean,
  getAllTiketAntrean,
  getTiketAntreanById,
  updateTiketAntrean,
  deleteTiketAntrean,
} = require('../controllers/tiketAntreanController');

const router = express.Router();

// Routes for TiketAntrean
router.post('/tiketantrean', createTiketAntrean);       // Create
router.get('/tiketantrean', getAllTiketAntrean);        // Read All
router.get('/tiketantrean/:id', getTiketAntreanById);   // Read One by ID
router.put('/tiketantrean/:id', updateTiketAntrean);    // Update
router.delete('/tiketantrean/:id', deleteTiketAntrean); // Delete

module.exports = router;
