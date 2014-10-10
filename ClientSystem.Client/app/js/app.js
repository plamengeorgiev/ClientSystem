'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ngCookies']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/trips', {
                templateUrl: '../views/partials/trips/trips.html',
                controller: 'TripsController'
            })
            .when('/drivers', {
                templateUrl: '../views/partials/drivers/drivers.html',
                controller: 'DriversController'
            })
            .when('/', {
                templateUrl: '../views/partials/home.html',
                controller: 'HomeController'
            })
            .when('/register', {
                templateUrl: '../views/partials/register.html',
                controller: 'SignUpCtrl'
            })
            .when('/unauthorized', {
                templateUrl: '../views/partials/unauthorized.html',
                controller: 'HomeController'
            })
            .when('/trips/create', {
                templateUrl: '../views/partials/trips/tripsCreate.html',
                controller: 'TripsController'
            })
            .otherwise({ redirectTo: '/' });
    }])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://localhost:1337');