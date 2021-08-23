const { Sequelize } = require('sequelize');
const db = require('./database');

const Project = db.define('Project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  deadline: {
    type: Sequelize.DATE,
  },
  priority: {
    type: Sequelize.INTEGER,
    min: 1,
    max: 10
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  description: {
    type: Sequelize.TEXT,
  }
})

module.exports = Project;
