appServices.service('filterServices', [
	'$http',
	'apiUrls',
	function ($http, apiUrls)
	{
		return {
			getFilters: function ()
			{
				return $http.get(apiUrls.GET_FILTERS);
			}
		};
	}
]);