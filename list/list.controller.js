(function() {
    'use strict';


    angular
        .module('dgMovieApp')
        .controller('ListController', ListController);


    function ListController(movieIDs, movieDetails) {
        var vm  = this,
            IDs = [];
        vm.movies = [];
        vm.filteredMovies = [];
        vm.toggleFilter = toggleFilter;
        vm.toggle = 2000;


        function getMovies() {

            var IDsService = movieIDs.getMovieIDs();

            IDsService
                .then(function (result) {
                    IDs = result;

                    return movieDetails.getMovieDetails(result)
                }).
                then( function( result) {
                    console.log(result);
                    vm.movies = result;
                    toggleFilter(2000);
                })
        }

        getMovies();

        function filterMovies() {
            _.each(vm.movies, function(m, i) {
                if ( parseInt(m.Year) >= 2000 ) {

                    vm.filteredMovies.push(m);

                }
            });
            console.log(vm.filteredMovies);
        }

        function toggleFilter(year) {
            vm.filteredMovies = [];

            _.each(vm.movies, function(m, i) {
                if (year === 2000) {
                    if ( parseInt(m.Year) >= 2000 ) {

                        vm.filteredMovies.push(m);

                    }
                    vm.toggle = 2000;
                }
                else {

                    if ( parseInt(m.Year) >= 1990 && parseInt(m.Year) < 2000 ) {

                        vm.filteredMovies.push(m);

                    }
                    vm.toggle = 1990;
                }

            });

        }
}


})();