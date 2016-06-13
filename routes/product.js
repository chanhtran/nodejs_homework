'use strict';

var express = require('express');
var productService = require('../service/productService');
var router = express.Router();

router.get('/getAllProduct', function(req, res) {
    productService(function(rows) {
        res.send(JSON.stringify(rows));
    })
});

router.post('/addProduct', function(req, res) {

});

module.exports = router;