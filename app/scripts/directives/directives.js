'use strict';

angular.module('Directives', [])
.directive('ngAdapt', [ '$window', '$rootScope', function($window, $rootScope) {
	return {
		scope: {
			callback : '&cb',
			num: '&px'
		},
		link: function(scope, element) {
			var win = angular.element($window);
			$rootScope.$watch('windowSize.width', function(newVal){
				angular.element(element).css('width', newVal - scope.num() - 15);
			});
			win.bind('resize', function(){
				$rootScope.$apply(function(){
					//15px to balance the difference in the beginning (due to scrollbar)
					$rootScope.windowSize.width = win.width()+15;
					$rootScope.windowSize.height = win.height();
				});
			});
		}
	};
}]);
