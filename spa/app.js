'use strict';

var app = angular.module('app', [
    'ui.router',
    'app.components',
    'app.directives',
    'app.services',
    'app.api'
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


var appComponents = angular.module('app.components', []);
var appServices = angular.module('app.services', []);
var appDirectives = angular.module('app.directives', []);
var appApi = angular.module('app.api', []);