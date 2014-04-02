'use strict';

angular.module('Services', [])
.factory('YoutubeService', [ '$http', '$q', function($http, $q) {
	return {
		getVideoList: function() {
			var deferred = $q.defer();

			var url = 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUtL3CrHPV6qHBaK1IUBoBIg&key=AIzaSyD-OH-663ZPQs9jWyi8rYWdXzK3P4Xtn9U&callback=JSON_CALLBACK&part=snippet&fields=items(snippet(description,thumbnails,title,resourceId))';
			var videoList = [];
			$http.jsonp(url)
			.success(function(data){
				// console.log(data);
				angular.forEach(data.items, function(item){
					videoList.push(item);
				});
				deferred.resolve(videoList);
			})
			.error(function(err){
				deferred.reject(new Error(err));
			});
			return deferred.promise;
		},

		getVideoStatistics: function(id){
			var deferred = $q.defer();

			var statisticsURL = 'https://www.googleapis.com/youtube/v3/videos?id='+id+'&key=AIzaSyD-OH-663ZPQs9jWyi8rYWdXzK3P4Xtn9U&callback=JSON_CALLBACK&part=statistics,contentDetails,snippet&fields=items(statistics, contentDetails(duration),snippet(categoryId))';
			var statistics = [];
			$http.jsonp(statisticsURL)
			.success(function(data){
				// console.log(data);
				angular.forEach(data.items, function(item){
					statistics.push(item);
				});
				deferred.resolve(statistics);
			})
			.error(function(err){
				deferred.reject(new Error(err));
			});

			return deferred.promise;
		},
		getVideoCategory: function(id){
			var deferred = $q.defer();
			
			var categoryURL = 'https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&id='+id+'&key=AIzaSyD-OH-663ZPQs9jWyi8rYWdXzK3P4Xtn9U&callback=JSON_CALLBACK&hl=es_ES';
			var category = [];
			$http.jsonp(categoryURL)
			.success(function(data){
				// console.log(data);
				angular.forEach(data.items, function(item){
					// console.log(item.snippet.title);
					category.push(item.snippet.title);
					console.log(category);
				});
				deferred.resolve(category);
			})
			.error(function(err){
				deferred.reject(new Error(err));
			});
			return deferred.promise;
		}
	};
}]);
