'use strict';

angular.module('Services', [])
	.factory('YoutubeService', [ '$http', function($http) {
		var url = 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUtL3CrHPV6qHBaK1IUBoBIg&key=AIzaSyD-OH-663ZPQs9jWyi8rYWdXzK3P4Xtn9U&callback=JSON_CALLBACK&part=snippet&fields=items(snippet(description,thumbnails,title,resourceId))';
		var videoList = [];
		$http.jsonp(url)
		.success(function(data){
			console.log(data);
			angular.forEach(data.items, function(item){
				videoList.push(item);
			});
		})
		.error(function(err){
			throw new Error(err);
		});
		return {
			getVideoList: function() {
				return videoList;
			}
		};
	}]);
