var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var md5 = require("gulp-md5-plus");
var conf = require('./config');


gulp.task('build-img', function () {
	return gulp.src(conf.img + '/**/*')
		.pipe(imagemin({
			progressive: true,
			interlaced : true
		}))
		.pipe(gulp.dest(conf.build.img))
});

gulp.task('build-md5-img', function () {
	return gulp.src(conf.img + '/**/*')
		.pipe(imagemin({
			progressive: true,
			interlaced : true
		}))
		.pipe(md5(10, conf.build.css + '/*.css'))
		.pipe(gulp.dest(conf.build.img));
});