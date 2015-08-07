appComponents.controller('ResultController', function ($rootScope, $scope, $timeout, $stateParams, $filter, SearchResultServices) {

    //https://inna.ru/api/v1/Packages/SearchHotels?DepartureId=6733&ArrivalId=1735&StartVoyageDate=2015-05-11&EndVoyageDate=2015-05-17&TicketClass=0&Adult=2&HotelId=&TicketId=&AddFilter=true&_=1428330728011
    $stateParams.ArrivalId = 1735;
    $stateParams.DepartureId = 6733;
    $stateParams.StartVoyageDate = '2015-09-11';
    $stateParams.EndVoyageDate = '2015-09-20';
    $scope.hotels = null;
    SearchResultServices.getResultSearch($stateParams)
        .success(function (data) {
            $scope.hotels = data.Hotels;

            var datasource = {};
            datasource.get = function (index, count, success) {
                return $timeout(function () {
                    var result = [];
                    var i, j, ref, ref1;
                    for (i = j = ref = index, ref1 = index + count - 1; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
                        result.push($scope.hotels[i]);
                        //result.push("item #" + i);
                    }
                    return success(result);
                }, 100);
            };
            $scope.datasource = datasource;

        });

})