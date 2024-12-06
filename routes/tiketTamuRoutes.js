const express = require('express');
const {
  createTiketTamu,
  getAllTiketTamu,
  getTiketTamuById,
  updateTiketTamu,
  deleteTiketTamu,
  getTiketTamuWithIdentitas,
} = require('../controllers/tiketTamuController');

const router = express.Router();

// Routes for TiketTamu
router.post('/tikettamu', createTiketTamu);       // Create
router.get('/tikettamu', getAllTiketTamu);        // Read All
router.get('/tikettamu/:id', getTiketTamuById);   // Read One by ID
router.put('/tikettamu/:id', updateTiketTamu);    // Update
router.delete('/tikettamu/:id', deleteTiketTamu); // Delete

// Route untuk menampilkan TiketTamu dengan IdentitasTamu
// router.get('/tikettamu', getTiketTamuWithIdentitas);

module.exports = router;
