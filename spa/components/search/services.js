appServices.service('SearchServices', function ($http, api) {
    return {
        getCurrentLocation: function(){
            return $http({
                url: 'https://inna.ru/api/v1/Dictionary/GetCurrentLocation',
                method: "GET"
            });
        },
        getLocation: function(params){
            return $http({
                url: 'https://inna.ru/api/v1/Dictionary/Directory',
                method: "GET",
                params: params
            });
        },
        getLocationHotel: function(params){
            return $http({
                url: 'https://inna.ru/api/v1/Dictionary/Hotel',
                method: "GET",
                params: params
            });
        },
        getSection: function (section_id) {
            return $http({
                url: api.GET_SECTION + section_id,
                method: "GET"
            });
        }
    };
});