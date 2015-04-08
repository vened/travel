appComponents.controller('SliderController', function ($scope, pageSections) {

    $scope.slides = (pageSections.status == 200) ? pageSections.data.Slider : null;

});