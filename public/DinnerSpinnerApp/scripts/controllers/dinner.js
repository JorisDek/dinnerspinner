'use strict';

angular.module('dinnerSpinnerApp')
        .controller('DinnerCtrl', function($scope, Dinner, $routeParams) {
            
            var dinnerLoaded = function(dinner) {
                $scope.dinner = dinner;
            }
            
            var spinnerLoaded = function(spinner) {
                $scope.spinner = spinner;
            }
            
            var handleErrors = function(errors) {
                console.error(errors);
            }
            
            
            $scope.formData = {};
            
            
            
            Dinner.show($routeParams.id)
                .then(dinnerLoaded)
                .catch(handleErrors);
            Dinner.spin($routeParams.cheap, $routeParams.easy, $routeParams.fast)
                    .then(spinnerLoaded)
                    .catch(handleErrors);
        });
        