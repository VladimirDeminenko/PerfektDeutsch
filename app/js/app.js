'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/sectionA.html', controller: 'TextController'});
        $routeProvider.when('/view2', {templateUrl: 'partials/sectionB.html', controller: 'TextController'});
        $routeProvider.when('/view3', {templateUrl: 'partials/sectionC.html', controller: 'TextController'});
        $routeProvider.when('/view4', {templateUrl: 'partials/sectionDE.html', controller: 'TextController'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }
]);