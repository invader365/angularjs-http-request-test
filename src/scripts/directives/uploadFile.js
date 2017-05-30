'use strict';

angular
    .module('myApp')
    
    .directive('uploadFile', function() {
        return {
            link: function(scope, element, attributes) {

            var el = angular.element(element)
            var button = el.children()[0]

            var fileInput = angular.element('<input type="file" multiple style="position:absolute; width:100%; height:100%; top:0; left:0; opacity:0; z-index:2"/>')

            el.append(fileInput)


            }
        }
    });