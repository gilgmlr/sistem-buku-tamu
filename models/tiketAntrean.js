const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TiketAntrean = sequelize.define('TiketAntrean', {
  NoTiket: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  TglBuatTiket: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  StatusTiket: {
    type: DataTypes.ENUM('Berlaku', 'Kadaluarsa'),
    allowNull: false,
  },
  StatusCetak: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  freezeTableName: true, 
  tableName: 'tiketantrean',   
  timestamps: false,     
});

module.exports = TiketAntrean;
