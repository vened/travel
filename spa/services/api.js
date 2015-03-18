appApi.factory('api', function ()
{
	function url(s)
	{
		var host = '/api/v1';
		return host + s;
	}

	return {
		GET_SECTION: url('/Section/Get/')
	}
});