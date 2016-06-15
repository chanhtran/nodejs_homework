var app = angular.module('product', []);
app.controller('ctrlProduct', function($scope, $http) {
    $http.get("http://localhost:8080/api/products/getAllProduct")
        .then(function(response) {
            $scope.products = response.data;
        });
    $http.post("http://localhost:8080/api/products/addProduct")
        .then(function(response) {
            $scope.products = response.data;
        });
});