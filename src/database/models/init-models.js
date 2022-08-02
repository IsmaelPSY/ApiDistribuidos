var DataTypes = require("sequelize").DataTypes;
var _users = require("./users");

const Sequelize = require('sequelize');
require('dotenv').config()
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');

const configObj = config[env]

let sequelize;

if (configObj.use_env_variable) {
  sequelize = new Sequelize('postgres://amzjavqgumqusl:498dc6e0e7307d3f3c960a6e8232e8a1e564170363d7a9a23b935cb807628ce0@ec2-54-208-104-27.compute-1.amazonaws.com:5432/dc6s9h32v7ssvr', configObj);
}
else {
  sequelize = new Sequelize(configObj.database, configObj.username, configObj.password, configObj);
}

function initModels(sequelize) {
  var users = _users(sequelize, DataTypes);


  return {
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
module.exports.sequelize = sequelize;

