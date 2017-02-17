
//Controlleur de la page qui gére les barres de la page
angular.module('app').controller('appCtrl', ['$scope', '$location', 'dataFactoryUser',
    function ($scope, $location, dataFactoryUser) {

        $scope.navVisibility = function () {
            return ($location.path() != "/login");
        }

        $scope.disconnect = function () {
            dataFactoryUser.disconnect()
                .then(function (response) {
                    $location.path('/login');
                }, function (error) {

                });
        };
    }
]);