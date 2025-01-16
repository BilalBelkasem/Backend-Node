const { DataTypes } = require('sequelize');
const { sequelize } = require('../app');

const Character = sequelize.define('Character', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  job: {
    type: DataTypes.ENUM('Warrior', 'Mage', 'Thief', 'White Mage', 'Black Mage', 'Dragoon'),
    allowNull: false
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 99
    }
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  mp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  }
}, {
  timestamps: true
});

module.exports = Character; 