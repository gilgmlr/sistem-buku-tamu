const TiketAntrean = require('../models/tiketAntrean');

// Create a new TiketAntrean
exports.createTiketAntrean = async (req, res) => {
  try {
    const { NoTiket, TglBuatTiket, StatusTiket, StatusCetak } = req.body;
    const tiketAntrean = await TiketAntrean.create({ NoTiket, TglBuatTiket, StatusTiket, StatusCetak });
    res.status(201).json(tiketAntrean);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all TiketAntrean
exports.getAllTiketAntrean = async (req, res) => {
  try {
    const tiketAntrean = await TiketAntrean.findAll();
    res.status(200).json(tiketAntrean);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get TiketAntrean by ID
exports.getTiketAntreanById = async (req, res) => {
  try {
    const tiketAntrean = await TiketAntrean.findByPk(req.params.id);
    if (tiketAntrean) {
      res.status(200).json(tiketAntrean);
    } else {
      res.status(404).json({ message: 'TiketAntrean not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update TiketAntrean
exports.updateTiketAntrean = async (req, res) => {
  try {
    const tiketAntrean = await TiketAntrean.findByPk(req.params.id);
    if (tiketAntrean) {
      const { StatusTiket, StatusCetak } = req.body;
      tiketAntrean.StatusTiket = StatusTiket || tiketAntrean.StatusTiket;
      tiketAntrean.StatusCetak = StatusCetak || tiketAntrean.StatusCetak;
      await tiketAntrean.save();
      res.status(200).json(tiketAntrean);
    } else {
      res.status(404).json({ message: 'TiketAntrean not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete TiketAntrean
exports.deleteTiketAntrean = async (req, res) => {
  try {
    const tiketAntrean = await TiketAntrean.findByPk(req.params.id);
    if (tiketAntrean) {
      await tiketAntrean.destroy();
      res.status(200).json({ message: 'TiketAntrean deleted' });
    } else {
      res.status(404).json({ message: 'TiketAntrean not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
