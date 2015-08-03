angular.module('signupApp', [])
    .directive('optIn', optIn);

function optIn() {
    var directive = {
        restrict: 'E',
        transclude: true,
        templateUrl: 'optin.html',
        controller: OptinController
    };

    OptinController.$inject = ['$scope'];

    return directive;

    function OptinController($scope) {
        $scope.submit = function () {
            if (!$scope.optinForm.$valid) {
                return;
            }

            $scope.submitted = true;
        };
    }
}
