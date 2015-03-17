app.config(function ($stateProvider, $urlRouterProvider) {

    /**
     * root state
     */
    $stateProvider
        .state('root', {
            url: "/",
            views: {
                'root': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('root/tpl/index.html')
                    }
                },
                'header@root': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('header/tpl/index.html')
                    }
                },
                'footer@root': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('footer/tpl/index.html')
                    }
                }
            }
        })
        .state('about', {
            parent: 'root',
            url: '^/about',
            data: {pageTitle: 'О компании'},
            views: {
                'header@root': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('header/tpl/index.html')
                    }
                },
                'content@root': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('about/tpl/index.html')
                    }
                }
            }
        })

    $urlRouterProvider.otherwise('/');
});