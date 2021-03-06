var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var nib = require('nib');
var livereload = require('gulp-livereload');
var conf = require('./config');


var stylusDevOpt = {
    use: [nib()],
    import: 'nib',
    compress: false
};
var stylusProdOpt = {
    use: [nib()],
    import: 'nib',
    compress: false
};


/**
 * development tasks
 */
gulp.task('build-css-base', function () {
    return gulp.src(conf.base_css)
        .pipe(stylus(stylusDevOpt))
        .pipe(concat('base.css'))
        .pipe(gulp.dest(conf.build.css))
        .pipe(livereload());
});

gulp.task('build-css-components', function () {
    return gulp.src([
        conf.components.css,
        conf.directives.css
    ])
        .pipe(stylus(stylusDevOpt))
        .pipe(concat('components.css'))
        .pipe(gulp.dest(conf.build.css))
        .pipe(livereload());
});

gulp.task('watch-css-base', function () {
    gulp.watch(conf.base_css, ['build-css-base']);
});

gulp.task('watch-css-components', function () {
    gulp.watch(conf.components.css, ['build-css-components']);
});

gulp.task('css', [
    'build-css-base',
    'build-css-components',
    'watch-css-base',
    'watch-css-components'
]);


/**
 * production tasks
 */
gulp.task('build-css-base-production', function () {
    return gulp.src(conf.base_css)
        .pipe(stylus(stylusProdOpt))
        .pipe(concat('base.css'))
        .pipe(gulp.dest(conf.build.css))
});

gulp.task('build-css-components-production', function () {
    return gulp.src(conf.components.css)
        .pipe(stylus(stylusProdOpt))
        .pipe(concat('components.css'))
        .pipe(gulp.dest(conf.build.css))
});