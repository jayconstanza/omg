'use strict';

angular.module('Directives', [])
.directive('adapt', [ '$window', '$rootScope', function($window, $rootScope) {
	return {
		scope: {
			callback : '&cb',
			num: '&px'
		},
		link: function(scope, element, attrs) {
			// var num = scope.$eval(attrs.px);
			// console.log('number: '+num);
			// var w = angular.element($window);
			// console.log('width: '+ w.width());
			// var subs = w.width() - num - 64;
			// angular.element(element).css('width', subs);
			// angular.element(element).on('resize', function(){
			// 	angular.element(element).css('width', subs);
			// });
			// console.log(scope);
			// console.log(angular.element(element).controller());
			// scope.callback({ data: num });


			$rootScope.$watch('windowSize.width', function(newVal, oldVal){
				console.log('newVal', newVal);
				console.log('oldVal', oldVal);
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
			/**
			
				TODO:
				- RECALCULAR Width para hacer el resize
				- Second todo item
			
				**/


		}
	};
}]);
