
//DataFactory de l'entité User
angular.module('app')
    .factory('dataFactoryUser', ['$http', function ($http) {

        var urlBase = 'http://localhost:8090/';
        var dataFactory = {};

        dataFactory.login = function (user) {
            return $http.post(urlBase + 'auth', user);
        };

        dataFactory.getUser = function (user) {
            return $http.get(urlBase + 'user' , user);
        };

        dataFactory.disconnect = function (user) {
            return $http.get(urlBase + 'disconnect' , user);
        };

        return dataFactory;
    }]);