
//Controlleur de la page qui ajoute une formation
angular.module('app').controller('addFormationCtrl', ['$scope', 'dataFactoryFormation',
    function ($scope, dataFactoryFormation) {
        $scope.status;
        $scope.formation;
        $scope.error = false;
        $scope.success = false;

        $scope.addFormation = function (formation) {
            dataFactoryFormation.addFormation(formation)
                .then(function (response) {
                    $scope.status = 'Insertion de la formation effectuée!';
                    $scope.error = false;
                    $scope.success = true;
                }, function (error) {
                    $scope.success = false;
                    $scope.error = true;
                    $scope.status = 'Erreur lors de l\'insertion de la formation: ' + error.message;
                });
        };

        $scope.closeAlert = function () {
            $scope.error = false;
            $scope.success = false;
        };
    }
]);