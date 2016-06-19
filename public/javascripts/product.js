var app = angular.module('product', []);
app.controller('ctrlProduct', function ($scope, $http) {
    $scope.loadProduct = function () {
        $http.get('/api/products/getAllProduct')
            .then(function (response) {
                $scope.products = response.data;
            });
    };
    $scope.loadProduct();
    $scope.editProduct = function (product) {
        $scope.newproduct = angular.copy(product);
        $scope.showBtnEditMode = true;
        $scope.hideBtnEditMode = true;
    };
    $scope.cancelUpdateProduct = function () {
        $scope.showBtnEditMode = false;
        $scope.hideBtnEditMode = false;
        $scope.clearInput();
    }
    $scope.clearInput = function () {
        $scope.newproduct.name = '';
        $scope.newproduct.description = '';
        $scope.newproduct.price = '';
        $scope.newproduct.sku = '';
    }
    $scope.addProduct = function (isValid) {
        if (isValid) {
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
            }).then(function () {
                $scope.products.push(JSON.parse(data));
                $scope.clearInput();
                $scope.productForm.$setPristine();
            })
        }
        else {
            $scope.showErrorMsg = true;
        }
    };
    $scope.deleteProduct = function (id, index) {
        $http.delete('/api/products/deleteProduct/' + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            $scope.products.splice(index, 1);
        })
    };
    $scope.updateProduct = function (isValid, id) {
        if (isValid) {
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
            }).then(function () {
                $scope.showBtnEditMode = false;
                $scope.hideBtnEditMode = false;
                $scope.loadProduct();
                $scope.clearInput();
                $scope.productForm.$setPristine();
            })
        } else {
            $scope.showErrorMsg = true;
        }

    };
    $scope.searchByName = function (isValid) {
        if (isValid) {
            var name = $scope.searchValue;
            $http.get('/api/products/getProductByName/' + name)
                .then(function (response) {
                    $scope.products = response.data;
                });
        } else {
            $scope.showSearchErrorMsg = true;
        }


    }
});
app.directive('isNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attr, ctrl) {
            ctrl.$parsers.push(function (value) {
                    var reg = /^[0-9]+$/;
                    var valid = reg.test(value);
                    if (valid) {
                        ctrl.$setValidity('isNumber', true);
                    }
                    else
                        ctrl.$setValidity('isNumber', false);
                    return value;
            });
        }
    };
});