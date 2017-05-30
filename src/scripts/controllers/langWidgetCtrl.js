'use strict';

angular
    .module('myApp')
    
    .controller('langWidgetCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.pageLang = "eng";
            
            $scope.setLang = function(lang){
                if (lang==="esp"){
                    $http.get('./data/lang/esp.json')
                        .then(function(data) {
                            $scope.lang = data.data;
                        });
                } else {
                    $http.get('./data/lang/eng.json')
                        .then(function(data) {
                            $scope.lang = data.data;
                        });
                }
                $scope.pageLang = lang;                
            }

        }
    ]);