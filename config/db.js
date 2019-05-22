const connection_string = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(connection_string);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//db. = require('../models/User')(sequelize, Sequelize);
module.exports = db;
