(function() {
    'use strict';

    angular
        .module('dgMovieApp')
        .directive('movieTile', movieTile);


    function movieTile() {
        var directive = {
            link: link,
            templateUrl: 'list/movie.html',
            restrict: "E",
        }

        return directive;

        function link(scope, element, attrs) {

        }

    }


})()