'use strict';

angular.module('AboutMeModule', [])
.controller('AboutMeCtrl', [ '$scope', function ($scope) {
	$scope.section = 'OMartinGual';
	$scope.stepsHeader = [
		{ content: '', clear: false, interval: 6000 },
		{ content: '<h1>No soy éste</h1>', clear: true, interval: 2500 },
		{ content: '<h1>Tampoco éste</h1>', clear: true, interval: 2500 },
		{ content: '<h1>Sino éste</h1>', clear: true, interval: 2500 },
		{ content: '<h1>He trabajado para empresas como...</h1>', clear: true, interval: 6000 },
		{ content: '<h1>Y he realizado proyectos como<br>estos de aquí</h1>', clear: true, interval: 5000 },
		{ content: '<h1>Ahora ya me conoces un poco más</h1>', clear: true, interval: 2000 },
		{ content: '<h1>Aunque si necesitas más,<br>contacta conmigo ;)</h1>', clear: true, interval: 5000 },
	];
	$scope.stepsBrackets = [
		{ content: '<h1 class="typewriter threeD">Productor audiovisual.</h1>', clear: false, interval: 3000 },
		{ content: '<figure class="circle logo"><img src="/images/icons/nav/logo.png"></figure>', clear: false, interval: 3000 },
		{ content: '<figure class="circle nosoy"></figure>', clear: true, interval: 2500 },
		{ content: '<figure class="circle tampoco"></figure>', clear: true, interval: 2500 },
		{ content: '<figure class="circle nieste"></figure>', clear: true, interval: 2500 },
		{ content: '<figure class="company" id="tv3"><span></span><figcaption>TV3</figcaption></figure>', clear: true, interval: 2000 },
		{ content: '<figure class="company" id="impact"><span></span><figcaption>impactdigital.es</figcaption></figure>', clear: false, interval: 2000 },
		{ content: '<figure class="company" id="treceav"><span></span><figcaption>13av</figcaption></figure>', clear: false, interval: 2000 },
		{ content: '<p>5</p>', clear: true, interval: 5000 },
		{ content: '<div class="smile">=)</div>', clear: true, interval: 2000 },
		{ content: '<p>7</p>', clear: true , interval: 5000 },
	];

}]);
