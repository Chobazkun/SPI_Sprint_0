
//Controlleur de la page qui liste les formations
angular.module('app').controller('formationCtrl', ['$scope', '$routeParams', '$location', 'dataFactoryFormation',
    function ($scope, $routeParams, $location, dataFactoryFormation) {
        $scope.status;
        $scope.formations;
        $scope.codeFormation = $routeParams.codeFormation;
        $scope.error = false;
        $scope.success = false;

        function getFormations() {
            dataFactoryFormation.getFormations()
                .then(function (response) {
                    $scope.formations = response.data;
                    $scope.error = false;
                }, function (error) {
                    $scope.success = false;
                    $scope.error = true;
                    $scope.status = 'Erreur lors de la récupération de la liste des formations: ' + error.message;
                });
        }

        $scope.deleteFormation = function (codeFormation) {
            dataFactoryFormation.deleteFormation(codeFormation)
                .then(function (response) {
                    $scope.status = 'Suppression de la formation effectuée!';
                    $scope.error = false;
                    $scope.success = true;
                    getFormations();
                }, function (error) {
                    $scope.success = false;
                    $scope.error = true;
                    $scope.status = 'Erreur lors de la suppression de la formation:' + error.message;
                });
        };

        $scope.closeAlert = function () {
            $scope.error = false;
            $scope.success = false;
        };

        getFormations();

    }
]);

