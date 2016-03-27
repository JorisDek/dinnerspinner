'use strict';

angular.module('dinnerSpinnerApp')
        .factory('Dinner', function(WebService){
            
            return {
                
                store: function(id) {
                    return WebService.post('dinners/' + id);
                },
                show: function(id) {
                    return WebService.get('dinners/' +  id);
                },
                spin: function(cheap, easy, fast) {
                    return WebService.get('dinners/spinner/'+ cheap +'/'+ easy +'/'+ fast);
                }
            }
        });