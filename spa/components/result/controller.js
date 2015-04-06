appComponents.controller('ResultController', function ($scope, $stateParams, $filter, SearchResultServices) {

    //https://inna.ru/api/v1/Packages/SearchHotels?DepartureId=6733&ArrivalId=1735&StartVoyageDate=2015-05-11&EndVoyageDate=2015-05-17&TicketClass=0&Adult=2&HotelId=&TicketId=&AddFilter=true&_=1428330728011
    $stateParams.ArrivalId = 1735;
    $stateParams.DepartureId = 6733;
    $stateParams.StartVoyageDate = '2015-05-11';
    $stateParams.EndVoyageDate = '2015-05-20';
    SearchResultServices.getResultSearch($stateParams)
        .success(function (data) {


            var datasource = {};
            datasource.get = function (index, count, success) {
                return $timeout(function () {
                    result = [];
                    for (var i = 0; i < data.length; i++) {
                        result.push(data[i]);
                    }
                    return success(result);
                }, 100);
            };
            console.log(datasource);
            return $scope.datasource = datasource;
            
        })

})