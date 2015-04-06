var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var templateCache = require('gulp-angular-templatecache');
var cleanhtml = require('gulp-cleanhtml');
var ngAnnotate = require('gulp-ng-annotate');
var slim = require("gulp-slim");
var conf = require('./config');


/**
 * Сборка библиотек
 */
gulp.task('build-js-libs', function () {
    return gulp.src([
        conf.libs + '/jquery/dist/jquery.min.js',
        conf.libs + '/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        conf.libs + '/bootstrap-datepicker/dist/locales/bootstrap-datepicker.ru.min.js',
        conf.libs + '/angular/angular.min.js',
        conf.libs + '/angular-animate/angular-animate.min.js',
        conf.libs + '/angular-sanitize/angular-sanitize.min.js',
        conf.libs + '/angular-ui-router/release/angular-ui-router.min.js',
        conf.libs + '/lodash/lodash.min.js',
        conf.hand_libs + '/ui-bootstrap-custom-build/ui-bootstrap-custom-tpls-0.12.1.min.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(conf.build.js));
});


/**
 * Сборка темплейтов
 */
gulp.task('build-js-tpl', function () {
    return gulp.src([
        conf.components.slim,
        conf.components + '/*.slim'
    ])
        .pipe(slim({
            pretty: true,
            options: "attr_list_delims={'(' => ')', '[' => ']'}"
        }))
        .pipe(cleanhtml())
        .pipe(templateCache({
            module: 'app'
        }))
        .pipe(concat('tpl.js'))
        .pipe(gulp.dest(conf.build.js))
});


/**
 * Сборка приложения
 */
gulp.task('build-js-app', ['build-js-tpl'], function () {
    return gulp.src([
        conf.spa + '/app.js',
        conf.spa + '/states.js',
        conf.spa + '/services/*.js',
        conf.spa + '/directives/*.js',
        conf.components.js,
        conf.build.js + '/tpl.js'
    ])
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify({
            mangle: false,
            compress: false,
            enclose: true,
            outSourceMap: false
        }))
        .pipe(gulp.dest(conf.build.js));
});

gulp.task('watch-js', function () {
    gulp.watch([
        conf.spa + '/app.js',
        conf.spa + '/states.js',
        conf.spa + '/services/*.js',
        conf.spa + '/directives/*.js',
        conf.components.js,
        conf.components.slim,
    ], ['build-js-app']);
});


gulp.task('js', [
    'build-js-libs',
    'build-js-app',
    'watch-js'
]);
