appServices.service('SectionsServices', function ($http, api) {
    return {
        getSection: function (section_id) {
            return $http({
                url: api.GET_SECTION + section_id,
                method: "GET"
            });
        }
    };
});