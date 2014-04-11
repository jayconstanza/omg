'use strict';

angular.module('codeApp', [
	'ngResource',
	'ngRoute',
	'ngAnimate',
	'ngTouch',
	'angular-blocks',
	'Filters',
	'Directives',
	'Services',
	'HomeModule',
	'VideosModule',
	'FotosModule',
	'SocialModule',
	'AboutMeModule'
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
	.when('/sobre-mi', {
		templateUrl: '/views/partials/about_me.html',
		controller: 'AboutMeCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
}])
.run(['$rootScope', '$window', '$anchorScroll', '$location', function($rootScope, $window, $anchorScroll, $location){
	$rootScope.menuItems = [
		// { name: 'Home', href:'/home', klass:'/images/icons/nav/logo.png', id:'menu-icon-logo' },
		{ name: 'Bobina', href:'/videos', klass:'icon-nav_videos', id:'menu-icon-videos' },
		{ name: 'LIKES', href:'', klass:'icon-nav_likes', click: true, id:'menu-icon-likes' },
		{ name: 'Sobre mí', href:'/sobre-mi', klass:'icon-nav_about_me', id:'menu-icon-sobre' },
		{ name: 'Social', href:'/social', klass:'icon-nav_social', id:'menu-icon-social' },
		{ name: 'Fotos', href:'/fotos', klass:'icon-nav_fotos', id:'menu-icon-fotos' },
		{ name: 'Comparte', href:'', klass:'icon-nav_comparte', click: true, id:'menu-icon-comparte' }
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
	$rootScope.comparte = false;
	$rootScope.log = function(variable) {
		console.log(variable);
	};
	$rootScope.scrollTo = function(id){
		var old = $location.hash();
		$location.hash(id);
		$anchorScroll();
		$location.hash(old);
	};

}]);
