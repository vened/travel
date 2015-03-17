app.config(function ($stateProvider, $urlRouterProvider) {

    /**
     * root state
     */
    $stateProvider.state('root', {
        url: "/",
        views: {
            'root': {
                templateProvider: function ($templateCache) {
                    return $templateCache.get('root/tpl/index.html')
                }
            }
        }
    })


    $urlRouterProvider.otherwise('/');
});