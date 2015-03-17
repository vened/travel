var gulp  = require('gulp');
var bower = require('gulp-bower');
var conf = require('./config');

gulp.task('bower-install', function () {
    return bower(conf.libs)
});