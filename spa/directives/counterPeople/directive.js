appComponents.directive('counterPeople', function ($templateCache) {
    return {
        template: $templateCache.get('counterPeople/tpl/counter_people.html'),
        scope: {
            adultCount: '=',
            childrenCount: '=',
            childrensAge: '='
        },
        controller: ['$scope', function ($scope) {
            /*Properties*/
            $scope.isOpen = false;

            /*Events*/
            $scope.onCounterClick = function (model, count) {
                $scope[model] = count;
                if (model == 'childrenCount') {
                    $scope.childrensAge = [];
                    for (var i = 0; i < $scope.childrenCount; i++) {
                        $scope.childrensAge.push({value: 0});
                    }
                }
            }

            $scope.onAgeSelectorClick = function (num) {
                var selector = $scope.childrensAge[num];
                selector.isOpen = !selector.isOpen;
            }

            $scope.sum = function (a, b) {
                return +a + +b;
            }
        }],
        link: function (scope, element, attrs) {
            scope.rootElement = $('.search-form-item-current', element);

            $(document).click(function bodyClick(event) {
                var isInsideComponent = !!$(event.target).closest(element).length;
                var isOnComponentTitle = event.target == element || event.target == scope.rootElement[0];

                scope.$apply(function ($scope) {
                    if (isOnComponentTitle) {
                        $scope.isOpen = !$scope.isOpen;
                    } else {
                        $scope.isOpen = isInsideComponent;
                    }
                });
            });
        }
    }
});


appComponents.directive('counterPeopleChildAgeSelector', function ($templateCache) {
    return {
        template: $templateCache.get('counterPeople/tpl/counter_people.subcomponent.html'),
        replace: true,
        scope: {
            'selector': '='
        },
        controller: ['$scope', function ($scope) {
            console.log(143);
            $scope.onChoose = function (age) {
                $scope.selector.value = age;
            }
        }],
        requires: '^counterPeople'
    }
});