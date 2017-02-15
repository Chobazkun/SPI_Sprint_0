
//DataFactory de l'entité Formation
angular.module('app')
    .factory('dataFactory', ['$http', function ($http) {

        var urlBase = 'http://localhost:8090/formation';
        var dataFactory = {};

        dataFactory.getFormations = function () {
            return $http.get(urlBase);
        };

        dataFactory.getFormation = function (codeFormation) {
            return $http.get(urlBase + '/' + codeFormation);
        };

        dataFactory.addFormation = function (formation) {
            return $http.post(urlBase, formation);
        };

        dataFactory.updateFormation = function (formation) {
            return $http.put(urlBase+ '/' + formation.codeFormation, formation)
        };

        dataFactory.deleteFormation = function (codeFormation) {
            return $http.delete(urlBase + '/' + codeFormation);
        };

        return dataFactory;
    }]);


