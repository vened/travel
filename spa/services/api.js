appApi.factory('apiUrls', function ()
{
	function url(s)
	{
		//var host = 'http://price.max:4001';
		var host = 'http://localhost:4001';
		return host + s;
	}

	return {
		GET_FILTERS: url('/filters')
	}
});