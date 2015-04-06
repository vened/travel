appServices.service('SearchServices', function ($q, $http, api) {
    return {

        /**
         * установка текущей локации
         */
        getCurrentLocation: function (defaultCity) {
            var deferred = $q.defer();
            if (defaultCity) {
                var params = {
                    term: defaultCity.trim()
                }
                $http({
                    url: 'https://inna.ru/api/v1/Dictionary/Directory',
                    method: "GET",
                    params: params
                }).success(function (data) {
                    deferred.resolve({id: data[0].Id, name: data[0].CountryName + ", " + data[0].Name, iata: data[0].CodeIata});
                })
            } else {
                $http({
                    url: 'https://inna.ru/api/v1/Dictionary/GetCurrentLocation',
                    method: "GET"
                }).success(function (data) {
                    deferred.resolve({id: data.Id, name: data.CountryName + ", " + data.Name, iata: data.CodeIata});
                })
            }
            return deferred.promise;
        },


        getLocationFrom: function (val) {
            var deferred = $q.defer();
            var params = {
                term: val.split(', ')[0].trim()
            }
            $http({
                url: 'https://inna.ru/api/v1/Dictionary/Directory',
                method: "GET",
                params: params
            }).success(function (res) {
                var data = []
                angular.forEach(res, function (item) {
                    var fullName = item.Name + ", " + item.CountryName;
                    var allArport = item.Airport ? " (все аэропорты)" : ""
                    var fullNameHtml = "<span class='i-name'>" + item.Name + "</span>," + "<span class='i-country'>" + item.CountryName + allArport + "</span>";
                    data.push({id: item.Id, nameHtml: fullNameHtml, name: fullName, iata: item.CodeIata});
                    if (item.Airport) {
                        angular.forEach(item.Airport, function (item) {
                            var fullName = item.Name + ", " + item.CountryName;
                            var fullNameHtml = "<span class='i-name i-name-airport'>" + item.Name + "</span>";
                            data.push({id: item.Id, nameHtml: fullNameHtml, name: fullName, iata: item.CodeIata});
                        });
                    }
                });
                deferred.resolve(data);
            });
            return deferred.promise;
        },


        getLocationHotel: function (val) {
            var deferred = $q.defer();
            var params = {
                term: val.split(', ')[0].trim()
            }
            $http({
                url: 'https://inna.ru/api/v1/Dictionary/Hotel',
                method: "GET",
                params: params
            }).then(function (res) {
                var data = []
                angular.forEach(res.data, function (item) {
                    var fullName = item.CountryName + ", " + item.Name
                    var fullNameHtml = "<span class='i-name'>" + item.CountryName + "</span>, " + "<span class='i-country'>" + item.Name + "</span>"
                    data.push({id: item.Id, nameHtml: fullNameHtml, name: fullName, iata: item.CodeIata});
                });
                deferred.resolve(data);
            });
            return deferred.promise;
        }
    };
});