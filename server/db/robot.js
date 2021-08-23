const { Sequelize } = require('sequelize');
const db = require('./database')

const Robot = db.define('Robot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  fuelType: {
    type: Sequelize.ENUM('gas', 'diesel', 'electric'),
    defaultValue: 'electric'
  },
  fuelLevel: {
    type: Sequelize.DECIMAL,
    min: 0,
    max: 100,
    defaultValue: 100,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1618934166/content-items/007/725/933/Robot_Instagram5-original.jpg?1618934166',
  }
})

module.exports = Robot;
