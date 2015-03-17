appDirectives.directive('pageTitle', function ($rootScope, $timeout) {
    return {
        link: function (scope, element) {

            var listener = function (event, toState) {

                var title = 'Инна-Тур';
                if (toState.data && toState.data.pageTitle) {
                    title = title + " — " + toState.data.pageTitle;
                }

                $timeout(function () {
                    element.text(title);
                }, 0, false);
            };

            $rootScope.$on('$stateChangeSuccess', listener);
        }
    };
});
