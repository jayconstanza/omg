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
}])
.run(['$rootScope', '$window', function($rootScope, $window){
	$rootScope.menuItems = [
		{ name: 'Home', href:'/home', img:'/images/icons/nav/logo.png', id:'menu-icon-logo' },
		{ name: 'Videos', href:'/videos', img:'/images/icons/nav/videos.png', id:'menu-icon-videos' },
		{ name: 'LIKES', href:'', img:'images/icons/nav/likes.png', click: true, id:'menu-icon-likes' },
		{ name: 'Fotos', href:'/fotos', img:'/images/icons/nav/fotos.png', id:'menu-icon-fotos' },
		{ name: 'Sobre mí', href:'/sobre-mi', img:'/images/icons/nav/sobre-mi.png', id:'menu-icon-sobre' },
		{ name: 'Social', href:'/social', img:'/images/icons/nav/social.png', id:'menu-icon-social' }
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
	$rootScope.likes = false;
}]);
