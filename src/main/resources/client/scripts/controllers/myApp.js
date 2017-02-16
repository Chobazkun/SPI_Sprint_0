
//Controlleur de la page qui gére les barres de la page
angular.module('app').controller('appCtrl', ['$scope', '$location', 'dataFactoryUser',
    function ($scope, $location, dataFactoryUser) {

        $scope.isContains = function () {
            var tab = ['/login'];

            return _.contains(tab, $location.path);
        }

        $scope.disconnect = function () {
            dataFactoryUser.disconnect(dataFactoryUser.getUser())
                .then(function (response) {
                    $location.path('/login');
                }, function (error) {

                });
        };
    }
]);