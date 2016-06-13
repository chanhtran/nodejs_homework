'use strict';
var Sequelize = require('sequelize');
var express = require('express');
var product = require('../database/dbConnection');

function productService() {
    this.getAllProduct = function(callback) {
        product.findAll({
            raw: true
        }).then(callback);
    };

    this.addProduct = function(params) {
        product.create({
            name: params.name,
            description: params.description,
            price: params.price,
            sku: params.sku
        }).then(function() {

        });
    };

    this.updateProduct = function(params) {
        product.update({

        });
    };

    this.deleteProduct = function(params) {
        product.destroy({
            where: {
                id: params.id
            }
        }).then(function() {

        });
    };
}
module.exports = productService;