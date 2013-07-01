'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewA', {templateUrl: 'partials/sectionA.html', controller: 'DataCtrl'});
        $routeProvider.when('/viewB', {templateUrl: 'partials/sectionB.html', controller: 'DataCtrl'});
        $routeProvider.when('/viewC', {templateUrl: 'partials/sectionC.html', controller: 'DataCtrl'});
        $routeProvider.when('/viewDE', {templateUrl: 'partials/sectionDE.html', controller: 'DataCtrl'});
        $routeProvider.otherwise({redirectTo: '/viewA'});
    }
]);