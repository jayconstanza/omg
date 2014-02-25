'use strict';

angular.module('HomeModule', [])
.controller('HomeCtrl', function ($scope, $rootScope) {
	$rootScope.menuItems = [
		{ name: 'Home', href:'home' },
		{ name: 'Videos', href:'videos' },
		{ name: 'Fotos', href:'fotos' },
		{ name: 'Sobre mí', href:'sobre-mi' },
		{ name: 'LIKES', href:'' },
		{ name: 'Social', href:'social' }
	];
});
