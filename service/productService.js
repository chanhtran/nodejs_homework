'use strict';

var express = require('express');
var dbConnection = require('../database/dbConnection');
var productService = {};

productService.getAllProduct = function (){
        var product = dbConnection.define('product_catalog',{
        id : { type: Sequelize.INTEGER, primaryKey: true },
        name : { type: Sequelize.STRING(200), allowNull: false},
        description: Sequelize.STRING(2000),
        price : { type: Sequelize.DECIMAL(15,2), allowNull: false },
        sku: { type: Sequelize.INTEGER, allowNull: false }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
    product.findAll({raw:true}).then(function (product) {
        console.log(product);
    });
};

