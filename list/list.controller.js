(function() {
    'use strict';


    angular
        .module('dgMovieApp')
        .controller('ListController', ListController);


    function ListController(movies) {
        var vm = this;

        movies.getMovies();
    }


})();