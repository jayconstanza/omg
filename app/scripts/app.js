'use strict';

angular.module('codeApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'angular-blocks',
  'Directives',
  'Filters',
  'Services',
  'HomeModule',
  'VideosModule',
  'FotosModule',
  'SocialModule'
])
  .config([ '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/videos', {
        templateUrl: '/views/partials/videos.html',
        controller: 'VideosCtrl'
      })
      .when('/fotos', {
        templateUrl: '/views/partials/fotos.html',
        controller: 'FotosCtrl'
      })
      .when('/social', {
        templateUrl: '/views/partials/social.html',
        controller: 'SocialCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
