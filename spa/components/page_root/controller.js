appComponents.controller('IndexPageController', function ($scope, page) {

	$scope.page = (page.status == 200) ? page.data : null;
    $scope.sections = (page.status == 200) ? page.data.SectionLayouts[0] : null;

})