var gulp = require('gulp');
var conf = require('./config');
var md5 = require("gulp-md5-plus");
var runSequence = require('run-sequence');
var jade = require('gulp-jade');


gulp.task('build-index-html', function () {
	gulp.src('./views/index.jade')
		.pipe(jade())
		.pipe(gulp.dest(conf.build.build_path))
});

gulp.task('build-md5-css', function () {
	return gulp.src(conf.build.css + "/*.css")
		.pipe(md5(10, './build/index.html'))
		.pipe(gulp.dest(conf.build.css));
});

gulp.task('build-md5-js', function () {
	return gulp.src(conf.build.js + "/*.js")
		.pipe(md5(10, './build/index.html'))
		.pipe(gulp.dest(conf.build.js));
});