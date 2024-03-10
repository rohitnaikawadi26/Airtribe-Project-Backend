const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const Instructor = require('./Instructor');

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

Course.belongsTo(Instructor); // Adds an instructorId column to the Course table

module.exports = Course;
