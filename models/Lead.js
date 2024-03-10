const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Lead = db.define('Lead', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING
  },
  linkedIn: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected', 'Waitlisted'),
    defaultValue: 'Pending'
  },
  comments: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  }
});

module.exports = Lead;
