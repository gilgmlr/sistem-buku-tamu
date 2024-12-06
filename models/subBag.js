const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Bagian = require('./bagian'); // Hubungkan dengan model Bagian

const SubBag = sequelize.define('SubBag', {
  KdSubBag: {
    type: DataTypes.STRING(6),
    primaryKey: true,
    allowNull: false,
  },
  KodeBagian: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  Jabatan: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  Keterangan: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
}, {
  freezeTableName: true, 
  tableName: 'subbag',   
  timestamps: false,     
});

// Menetapkan relasi dengan tabel 'Bagian'
SubBag.belongsTo(Bagian, {
  foreignKey: 'KodeBagian',
  as: 'bagian'
});

module.exports = SubBag;
