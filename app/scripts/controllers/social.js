'use strict';

angular.module('SocialModule', [])
.controller('SocialCtrl', [ '$scope', function ($scope) {
	$scope.section = 'social';
	$scope.title = '¡Charla comigo!';
	$scope.subtitle = 'Encuéntrame en las redes sociales';
	$scope.redesSociales = [
		{ name: 'Twitter', logo: '', url:'https://twitter.com/omartingual' },
		{ name: 'LinkedIn', logo: '', url:'http://www.linkedin.com/in/oriolmartingual' },
		{ name: 'Facebook', logo: '', url:'https://www.facebook.com/OMartinGual?fref=ts' },
	];
}]);
