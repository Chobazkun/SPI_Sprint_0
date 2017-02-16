

/**
 * A generic confirmation for risky actions.
 * Usage: Add attributes: ng-really-message="Are you sure"? ng-really-click="takeAction()" function
 *
angular.module('app').directive('ngReallyClick', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, $window) {
            element.bind('click', function () {
                var message = attrs.ngReallyMessage;
                if (message && $window.confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);*/

