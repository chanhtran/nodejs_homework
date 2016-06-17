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
    console.log(name);
    p.getProductByName(
        name,
        function(rows) {
            res.send(JSON.stringify(rows));
        });
});

router.post('/addProduct', function(req, res) {
    p.addProduct({
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price,
        "sku": req.body.sku,
    });
    res.send("added!")
});

router.put('/updateProduct/:id', function(req, res) {
    p.updateProduct({
        "id": req.params.id,
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price,
        "sku": req.body.sku,
    });
    res.send("updated!");
});

router.delete('/deleteProduct/:id', function(req, res) {
    p.deleteProduct({
        "id": req.params.id,
    });
    res.send("deleted!");
});

module.exports = router