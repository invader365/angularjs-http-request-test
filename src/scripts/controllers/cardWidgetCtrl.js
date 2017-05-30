'use strict';

angular
    .module('myApp')
    
    .controller('cardWidgetCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $http.get('./data/card.json')
                .then(function(data) {
                    $scope.card = data.data;
                });
        }
    ]);