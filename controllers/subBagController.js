const SubBag = require('../models/subBag');

// Create a new SubBag
exports.createSubBag = async (req, res) => {
  try {
    const { KdSubBag, KodeBagian, Jabatan, Keterangan } = req.body;
    const subBag = await SubBag.create({ KdSubBag, KodeBagian, Jabatan, Keterangan });
    res.status(201).json(subBag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all SubBag
exports.getAllSubBag = async (req, res) => {
  try {
    const subBag = await SubBag.findAll();
    res.status(200).json(subBag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get SubBag by ID
exports.getSubBagById = async (req, res) => {
  try {
    const subBag = await SubBag.findByPk(req.params.id);
    if (subBag) {
      res.status(200).json(subBag);
    } else {
      res.status(404).json({ message: 'SubBag not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update SubBag
exports.updateSubBag = async (req, res) => {
  try {
    const subBag = await SubBag.findByPk(req.params.id);
    if (subBag) {
      const { Jabatan, Keterangan } = req.body;
      subBag.Jabatan = Jabatan || subBag.Jabatan;
      subBag.Keterangan = Keterangan || subBag.Keterangan;
      await subBag.save();
      res.status(200).json(subBag);
    } else {
      res.status(404).json({ message: 'SubBag not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete SubBag
exports.deleteSubBag = async (req, res) => {
  try {
    const subBag = await SubBag.findByPk(req.params.id);
    if (subBag) {
      await subBag.destroy();
      res.status(200).json({ message: 'SubBag deleted' });
    } else {
      res.status(404).json({ message: 'SubBag not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
