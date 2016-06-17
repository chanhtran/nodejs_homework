var app = angular.module('product', []);
app.controller('ctrlProduct', function($scope, $http) {
    $scope.loadProduct = function() {
        $http.get('/api/products/getAllProduct')
            .then(function(response) {
                $scope.products = response.data;
            });
    };
    $scope.loadProduct();
    $scope.editProduct = function(product) {
        $scope.newproduct = angular.copy(product);
        $scope.showBtnEditMode = true;
        $scope.hideBtnEditMode = true;
    };
    $scope.cancelUpdateProduct = function() {
        $scope.showBtnEditMode = false;
        $scope.hideBtnEditMode = false;
        $("#product-form")[0].reset();
    }
    $scope.addProduct = function() {
        var data = JSON.stringify({
            name: $scope.newproduct.name,
            description: $scope.newproduct.description,
            price: $scope.newproduct.price,
            sku: $scope.newproduct.sku
        });
        $http.post('/api/products/addProduct', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function() {
            $scope.products.push(JSON.parse(data));
            $("#product-form")[0].reset();
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
    };
    $scope.updateProduct = function(id) {
        var data = JSON.stringify({
            name: $scope.newproduct.name,
            description: $scope.newproduct.description,
            price: $scope.newproduct.price,
            sku: $scope.newproduct.sku
        });
        $http.put('/api/products/updateProduct/' + id, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function(response) {
            $scope.loadProduct();
        })
    };
});