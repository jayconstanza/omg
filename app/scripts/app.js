'use strict';

angular.module('codeApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'angular-blocks',
  'Directives',
  'Services',
  'HomeModule',
  'VideosModule'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/videos', {
        templateUrl: 'views/partials/videos.html',
        controller: 'VideosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
