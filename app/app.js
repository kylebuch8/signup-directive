angular.module('signupApp', [])
  .directive('optIn', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'optin.html'
    };
  });
