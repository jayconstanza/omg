'use strict';

angular.module('AboutMeModule', [])
.controller('AboutMeCtrl', [ '$scope', function ($scope) {
	$scope.section = 'OMartinGual';
	$scope.stepsHeader = [
		{ content: '<h1>Productor audiovisual</h1>', clear: false, interval: 2500 },
		{ content: '<h1>No soy éste</h1>', clear: true, interval: 2500 },
		{ content: '<h1>Tampoco éste</h1>', clear: true, interval: 2500 },
		{ content: '<h1>Sino éste</h1>', clear: true, interval: 2500 },
		{ content: '<h1>He trabajado en sitios como...</h1>', clear: true, interval: 5000 },
		{ content: '<h1>Y he realizado proyectos como<br>estos de aquí</h1>', clear: true, interval: 5000 },
		{ content: '<h1>Ahora ya me conoces un poco más</h1>', clear: true, interval: 5000 },
		{ content: '<h1>Aunque si necesitas más,<br>contacta conmigo ;)</h1>', clear: true, interval: 5000 },
	];
	$scope.stepsBrackets = [
		{ content: '', clear: false, interval: 2500 },
		{ content: '<p>1</p>', clear: true, interval: 2500 },
		{ content: '<p>2</p>', clear: true, interval: 2500 },
		{ content: '<p>3</p>', clear: true, interval: 2500 },
		{ content: '<p>4</p>', clear: true, interval: 5000 },
		{ content: '<p>5</p>', clear: true, interval: 5000 },
		{ content: '<p>6</p>', clear: true, interval: 5000 },
		{ content: '<p>7</p>', clear: true , interval: 5000},
	];

}]);
