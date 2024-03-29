const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const Course = require('./Course');

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

Lead.belongsTo(Course); // Adds a courseId column to the Lead table

module.exports = Lead;
