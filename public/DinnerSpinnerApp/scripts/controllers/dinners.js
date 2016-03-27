'use strict';

angular.module('dinnerSpinnerApp')
        .controller('DinnersCtrl', function($scope, Dinners){
            
            var dinnersLoaded = function(dinners) {
                $scope.dinners = dinners;
            }
    
            var handleErrors = function(errors) {
                console.error(errors);
            }
            
            Dinners.index()
                .then(dinnersLoaded)
                .catch(handleErrors);
        });