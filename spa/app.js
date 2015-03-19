'use strict';

var app = angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ngMaterial',
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


app.config(function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('amazingPaletteName', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': '333333',
        '500': '212121',
        '600': 'cccccc',
        '700': 'cccccc',
        '800': '333333',
        '900': 'ff8a80',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('amazingPaletteName')
});


var appComponents = angular.module('app.components', []);
var appServices = angular.module('app.services', []);
var appDirectives = angular.module('app.directives', []);
var appApi = angular.module('app.api', []);