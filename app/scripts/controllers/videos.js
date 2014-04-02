'use strict';

angular.module('VideosModule', [])
.controller('VideosCtrl', [ '$scope', '$sce', '$animate', 'YoutubeService', function ($scope, $sce, $animate, YoutubeService) {
	//NOTE: FIRST VIDEO DATA IS ASSIGNED MANUALLY. AUTO ON VIDEO CHANGE
	var baseVideoURL = 'http://www.youtube.com/embed/';
	var baseVideoId = '_Ah2nTHgMCI';

	//basic information of the first video
	$scope.section = 'videos';
	$scope.videoTitle = '"Putas Asesinas" de Roberto Bolaño';
	$scope.videoURL = $sce.trustAsResourceUrl(baseVideoURL+baseVideoId);
	$scope.videoDesc = 'Vídeo promocional de l\'adaptació teatral del conte "Putas Asesinas" de Roberto Bolaño.';

	//getting the video list the first time
	$scope.videoList = YoutubeService.getVideoList;
	$scope.videoList().then(function(r){
		$scope.videoList = r;
	});
	//geting the video stats of the first video
	$scope.videoStatistics = YoutubeService.getVideoStatistics;
	$scope.videoStatistics(baseVideoId).then(function(r){
		$scope.videoStatistics = r;
	});
	//video category
	$scope.videoCat = ['Entretenimiento'];

	//scope variable for the nowplaying button
	$scope.nowplaying = 'http://twitter.com/home?status=¡Hey!%20Echa%20un%20vistazo%20a%20'+$scope.videoTitle+'%20de%20OMartinGual+' + $scope.videoURL + '%20#nowplaying';

	/**
	*
	* VIDEO CHANGE
	* Fired on clicking a thumbnail or an item in the video selector
	* Sets the information of the video selected
	*
	* @param title    Title of the video selected
	* @param id    id of the selected youtube video
	* @param desc    description of the new video
	**/
	
	$scope.videoChange = function (title, id, desc) {
		//new basic information of the video
		$scope.videoTitle = title;
		$scope.videoURL = $sce.trustAsResourceUrl(baseVideoURL+id);
		$scope.videoDesc = desc;
		//promise to get the video statistics
		$scope.videoStatistics = YoutubeService.getVideoStatistics;
		//promise to get the video category
		$scope.videoCat = YoutubeService.getVideoCategory;
		$scope.videoStatistics(id)
		.then(function(statistics){
			$scope.videoStatistics = statistics;
			//assigns the new catId 
			$scope.videoCat(statistics[0].snippet.categoryId).then(function(r){
				$scope.videoCat = r;
			});
		});
	};
}]);
