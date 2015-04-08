appComponents.directive('offerContent', function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        template: $templateCache.get('offers/tpl/_offer_content.html'),
        scope: {
            offer: '=',
            offerClass: '='
        }
    }
});