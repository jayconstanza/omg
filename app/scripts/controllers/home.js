'use strict';

angular.module('HomeModule', [])
.controller('HomeCtrl', [ '$scope', function ($scope) {
	$scope.num = 128;
	$scope.section = 'home';
	$scope.title = 'Omartingual.com';
	$scope.tagline = 'Realizador de audiovisuales y espectáculos';
}]);