const express = require('express');
const {
  createIdentitasTamu,
  getAllIdentitasTamu,
  getIdentitasTamuById,
  updateIdentitasTamu,
  deleteIdentitasTamu,
} = require('../controllers/identitasTamuController');

const router = express.Router();

// Routes for IdentitasTamu
router.post('/identitastamu', createIdentitasTamu);       // Create
router.get('/identitastamu', getAllIdentitasTamu);        // Read All
router.get('/identitastamu/:id', getIdentitasTamuById);   // Read One by ID
router.put('/identitastamu/:id', updateIdentitasTamu);    // Update
router.delete('/identitastamu/:id', deleteIdentitasTamu); // Delete

module.exports = router;
