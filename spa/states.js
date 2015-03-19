app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    /**
     * Главная страница
     */
        .state('root', {
            url: "/",
            controller: 'IndexPageController',
            templateProvider: function ($templateCache) {
                return $templateCache.get('page_root/tpl/content.html')
            },
            resolve: {
                page: function (IndexPageServices) {
                    return IndexPageServices.getSection(4)
                }
            }
        })


    /**
     * Страница о компании
     */
        .state('about', {
            url: '^/about',
            data: {pageTitle: 'О компании'},
            views: {
                '': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('page_about/tpl/index.html')
                    }
                },
                'content@about': {
                    controller: 'IndexPageController',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('page_about/tpl/content.html')
                    }
                }
            }
        });

    $urlRouterProvider.otherwise('/');
});