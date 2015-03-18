app.config(function ($stateProvider, $urlRouterProvider) {

	/**
	 * root state
	 */
	$stateProvider
		.state('root', {
			url  : "/",
			views: {
				'root'        : {
					templateProvider: function ($templateCache) {
						return $templateCache.get('root/tpl/index.html')
					}
				},
				'header@root' : {
					templateProvider: function ($templateCache) {
						return $templateCache.get('header/tpl/index.html')
					}
				},
				'footer@root' : {
					templateProvider: function ($templateCache) {
						return $templateCache.get('footer/tpl/index.html')
					}
				},
				'content@root': {
					controller: 'IndexPageController',
					templateProvider: function ($templateCache) {
						return $templateCache.get('page_index/tpl/index.html')
					},
					resolve: {
						page: function (IndexPageServices) {
							return IndexPageServices.getSection(4)
						}
					}
				}
			}
		})
		.state('about', {
			parent: 'root',
			url   : '^/about',
			data  : {pageTitle: 'О компании'},
			views : {
				'header@root' : {
					templateProvider: function ($templateCache) {
						return $templateCache.get('header/tpl/index.html')
					}
				},
				'content@root': {
					controller      : 'AboutController',
					templateProvider: function ($timeout, $templateCache) {
						return $timeout(function () {
							return $templateCache.get('about/tpl/index.html')
						}, 300);
					}
				}
			}
		})

	$urlRouterProvider.otherwise('/');
});