(function() {
    'use strict';

    angular
        .module('dgMovieApp')
        .factory('movieIDs', movieIDs);

    function movieIDs($http, _, $q) {
        var url = "http://www.omdbapi.com/";

        var service = {
            getMovieIDs: getMovieIDs,
        }

        return service;

        // makes initial call and puts IDs into an array
        function getMovieIDs() {
            return $http.get(url + '?s=Batman')
                .then( getMoviesDone )
                .catch( getMoviesFailed );

            function getMoviesDone(response) {
                var IDs = [];
                var data = response.data.Search

                _.each(data, function(m, i) {
                    IDs.push(data[i].imdbID);
                });

                return IDs;
            }

            function getMoviesFailed(error) {
                console.log('something got messed up ' + error.data);
            }

        }

    }







})()