(function () {
    'use strict';

    //Déclaration de l'application AngularJS
    angular.module(
        'app',
        ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart',
            'mgo-angular-wizard', 'textAngular', 'ui.tree',
            'ngTagsInput']).config(
        ['$routeProvider', function ($routeProvider, $urlRouterProvider) { }]
        );

    //Déclaration des routes
    angular.module('app').config(['$routeProvider',
        function ($routeProvider) {
            // Système de routage
            $routeProvider
                .when('/accueil', {
                    templateUrl: '/views/accueil.html'
                })
                .when('/formations', {
                    templateUrl: '/views/formations.html',
                    controller: 'formationCtrl'
                })
                .when('/formation/:codeFormation', {
                    templateUrl: '/views/formationDetails.html',
                    controller: 'formationDetailsCtrl'
                })
                .when('/formation/:codeFormation/edit', {
                    templateUrl: '/views/editFormation.html',
                    controller: 'editFormationCtrl'
                })
                .otherwise({
                    redirectTo: '/accueil'
                });
        }
    ]);

}).call(this);

