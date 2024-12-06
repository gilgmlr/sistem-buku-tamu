const IdentitasTamu = require('../models/identitasTamu');

// Menambahkan IdentitasTamu Baru
exports.createIdentitasTamu = async (req, res) => {
  try {
    const {
      NoIdentitas,
      Nama,
      TempatLahir,
      TglLahir,
      JenisKelamin,
      Alamat,
      NoHandphone,
      TlpRmh,
      Email,
      KdPropinsi,
      KdKotaKabupaten,
      KdKecamatan,
      KdKelurahan,
      Kodepos,
      KdJenisId,
      PhotoDirKtp
    } = req.body;

    // Validasi untuk memastikan KdJenisId tidak kosong
    if (!KdJenisId) {
      return res.status(400).json({ message: "KdJenisId cannot be null" });
    }

    // Menyimpan data IdentitasTamu ke dalam database
    const identitasTamu = await IdentitasTamu.create({
      NoIdentitas,
      Nama,
      TempatLahir,
      TglLahir,
      JenisKelamin,
      Alamat,
      NoHandphone,
      TlpRmh,
      Email,
      KdPropinsi,
      KdKotaKabupaten,
      KdKecamatan,
      KdKelurahan,
      Kodepos,
      KdJenisId,
      PhotoDirKtp // Menyimpan data gambar KTP (Base64)
    });

    // Mengirim response sukses
    res.status(201).json({
      message: 'Identitas Tamu successfully created',
      identitasTamu
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create Identitas Tamu',
      error: error.message
    });
  }
};


// Get all IdentitasTamu
exports.getAllIdentitasTamu = async (req, res) => {
  try {
    const identitasTamu = await IdentitasTamu.findAll();
    res.status(200).json(identitasTamu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get IdentitasTamu by ID
exports.getIdentitasTamuById = async (req, res) => {
  try {
    const identitasTamu = await IdentitasTamu.findByPk(req.params.id);

    if (identitasTamu) {
      res.status(200).json(identitasTamu);
    } else {
      res.status(404).json({ message: 'IdentitasTamu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update IdentitasTamu
exports.updateIdentitasTamu = async (req, res) => {
  try {
    const identitasTamu = await IdentitasTamu.findByPk(req.params.id);

    if (identitasTamu) {
      const { Nama, TempatLahir, TglLahir, JenisKelamin, Alamat } = req.body;

      identitasTamu.Nama = Nama || identitasTamu.Nama;
      identitasTamu.TempatLahir = TempatLahir || identitasTamu.TempatLahir;
      identitasTamu.TglLahir = TglLahir || identitasTamu.TglLahir;
      identitasTamu.JenisKelamin = JenisKelamin || identitasTamu.JenisKelamin;
      identitasTamu.Alamat = Alamat || identitasTamu.Alamat;

      await identitasTamu.save();
      res.status(200).json(identitasTamu);
    } else {
      res.status(404).json({ message: 'IdentitasTamu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete IdentitasTamu
exports.deleteIdentitasTamu = async (req, res) => {
  try {
    const identitasTamu = await IdentitasTamu.findByPk(req.params.id);

    if (identitasTamu) {
      await identitasTamu.destroy();
      res.status(200).json({ message: 'IdentitasTamu deleted' });
    } else {
      res.status(404).json({ message: 'IdentitasTamu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
