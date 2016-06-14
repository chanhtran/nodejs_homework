var express = require('express');
var router = express.Router();
var productService = require('../service/productService');
var p = new productService();
router.get('/getAllProduct', function(req, res) {
    p.getAllProduct(function(rows) {
        res.send(JSON.stringify(rows));
    });
});

router.get('/getProductByName/:name', function(req, res) {
    var name = req.params.name;
    p.getProductByName(
        name,
        function(rows) {
            res.send(JSON.stringify(rows));
        });
});

router.post('/addProduct', function(req, res) {
    var p = new productService();
    p.addProduct({
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price,
        "sku": req.body.sku,
    });
    res.send("added!")
});

router.put('/updateProduct', function(req, res) {
    var p = new productService();
    p.updateProduct({
        "id": req.body.id,
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price,
        "sku": req.body.sku,
    });
    res.send("updated!");
});

router.delete('/deleteProduct', function(req, res) {
    var p = new productService();
    p.deleteProduct({
        "id": req.body.id,
    });
    res.send("deleted!");
});

module.exports = router