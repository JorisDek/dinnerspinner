'use strict';

angular.module('dinnerSpinnerApp')
        .factory('Dinners', function(WebService){
            
            return {
                index: function() {
                    return WebService.get('dinners');
                }
                
            }
        });