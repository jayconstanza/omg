'use strict';

angular.module('VideosModule', [])
.controller('VideosCtrl', [ '$scope', '$sce', '$animate', 'YoutubeService', function ($scope, $sce, $animate, YoutubeService) {
	var baseVideoURL = 'http://www.youtube.com/embed/';
	var baseVideoId = '_Ah2nTHgMCI';

	$scope.section = 'videos';
	$scope.videoTitle = '"Putas Asesinas" de Roberto Bolaño';
	$scope.videoURL = $sce.trustAsResourceUrl(baseVideoURL+baseVideoId);
	$scope.videoDesc = 'Vídeo promocional de l\'adaptació teatral del conte "Putas Asesinas" de Roberto Bolaño.';
	$scope.videoList = YoutubeService.getVideoList;
	$scope.videoList().then(function(r){
		$scope.videoList = r;
		console.log('heylist '+ r);
	});
	$scope.videoStatistics = YoutubeService.getVideoStatistics;
	$scope.videoStatistics(baseVideoId).then(function(r){
		$scope.videoStatistics = r;
		console.log('heystats '+ r);
	});
	$scope.nowplaying = 'http://twitter.com/home?status=¡Hey!%20Echa%20un%20vistazo%20a%20'+$scope.videoTitle+'%20de%20OMartinGual+' + $scope.videoURL + '%20#nowplaying';
	$scope.videoCat = '';
	$scope.videoChange = function (title, id, desc, catId) {
		$scope.videoTitle = title;
		$scope.videoURL = $sce.trustAsResourceUrl(baseVideoURL+id);
		$scope.videoDesc = desc;
		$scope.videoStatistics = YoutubeService.getVideoStatistics;
		$scope.videoStatistics(baseVideoId).then(function(r){
			$scope.videoStatistics = r;
			console.log('heystats '+ r);
		});
		$scope.videoCat = YoutubeService.getVideoCategory;
		$scope.videoCat(catId).then(function(r){
			$scope.videoCat = r;
			console.log('heycat ' + r);
		});
	};
}]);
