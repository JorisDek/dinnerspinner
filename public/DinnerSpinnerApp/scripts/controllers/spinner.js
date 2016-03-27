'use strict';

angular.module('dinnerSpinnerApp')
        .controller('SpinnerCtrl', function($scope, Dinner) {
            
            
            
            
            $scope.formData = {};
            
            if($scope.formData) {
                var spinnerLoaded = function(spinner) {
                    $scope.spinner = spinner;
                }

                var handleErrors = function(errors) {
                    console.error(errors);
                }

//                Dinner.spin($scope.formData.spinner.cheap, $scope.formData.spinner.easy, $scope.formData.spinner.fast)
//                        .then(spinnerLoaded)
//                        .catch(handleErrors);
            }
            
        });
        