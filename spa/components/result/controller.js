appComponents.controller('ResultController', function ($scope, $stateParams, $filter, SearchResultServices) {

    //https://inna.ru/api/v1/Packages/SearchHotels?DepartureId=6733&ArrivalId=1735&StartVoyageDate=2015-05-11&EndVoyageDate=2015-05-17&TicketClass=0&Adult=2&HotelId=&TicketId=&AddFilter=true&_=1428330728011
    $stateParams.ArrivalId = 1735;
    $stateParams.DepartureId = 6733;
    $stateParams.StartVoyageDate = '2015-09-11';
    $stateParams.EndVoyageDate = '2015-09-20';
    $scope.hotels = null;
    SearchResultServices.getResultSearch($stateParams)
        .success(function (data) {

            $scope.hotels = data.Hotels;

            console.log($scope.hotels);
            //$scope.datasource = {};
            //$scope.datasource.get = function (index, count, success) {
            //    return $timeout(function () {
            //        result = [];
            //        for (var i = 0; i < data.length; i++) {
            //            result.push(data[i]);
            //        }
            //        return success(result);
            //    }, 100);
            //};


            //$scope.datasource = {
            //    get: function (index, count, success) {
            //        console.log(index);
            //        console.log(count);
            //        console.log(success);
            //$timeout(function () {
            //    var start = Math.max(0, index);
            //    var end = Math.min(index + count, 100);
            //
            //    var results = [];
            //    for (var i = start; i < end; i++) {
            //        results.push("Index: " + i);
            //    }
            //
            //    success(results);
            //}, 100);
            //}
            //};


        });
    
    

})