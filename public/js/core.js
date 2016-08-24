// public/core.js
var dataModule = angular.module('dataModule', []);

function mainController($scope, $http) {

      $http.get('/api/inspections/businesses')
        .success(function(data) {
            $scope.businesses = data
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $http.get('/api/inspections/businesses/HIGH')
        .success(function(data) {
            $scope.businessesWithHighRisk = data
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $http.get('/api/inspections/businesses/NO')
        .success(function(data) {
            $scope.businessesWithNoRisk = data
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    $http.get('/api/inspections/businesses/MOD')
        .success(function(data) {
            $scope.businessesWithModerateRisk = data
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $http.get('/api/inspections/businesses/LOW')
        .success(function(data) {
            $scope.businessesWithLowRisk = data
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}
