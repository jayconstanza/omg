'use strict';

angular.module('FotosModule', [])
.controller('FotosCtrl', [ '$scope', function ($scope) {
	$scope.section = 'fotos';
	$scope.start = 1;
	$scope.step = 6;
	$scope.limit = 18;
	$scope.first = true;
}]);
