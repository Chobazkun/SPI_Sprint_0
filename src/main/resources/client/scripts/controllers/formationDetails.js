
//Controlleur de la page qui détaille une formation
angular.module('app').controller('formationDetailsCtrl', ['$scope', '$routeParams', '$location', 'dataFactoryFormation',
    function ($scope, $routeParams, $location, dataFactoryFormation) {
        $scope.status;
        $scope.formation;
        $scope.codeFormation = $routeParams.codeFormation;
        $scope.error = false;
        $scope.success = false;

        $scope.getFormation = function (codeFormation) {
            dataFactoryFormation.getFormation(codeFormation)
                .then(function (response) {
                    $scope.formation = response.data;
                    $scope.error = false;
                }, function (error) {
                    $scope.success = false;
                    $scope.error = true;
                    $scope.status = 'Erreur lors de la récupération de la formation ' + error.message;
                });
        };

        $scope.closeAlert = function () {
            $scope.error = false;
            $scope.success = false;
        };

        if($scope.codeFormation)
            $scope.formation = $scope.getFormation($scope.codeFormation); 
    }
]);