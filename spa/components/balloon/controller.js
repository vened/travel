appComponents.controller('LoadingIndicatorController', function ($scope) {

	$scope.loading = false
	$scope.$on('$viewContentLoading',
		function (event, viewConfig) {
			$scope.loading = "loading"
			//console.log('content loading')
		});

	$scope.$on('$viewContentLoaded',
		function (event) {
			$scope.loading = false
			//console.log('content loaded')
		});
	
})