const express = require('express');
const {
  createBagian,
  getAllBagian,
  getBagianById,
  updateBagian,
  deleteBagian,
} = require('../controllers/bagianController');

const router = express.Router();

// Routes for Bagian
router.post('/bagian', createBagian);       // Create
router.get('/bagian', getAllBagian);        // Read All
router.get('/bagian/:id', getBagianById);   // Read One by ID
router.put('/bagian/:id', updateBagian);    // Update
router.delete('/bagian/:id', deleteBagian); // Delete

module.exports = router;
