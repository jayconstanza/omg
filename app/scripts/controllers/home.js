'use strict';

angular.module('HomeModule', [])
.controller('HomeCtrl', function ($scope, $rootScope, $window) {
	$rootScope.menuItems = [
		{ name: 'Home', href:'home', img:'/images/logo.png' },
		{ name: 'Videos', href:'videos', img:'/images/icons/videos2.png' },
		{ name: 'Fotos', href:'fotos', img:'/images/icons/fotos.png' },
		{ name: 'Sobre mí', href:'sobre-mi', img:'/images/icons/sobre-mi.png' },
		{ name: 'LIKES', href:'', img:'' },
		{ name: 'Social', href:'social', img:'/images/icons/social2.png' }
	];
	$rootScope.windowSize = {
		width: angular.element($window).width(),
		height: angular.element($window).height()
	};
	$rootScope.socialIcons = [
		{ klass: 'icon-fb', url: 'http://www.facebook.com/share.php?u='+document.URL+'&title=OMartinGual%20Portfolio' },
		{ klass: 'icon-tw', url: 'http://twitter.com/home?status=¡Hey!%20Echa%20un%20vistazo%20a%20los%20videos%20de%20OMartinGual+'+document.URL },
		{ klass: 'icon-gplus', url: 'https://plus.google.com/share?url='+document.URL },
	];
});
