(function() {
    'use strict';

    angular
        .module('dgMovieApp')
        .factory('movieDetails', movieDetails);

    function movieDetails($http, _, $q, movieIDs) {
        var url = "http://www.omdbapi.com/";

        var service = {
            getMovieDetails: getMovieDetails
        }

        return service;



        function getMovieDetails(data) {

            var movieDetails = [];

             _.each(data, function(m, i) {
                movieDetails.push(
                    $http.get(url + "?i=" + m)
                        .then( function(result) {
                            return result.data;
                        })
                );

            });

            return $q.all(movieDetails).then( function(response) { 
                return response;
            });

        }

    }








})()