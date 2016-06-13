'use strict';
var Sequelize = require('sequelize');
var express = require('express');
var dbConnection = require('../database/dbConnection');

function getAllProduct(callback) {
    // var product = dbConnection.define('product_catalog', {
    //     id: {
    //         type: Sequelize.INTEGER,
    //         primaryKey: true
    //     },
    //     name: {
    //         type: Sequelize.STRING(200),
    //         allowNull: false
    //     },
    //     description: Sequelize.STRING(2000),
    //     price: {
    //         type: Sequelize.DECIMAL(15, 2),
    //         allowNull: false
    //     },
    //     sku: {
    //         type: Sequelize.INTEGER,
    //         allowNull: false
    //     }
    // }, {
    //     freezeTableName: true,
    //     timestamps: false,
    // });
    dbConnection.findAll({
        raw: true
    }).then(callback);
};

function addProduct(params, callback) {

}
module.exports = getAllProduct;