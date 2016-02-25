(function() {
    'use strict';


    angular
        .module('dgMovieApp')
        .controller('ListController', ListController);


    function ListController(movies) {
        var vm = this;
        vm.movies = []


        function getMovies() {
            return movies.getMovies()
                .then( function(data) {
                    vm.movies = data;
                    console.log(vm.movies);
                    return vm.movies;
                });
        }

        getMovies();
        
    }


})();