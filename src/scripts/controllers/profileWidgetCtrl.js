'use strict';

angular
    .module('myApp')
    
    .controller('profileWidgetCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $http.get('./data/profile.json')
                .then(function(data) {
                    $scope.profile = data.data;
                });
        }
    ]);