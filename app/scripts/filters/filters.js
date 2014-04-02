'use strict';

angular.module('Filters', [])
	.filter('durationFilter', [ function() {
		return function(input){
			var str = input.substring(input.lastIndexOf('T')+1,input.lastIndexOf('M'));
			return str;
		};
	}]);