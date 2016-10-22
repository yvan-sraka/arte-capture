app.controller('homeCtrl', ['$scope', '$http', '$route', '$timeout', ($scope, $http, $route, $timeout) => {
    $scope.toggle = 0;
    console.log($scope.toggle);
    $scope.none = function() {
        if ($scope.toggle === 1) {
          $scope.toggle = 0;

        }
        else if ($scope.toggle === 0) {
          $scope.toggle = 1;
        }
        console.log($scope.toggle);
    };
}]);
