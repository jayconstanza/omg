'use strict';

angular.module('HomeModule', [])
.controller('HomeCtrl', function ($scope, $rootScope, $window) {
	$rootScope.menuItems = [
		{ name: 'Home', href:'home', img:'' },
		{ name: 'Videos', href:'videos', img:'/images/icons/videos2.png' },
		{ name: 'Fotos', href:'fotos', img:'/images/icons/fotos.png' },
		{ name: 'Sobre mí', href:'sobre-mi', img:'/images/icons/sobre-mi.png' },
		{ name: 'LIKES', href:'', img:'' },
		{ name: 'Social', href:'social', img:'' }
	];
	$rootScope.adaptCb = function(data){
		console.log('num='+data);
	};
	$rootScope.windowSize = {
		width: angular.element($window).width(),
		height: angular.element($window).height()
	};
});
