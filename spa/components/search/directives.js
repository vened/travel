appComponents.directive('searchForm', function ($templateCache) {
        return {
            restrict: 'E',
            template: $templateCache.get('search/tpl/form.html'),
            scope: {
                partnerSite: "@",
                partnerName: "@",
                partnerDefaultCity: "@",
                searchParams: "=searchParams"
            },
            controller: function ($element, $scope, SearchServices, $state, $stateParams) {

                $scope.search = {};

                $scope.search.DepartureId = $stateParams.DepartureId;
                $scope.search.ArrivalId = $stateParams.ArrivalId;
                $scope.search.StartVoyageDate = $stateParams.StartVoyageDate;
                $scope.search.EndVoyageDate = $stateParams.EndVoyageDate;
                $scope.search.Adult = $stateParams.Adult ? $stateParams.Adult : 2;


                /**
                 * установка текущей локации
                 */
                SearchServices.getCurrentLocation($scope.partnerDefaultCity)
                    .then(function (res) {
                        $scope.search.DepartureId = res;
                    });


                /**
                 * Выбор места вылета
                 */
                $scope.getLocationFrom = function (val) {
                    return SearchServices.getLocationFrom(val)
                        .then(function (data) {
                            return data;
                        })
                };


                /**
                 * автокомплит выбора локации назначения
                 * @param val
                 * @returns {*}
                 */
                $scope.getLocationTo = function (val) {
                    return SearchServices.getLocationHotel(val)
                        .then(function (data) {
                            return data;
                        });
                };


                /**
                 * BEGIN datapicker
                 */
                $scope.setStartDate = new Date();

                var highlightDates = function (date) {
                    var month = date.getMonth() + 1;
                    var dates = date.getDate() + "." + month + "." + date.getFullYear()
                    var oneDay;
                    if ($scope.search.StartVoyageDate == $scope.search.EndVoyageDate) {
                        oneDay = $scope.search.StartVoyageDate;
                    }
                    if (dates == oneDay) {
                        return {
                            classes: 'one_date'
                        };
                    } else {
                        if (dates == $scope.search.StartVoyageDate) {
                            return {
                                classes: 'from_date'
                            };
                        }
                        if (dates == $scope.search.EndVoyageDate) {
                            return {
                                classes: 'to_date'
                            };
                        }
                    }
                };

                $element.find('.from_date').on('changeDate', function (selected) {
                    $scope.setStartDate = selected.date;
                    $element.find('.to_date').datepicker('setStartDate', new Date(selected.date.valueOf()));
                    $element.find('.to_date').datepicker('setEndDate', new Date(selected.date.valueOf() + 86400000 * 28));
                    $element.find('.to_date').focus();
                });

                
                $element.find('.input-daterange').datepicker({
                    format: "d.m.yyyy",
                    startDate: $scope.setStartDate,
                    endDate: new Date($scope.setStartDate.valueOf() + 86400000 * 365),
                    language: "ru",
                    autoclose: true,
                    todayHighlight: true,
                    beforeShowDay: highlightDates
                });
                /**
                 * END datapicker
                 */


                /**
                 * startSearch
                 */
                $scope.startSearch = function (form) {
                    if (form.$valid) {
                        $state.go("result", {
                            DepartureId: $scope.search.DepartureId.id,
                            ArrivalId: $scope.search.ArrivalId.id,
                            StartVoyageDate: $scope.search.StartVoyageDate,
                            EndVoyageDate: $scope.search.EndVoyageDate,
                            Adult: $scope.search.Adult,
                            TicketClass: 0
                        });
                    }
                }


            }
        }
    });