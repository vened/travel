var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var nib = require('nib');
var conf = require('./config');


var stylusDevOpt = {
	use     : [nib()],
	import  : 'nib',
	compress: false
};
var stylusProdOpt = {
	use     : [nib()],
	import  : 'nib',
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
});

gulp.task('build-css-material', function () {
	return gulp.src(conf.libs + '/angular-material/angular-material.min.css')
		.pipe(gulp.dest(conf.build.css))
});

gulp.task('build-css-components', function () {
	return gulp.src(conf.components.css)
		.pipe(stylus(stylusDevOpt))
		.pipe(concat('components.css'))
		.pipe(gulp.dest(conf.build.css))
});

gulp.task('watch-css-base', function () {
	gulp.watch(conf.base_css, ['build-css-base']);
});

gulp.task('watch-css-components', function () {
	gulp.watch(conf.components.css, ['build-css-components']);
});

gulp.task('css', [
    'build-css-material',
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