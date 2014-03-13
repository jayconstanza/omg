'use strict';

angular.module('VideosModule', [])
  .controller('VideosCtrl', [ '$scope', 'YoutubeService', function ($scope, YoutubeService) {
    $scope.section = 'videos';
    $scope.videoList = YoutubeService.getVideoList();
  }]);
