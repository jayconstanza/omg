'use strict';

angular.module('HomeModule', [])
.controller('HomeCtrl', [ '$scope', function ($scope) {
	$scope.num = 128;
	$scope.section = 'home';
	$scope.tagline = 'Realizador de audiovisuales y espectáculos';
}]);