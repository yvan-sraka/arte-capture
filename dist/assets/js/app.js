var app = angular.module('arte-capture', ['ngRoute']);

app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/video', {
            templateUrl: 'views/video.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
