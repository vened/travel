appServices.factory('Validators', [function () {
    return {
        /**
         * проверка значения val
         * если пусто выкидавыем ошибку errorText
         * @param val
         * @param error
         * @param errorText
         */
        required: function (val, error, errorText) {
            if (!val) {
                error.text = errorText
                throw error
            }
        },
        /**
         * Сравнение равенства v1 и v2
         * @param v1
         * @param v2
         * @param error
         * @param errorText
         */
        noEqual: function (v1, v2, error, errorText) {
            if (v1 == v2) {
                error.text = errorText
                throw error
            }
        }
    }
}]);

appServices
    .filter('range', function () {
        return function (input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++)
                input.push(i);
            return input;
        };
    })
    .filter('asQuantity', ['$filter', function ($filter) {
        return function (n, f1, f2, f5, f0) {
            return [n, $filter('choosePlural')(n, f1, f2, f5)].join(' ');
        }
    }])
    .filter('choosePlural', function () {
        return function (n, f1, f2, f5) {
            if (!f2 && !f5) {
                var bits = f1.split(',');
                f1 = bits[0];
                f2 = bits[1];
                f5 = bits[2];
            }
            n = n % 100;

            if (n % 10 + 10 == n) return f5;

            n = n % 10;

            if (n == 1) return f1;
            if (n == 2 || n == 3 || n == 4) return f2;

            return f5;
        }
    });