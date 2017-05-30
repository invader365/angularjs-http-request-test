'use strict';

angular
    .module('myApp')
    
    .controller('menuWidgetCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $http.get('./data/menu.json')
                .then(function(data) {
                    $scope.menu = data.data;
                });
        }
    ]);