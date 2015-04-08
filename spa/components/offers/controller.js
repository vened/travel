appComponents.controller('OffersController', function ($scope, pageSections) {

    $scope.offers = (pageSections.status == 200) ? pageSections.data.SectionLayouts[0].OfferLayouts : null;

});