'use strict';

angular
    .module('dorshaApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/main.html',
                controller : 'MainCtrl'
            })
            .otherwise({
                redirectTo : '/'
            });
        $locationProvider.html5Mode(true);
    });
