'use strict';

angular.module('SocialModule', [])
.controller('SocialCtrl', [ '$scope', function ($scope) {
	$scope.section = 'social';
	$scope.title = '¡Charla comigo!';
	$scope.subtitle = 'Encuéntrame en las redes sociales';
	$scope.redesSociales = [
		{ name: 'Twitter', icon: 'icon-tw-s', url:'https://twitter.com/omartingual' },
		{ name: 'LinkedIn', icon: 'icon-linkd-s', url:'http://www.linkedin.com/in/oriolmartingual' },
		{ name: 'Facebook', icon: 'icon-fb-s', url:'https://www.facebook.com/OMartinGual?fref=ts' },
	];
}]);
