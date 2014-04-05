'use strict';

angular.module('AboutMeModule', [])
.controller('AboutMeCtrl', [ '$scope', function ($scope) {
	$scope.section = 'OMartinGual';
	$scope.saludo = '¡HOLA!';
	$scope.chapters = {
		historia: false,
		clientes: false,
		trabajos: false
	};

	$scope.stepsHeader = [
		{ content: '<h1>Soy Oriol Martín Gual</h1>', clear: true, interval: 1000 },
		{ content: '<h2>¡Encantado de conocerte!</h2>', clear: false, interval: 1500 },
	];
	$scope.stepsThird = [
		{ content: '', clear: false, interval: 2500 },
		{ content: '<h3>¿Qué te gustaría saber sobre mí?</h3>', clear: false, interval: 500 },
		{ content: '<figure class="arrow"><img src="/images/finger.png" alt="Observa las opciones a la derecha"></figure>', clear: false, interval: 2000 }
	];
	$scope.stepsFourth = [
		{ content: '', clear: false, interval: 4000 },
		{ content: '<li class="fadeIn" ng-click="setChapters(true, false, false)" >1. Mi historia</li>', clear: false, interval: 1000 },
		{ content: '<li class="fadeIn" ng-click="setChapters(false, true, false)">2. ¿Para quién he trabajado?</li>', clear: false, interval: 1000 },
		{ content: '<li class="fadeIn" ng-click="setChapters(false, false, true)">3. ¿Qué he hecho?</li>', clear: false, interval: 1000 },
		// { content: '<p><small>O si te apetece... envíame un mensaje :)</small></p>', clear: false, interval: 1500 },
		// { content: '<p><span class="glyphicon glyphicon-envelope"></span></p>', clear: false, interval: 500 },
	];

	$scope.setChapters = function(historia, clientes, trabajos){
		$scope.chapters.historia = historia;
		$scope.chapters.clientes = clientes;
		$scope.chapters.trabajos = trabajos;
	};
}]);
