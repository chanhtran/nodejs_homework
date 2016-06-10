'use strict';

var Sequelize = require("sequelize");
 
//Setting up the config
var sequelize = new Sequelize('hw_nodejs', 'root', 'root', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
module.exports = sequelize;