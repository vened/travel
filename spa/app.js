'use strict';

var app = angular.module('app', [
    'ui.router',
    'ngAnimate',
    'appComponents',
    'appDirectives',
    'appServices',
    'appApi'
]);

app.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    //$httpProvider.defaults.headers.common['X-CSRFToken'] = document.querySelector('input[name="csrfmiddlewaretoken"]').value;
    //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

app.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});


var appComponents = angular.module('appComponents', []);
var appServices = angular.module('appServices', []);
var appDirectives = angular.module('appDirectives', []);
var appApi = angular.module('appApi', []);