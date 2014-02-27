'use strict';

angular.module('Directives', [])
.directive('adapt', [ '$window', '$rootScope', function($window, $rootScope) {
	return {
		scope: {
			callback : '&cb',
			num: '&px'
		},
		link: function(scope, element) {
			$rootScope.$watch('windowSize.width', function(newVal, oldVal){
				console.log('newVal', newVal);
				console.log('oldVal', oldVal);
				angular.element(element).css('width', newVal - scope.num() - 15);
				// console.log('$window', $window);
			});
			angular.element($window).bind('resize', function(){

				$rootScope.$apply(function(){
					$rootScope.windowSize.width = angular.element($window).width();
					$rootScope.windowSize.height = angular.element($window).height();
				});
			});
			console.log(scope.num());
			scope.callback({ data: scope.num() });
		}
	};
}]);
