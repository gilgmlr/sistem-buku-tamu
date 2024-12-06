const Bagian = require('../models/bagian');

// Create a new Bagian
exports.createBagian = async (req, res) => {
  try {
    const { KodeBagian, NamaBagian, Keterangan } = req.body;
    const bagian = await Bagian.create({ KodeBagian, NamaBagian, Keterangan });
    res.status(201).json(bagian);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Bagian
exports.getAllBagian = async (req, res) => {
  try {
    const bagian = await Bagian.findAll();
    res.status(200).json(bagian);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Bagian by ID
exports.getBagianById = async (req, res) => {
  try {
    const bagian = await Bagian.findByPk(req.params.id);
    if (bagian) {
      res.status(200).json(bagian);
    } else {
      res.status(404).json({ message: 'Bagian not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Bagian
exports.updateBagian = async (req, res) => {
  try {
    const bagian = await Bagian.findByPk(req.params.id);
    if (bagian) {
      const { KodeBagian, NamaBagian, Keterangan } = req.body;
      bagian.KodeBagian = KodeBagian || bagian.KodeBagian;
      bagian.NamaBagian = NamaBagian || bagian.NamaBagian;
      bagian.Keterangan = Keterangan || bagian.Keterangan;
      await bagian.save();
      res.status(200).json(bagian);
    } else {
      res.status(404).json({ message: 'Bagian not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Bagian
exports.deleteBagian = async (req, res) => {
  try {
    const bagian = await Bagian.findByPk(req.params.id);
    if (bagian) {
      await bagian.destroy();
      res.status(200).json({ message: 'Bagian deleted' });
    } else {
      res.status(404).json({ message: 'Bagian not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
