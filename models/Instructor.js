const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Instructor = db.define('Instructor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Instructor;
