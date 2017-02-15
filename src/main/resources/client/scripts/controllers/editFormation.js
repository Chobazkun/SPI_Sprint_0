
//Controlleur de la page qui met-à-jour une formation
angular.module('app').controller('editFormationCtrl', ['$scope', '$routeParams', '$location', 'dataFactory',
    function ($scope, $routeParams, $location, dataFactory) {
        $scope.status;
        $scope.formation;
        $scope.codeFormation = $routeParams.codeFormation;
        $scope.error = false;
        $scope.success = false;

        $scope.getFormation = function (codeFormation) {
            dataFactory.getFormation(codeFormation)
                .then(function (response) {
                    $scope.formation = response.data;
                    $scope.error = false;
                }, function (error) {
                    $scope.success = false;
                    $scope.error = true;
                    $scope.status = 'Erreur lors de la récupération de la formation ' + error.message;
                });
        };

        $scope.updateFormation = function (formation) {
            dataFactory.updateFormation(formation)
                .then(function (response) {
                    $scope.status = 'Mise à jour de la formation effectuée!';
                    $scope.error = false;
                    $scope.success = true;
                }, function (error) {
                    $scope.success = false;
                    $scope.error = true;
                    $scope.status = 'Erreur lors de la mise à jour de la formation: ' + error.message;
                });
        };

        $scope.closeAlert = function () {
            $scope.error = false;
            $scope.success = false;
        };


        if ($scope.codeFormation)
            $scope.formation = $scope.getFormation($scope.codeFormation);
    }
]);