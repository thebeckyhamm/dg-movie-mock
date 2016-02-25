(function() {
    'use strict';


    angular
        .module('dgMovieApp')
        .controller('ListController', ListController);


    function ListController(movieIDs, movieDetails) {
        var vm = this;
        vm.movies = [];
        vm.movieIDs = [];


        function getMovies() {

            var IDs = movieIDs.getMovieIDs();

            IDs
                .then(function (result) {
                    vm.movieIDs = result;

                    return movieDetails.getMovieDetails(result)
                }).
                then( function( result) {
                    console.log(result);
                    vm.movies = result;
                })
        }

        getMovies();
}


})();