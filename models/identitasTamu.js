const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const IdentitasTamu = sequelize.define('IdentitasTamu', {
  NoIdentitas: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false,
  },
  Nama: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  TempatLahir: {
    type: DataTypes.STRING(25),
    allowNull: true,
  },
  TglLahir: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  JenisKelamin: {
    type: DataTypes.CHAR(1),
    allowNull: false,
    validate: {
      isIn: [['L', 'P']],
    },
  },
  Alamat: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  NoHandphone: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  TlpRmh: {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  KdPropinsi: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  KdKotaKabupaten: {
    type: DataTypes.STRING(4),
    allowNull: true,
  },
  KdKecamatan: {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  KdKelurahan: {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
  Kodepos: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  KdJenisId: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    validate: {
      isIn: [['1', '2']], // 1 untuk KTP, 2 untuk Paspor
    },
  },
  PhotoDirKtp: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
}, {
  freezeTableName: true, 
  tableName: 'identitastamu',   
  timestamps: false,    
});

module.exports = IdentitasTamu;
