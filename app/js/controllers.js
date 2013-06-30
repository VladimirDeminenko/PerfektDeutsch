'use strict';

/* Controllers */
/** /
var myAppModule = angular.module('myApp', []);
myAppModule.controller('TextController',
    function($scope) {
        var someText = {};
        someText.message = 'You have started your journey.';
        $scope.someText = someText;
    }
);

/** /
myAppModule.controller('MyCtrl1',
    function() {
    }
);

myAppModule.controller('MyCtrl2',
    function() {
    }
);

myAppModule.controller('MyCtrl3',
    function() {
    }
);

myAppModule.controller('MyCtrl4',
    function() {
    }
);

angular.module('myApp.controllers', [])
    .controller('MyCtrl1')
    .controller('MyCtrl2')
    .controller('MyCtrl3')
    .controller('MyCtrl4');

/** /
 angular.module('myApp.controllers', [])
 .controller('MyCtrl1', [function($scope) {

    }])
 .controller('MyCtrl2', [function() {

    }])
 .controller('MyCtrl3', [function() {

    }])
 .controller('MyCtrl4', [function() {
}])
 /**/

var sectionA = {}

function TextController($scope) {
    $scope.sectionA = sectionA;

    $scope.textChanges = function() {

    };
}
/** /
angular.module('myApp.controllers', [])
    .controller('TextController', [function($scope) {
        alert($scope);
    $scope.greeting = { text: 'Hello' };
    }])
/**/
;