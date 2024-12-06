const TiketTamu = require('../models/tiketTamu');
const IdentitasTamu = require('../models/identitasTamu'); // Relasi dengan IdentitasTamu
const SubBag = require('../models/subBag'); // Relasi dengan SubBag

// Create a new TiketTamu
exports.createTiketTamu = async (req, res) => {
  try {
    const {
      NoTiket,
      NoIdentitas,
      Nama,
      KdBagSubSeksi,
      KdSubBagSeksi,
      Jabatan,
      KeperluanBertamu,
      TglMintaBertamu,
      MintaJamBertamu,
    } = req.body;

    const tiketTamu = await TiketTamu.create({
      NoTiket,
      NoIdentitas,
      Nama,
      KdBagSubSeksi,
      KdSubBagSeksi,
      Jabatan,
      KeperluanBertamu,
      TglMintaBertamu,
      MintaJamBertamu,
    });

    res.status(201).json(tiketTamu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all TiketTamu
exports.getAllTiketTamu = async (req, res) => {
  try {
    const tiketTamu = await TiketTamu.findAll({
      include: [
        { model: IdentitasTamu, as: 'identitasTamu' },
        { model: SubBag, as: 'subBag' },
      ],
    });
    res.status(200).json(tiketTamu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get TiketTamu by ID
exports.getTiketTamuById = async (req, res) => {
  try {
    const tiketTamu = await TiketTamu.findByPk(req.params.id, {
      include: [
        { model: IdentitasTamu, as: 'identitasTamu' },
        { model: SubBag, as: 'subBag' },
      ],
    });

    if (tiketTamu) {
      res.status(200).json(tiketTamu);
    } else {
      res.status(404).json({ message: 'TiketTamu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update TiketTamu
exports.updateTiketTamu = async (req, res) => {
  try {
    const tiketTamu = await TiketTamu.findByPk(req.params.id);

    if (tiketTamu) {
      const {
        Nama,
        KdBagSubSeksi,
        KdSubBagSeksi,
        Jabatan,
        KeperluanBertamu,
        TglMintaBertamu,
        MintaJamBertamu,
      } = req.body;

      tiketTamu.Nama = Nama || tiketTamu.Nama;
      tiketTamu.KdBagSubSeksi = KdBagSubSeksi || tiketTamu.KdBagSubSeksi;
      tiketTamu.KdSubBagSeksi = KdSubBagSeksi || tiketTamu.KdSubBagSeksi;
      tiketTamu.Jabatan = Jabatan || tiketTamu.Jabatan;
      tiketTamu.KeperluanBertamu =
        KeperluanBertamu || tiketTamu.KeperluanBertamu;
      tiketTamu.TglMintaBertamu =
        TglMintaBertamu || tiketTamu.TglMintaBertamu;
      tiketTamu.MintaJamBertamu =
        MintaJamBertamu || tiketTamu.MintaJamBertamu;

      await tiketTamu.save();
      res.status(200).json(tiketTamu);
    } else {
      res.status(404).json({ message: 'TiketTamu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete TiketTamu
exports.deleteTiketTamu = async (req, res) => {
  try {
    const tiketTamu = await TiketTamu.findByPk(req.params.id);

    if (tiketTamu) {
      await tiketTamu.destroy();
      res.status(200).json({ message: 'TiketTamu deleted' });
    } else {
      res.status(404).json({ message: 'TiketTamu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
