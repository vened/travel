app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    /**
     * Главная страница
     */
        .state('root', {
            url: "/",
            views: {
                '': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('page_root/tpl/index.html')
                    }
                },
                'carousel@root': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('carousel/tpl/carousel.html')
                    },
                    controller: 'SliderController'
                },
                'offers@root': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('offers/tpl/offers.html')
                    },
                    controller: 'OffersController'
                },
                'searchForm@root': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('search/tpl/search.html')
                    }
                }
            },
            resolve: {
                pageSections: function (SectionsServices) {
                    return SectionsServices.getSection(4)
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
                    //controller: 'IndexPageController',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('page_about/tpl/content.html')
                    }
                }
            }
        })

    /**
     * Результаты поиска
     */
        .state('result', {
            // ?DepartureId=6733&ArrivalId=6623&StartVoyageDate=2015-05-11&EndVoyageDate=2015-05-17&TicketClass=0&Adult=2&HotelId=&TicketId=&AddFilter=true&_=1428327815957
            url: '^/result/:DepartureId-:ArrivalId-:StartVoyageDate-:EndVoyageDate-:TicketClass-:Adult-:HotelId-:TicketId-AddFilter',
            data: {pageTitle: 'Результаты поиска'},
            views: {
                '': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('result/tpl/index.html')
                    }
                },
                'searchForm@result': {
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('search/tpl/search.html')
                    }
                },
                'result@result': {
                    controller: 'ResultController',
                    templateProvider: function ($templateCache) {
                        return $templateCache.get('result/tpl/result.html')
                    }
                }
            }
        });

    $urlRouterProvider.otherwise('/');
});