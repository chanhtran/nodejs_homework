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
    }, function(err) {
        console.log('Unable to connect to the database:', err);
    });

var product = sequelize.define('product_catalog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    description: Sequelize.STRING(2000),
    price: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
    },
    sku: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false,
});
module.exports = product;