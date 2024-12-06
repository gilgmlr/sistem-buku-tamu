const express = require('express');
const {
  createSubBag,
  getAllSubBag,
  getSubBagById,
  updateSubBag,
  deleteSubBag,
} = require('../controllers/subBagController');

const router = express.Router();

// Routes for SubBag
router.post('/subbag', createSubBag);       // Create
router.get('/subbag', getAllSubBag);        // Read All
router.get('/subbag/:id', getSubBagById);   // Read One by ID
router.put('/subbag/:id', updateSubBag);    // Update
router.delete('/subbag/:id', deleteSubBag); // Delete

module.exports = router;
