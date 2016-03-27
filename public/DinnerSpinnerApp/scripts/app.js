'use strict';

var dinnerSpinnerApp = angular.module('dinnerSpinnerApp', ['ngRoute'])
        .config(function($routeProvider){
            
            $routeProvider
            .when('/dinners', {
                templateUrl: 'partials/dinners.html',
                controller: 'DinnersCtrl'
            })
            
            .when('/dinner', {
                templateUrl: 'partials/dinner.html',
                controller: 'DinnerCtrl'
            })
            
             .when('/dinner/:id', {
                templateUrl: 'partials/dinner.html',
                controller: 'DinnerCtrl'
            })
            
            .when('/spinner', {
                templateUrl: 'partials/spin.html',
                controller: 'SpinnerCtrl'
            })
            .when('/spinner/:cheap/:easy/:fast', {
                templateUrl: 'partials/spinner.html',
                controller: 'DinnerCtrl'
            })
        });