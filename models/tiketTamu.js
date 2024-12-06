const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const IdentitasTamu = require('./identitasTamu');
const SubBag = require('./subBag'); // Relasi dengan SubBag

const TiketTamu = sequelize.define('TiketTamu', {
  NoTiket: {
    type: DataTypes.STRING(22),
    primaryKey: true,
    allowNull: false,
  },
  NoIdentitas: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  Nama: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  KdBagSubSeksi: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  KdSubBagSeksi: {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  Jabatan: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  KeperluanBertamu: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  TglMintaBertamu: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  MintaJamBertamu: {
    type: DataTypes.TIME,
    allowNull: true,
  },
}, {
  freezeTableName: true, 
  tableName: 'tikettamu',   
  timestamps: false,     
});

// Relasi dengan IdentitasTamu dan SubBag
TiketTamu.belongsTo(IdentitasTamu, {
  foreignKey: 'NoIdentitas',
  as: 'identitasTamu',
});

TiketTamu.belongsTo(SubBag, {
  foreignKey: 'KdSubBagSeksi',
  as: 'subBag',
});

module.exports = TiketTamu;
