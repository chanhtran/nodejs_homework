var app = angular.module('product', []);
app.controller('ctrlProduct', function($scope, $http) {
    $http.get('/api/products/getAllProduct')
        .then(function(response) {
            $scope.products = response.data;
        });
    $scope.edit = function(product) {
        $scope.product = product;
    };
    $scope.add = function() {
        var data = JSON.stringify({
            name: $scope.product.name,
            description: $scope.product.description,
            price: $scope.product.price,
            sku: $scope.product.sku
        });
        $http.post('/api/products/addProduct', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function() {
            $scope.products.push(JSON.parse(data));
        })
    };
    $scope.deleteProduct = function(id, index) {
        $http.delete('/api/products/deleteProduct/' + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function(response) {
            $scope.products.splice(index, 1);
        })
    }
});