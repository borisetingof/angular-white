'use strict';

/**
 * @ngdoc overview
 * @name angularWhiteApp
 * @description
 * # angularWhiteApp
 *
 * Main module of the application.
 */
angular
  .module('angularWhiteApp', [
    'ngResource',
    'ngRoute'
  ])

  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/form.html',
        controller: 'Form'
      })
      .when('/success', {
        templateUrl: 'views/success.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
