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
                .when('/addFormation', {
                    templateUrl: '/views/addFormation.html',
                    controller: 'addFormationCtrl'
                })
                .when('/formation/:codeFormation/edit', {
                    templateUrl: '/views/editFormation.html',
                    controller: 'editFormationCtrl'
                })
                .when('/login', {
                    templateUrl: '/views/login.html',
                    controller: 'loginCtrl',
                    notLoggedNeeded: true
                })
                .otherwise({
                    redirectTo: '/accueil'
                });
        }
    ])
        .run(function ($rootScope, $route, $location, dataFactoryUser) {
            $rootScope.$on("$routeChangeStart", function (event, to) {
                if (to.notLoggedNeeded) {
                    return;
                }
                else {
                    dataFactoryUser.getUser().success(function (data) {
                        if (data) {
                            event.preventDefault();
                        } else {
                            $location.path("/login");
                        }
                    });
                }
            });
        });

}).call(this);

