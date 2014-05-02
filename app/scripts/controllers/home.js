'use strict';

angular.module('HomeModule', [])
.controller('HomeCtrl', [ '$scope', function ($scope) {
	$scope.num = 128;
	$scope.section = 'home';
	$scope.title = 'Omartingual.com';
	$scope.tagline = 'Realizador de audiovisuales y espectáculos';
	$scope.onSize = 768;
	$scope.videoMuted = false;
	$scope.videoMutedIcon = 'glyphicon-volume-up glyphicon';
	$scope.flipCircle = function(){
		if($scope.flip){
			$scope.klass = 'flipped';
		}
		else{
			$scope.klass = '';
		}
	};
	$scope.muteVideo = function() {
		var elem = document.getElementById('home-video');
		// window.alert($scope.videoMuted);
		if($scope.videoMuted === false ){
			$scope.videoMuted = !$scope.videoMuted;
			angular.element(elem).prop('muted', !angular.element(elem).prop('muted'));
			angular.element(elem).attr('volume', 0);
			$scope.videoMutedIcon = 'glyphicon-volume-off glyphicon';
		}
		else{
			$scope.videoMuted = !$scope.videoMuted;
			angular.element(elem).prop('muted', !angular.element(elem).prop('muted'));
			angular.element(elem).attr('volume', 1);
			$scope.videoMutedIcon = 'glyphicon-volume-up glyphicon';
		}
		$scope.apply();
	};
}]);