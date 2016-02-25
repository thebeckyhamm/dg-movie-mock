(function() {
    'use strict';


    angular
        .module('dgMovieApp')
        .controller('ListController', ListController);


    function ListController($scope) {
        var vm = this;
        vm.hello = "world"; 
    }


})();