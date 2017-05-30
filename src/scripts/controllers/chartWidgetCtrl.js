'use strict';

angular
    .module('myApp')
    
    .controller('chartWidgetCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $http.get('./data/donut.json')
                .then(function(data) {
                    $scope.donut = data.data;
                });

            $scope.formatter = function(value) {
                return value + 'Gb';
            };
            
            $http.get('./data/bar.json')
                .then(function(data) {
                    $scope.bar = data.data;
                });
        }
    ]);