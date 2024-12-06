const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Bagian = sequelize.define('Bagian', {
  KodeBagian: {
    type: DataTypes.STRING(3),
    primaryKey: true,
    allowNull: false,
  },
  NamaBagian: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  Keterangan: {
    type: DataTypes.STRING(60),
  },
}, {
  freezeTableName: true, 
  tableName: 'bagian',   
  timestamps: false,     
});

module.exports = Bagian;
