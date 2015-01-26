/**
 * Created by akhilesh on 1/25/15.
 */
var trainingApp = angular.module("trainingApp",['ngRoute']);

trainingApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/scope', {
                templateUrl: 'scope.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            }).when('/template', {
                templateUrl: 'template.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            });

        $locationProvider.html5Mode(true);
    }]).controller("mainCtrl",function($scope){
    $scope.parts = [];
    $scope.parts[0] = {"name":"Template","URL":"template", "desc": "basic angular app."};
    $scope.parts[1] = {"name":"$Scope","URL":"scope", "desc": "text on scope."};
});
