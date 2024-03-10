const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Course = db.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  maxSeats: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Course;
