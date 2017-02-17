
//Controlleur de la page qui liste les formations
angular.module('app').controller('loginCtrl', ['$scope', '$location', 'dataFactoryUser',
    function ($scope, $location, dataFactoryUser) {
        $scope.error = false;
        $scope.success = false;

        $scope.login = function () {
            dataFactoryUser.login($scope.user)
                .then(function (response) {
                    $location.path('/accueil');
                    $scope.error = false;
                    $scope.success = true;
                }, function (error) {
                    $scope.success = false;
                    $scope.error = true;
                    $scope.status = 'Erreur lors de l\'authentification:' + error.message();
                });
        };

        $scope.closeAlert = function () {
            $scope.error = false;
            $scope.success = false;
        };

        document.getElementById("userName")
            .addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode == 13) {
                    document.getElementById("login").click();
                }
            });

        document.getElementById("userPassword")
            .addEventListener("keyup", function (event) {
                event.preventDefault();
                if (event.keyCode == 13) {
                    document.getElementById("login").click();
                }
            });
    }
]);