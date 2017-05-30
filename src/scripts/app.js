'use strict';

angular
    .module('myApp', ['ui.router', 'angular.morris'])

    .config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'html/main.html'
                });

            $urlRouterProvider.otherwise('/');
        }])

    .run(['$rootScope', '$state',
        function ($rootScope, $state) {
            $rootScope.$state = $state;
        }]);