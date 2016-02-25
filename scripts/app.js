var dgMovieApp = 
    angular
        .module('dgMovieApp', [
            'ui.router'
            ])

        .config(function($stateProvider, $urlRouterProvider) {
            
            $urlRouterProvider.otherwise('/');
            
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'list/list.html',
                    controller: 'ListController',
                    controllerAs: 'vm'
                })
                
        });

