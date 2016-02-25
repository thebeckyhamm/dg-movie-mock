(function() {
    'use strict';

    angular
        .module('dgMovieApp')
        .factory('movies', movies);

    function movies($http) {
        
        var service = {
            getMovies: getMovies
        }

        return service;


        function getMovies() {
            return $http.get('http://www.omdbapi.com/?s=Batman')
                .then( getMoviesDone )
                .catch( getMoviesFailed );

            function getMoviesDone(response) {
                console.log( response.data.Search );
            }

            function getMoviesFailed(error) {
                logger.error('something got messed up.' + error.data);
            }
        }

    }








})()