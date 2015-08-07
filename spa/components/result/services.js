appServices.service('SearchResultServices', function ($q, $http, api) {
    return {
        getResultSearch: function (params) {
            return $http({
                //url: 'https://inna.ru/api/v1/Packages/Search',
                //url: 'https://inna.ru/api/v1/Packages/SearchHotels?DepartureId=6733&ArrivalId=6623&StartVoyageDate=2015-05-11&EndVoyageDate=2015-05-17&TicketClass=0&Adult=2&HotelId=&TicketId=&AddFilter=true&_=1428327815957',
                url: 'https://inna.ru/api/v1/Packages/SearchHotels',
                method: "GET",
                params: params
            });
        }
    };
});

appServices.factory('DpHotels', function ($timeout) {
    return {
        get: function (index, count, success) {
            console.log(index);
            console.log(count);
            return $timeout(function () {
                var i, j, ref, ref1, result;
                result = [];
                for (i = j = ref = index, ref1 = index + count - 1; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
                    result.push("item #" + i);
                }
                return success(result);
            }, 100);
        }
    }
});