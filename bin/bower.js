var gulp  = require('gulp');
var bower = require('gulp-bower');
var conf = require('./config');

gulp.task('bower-install-libs', function () {
    return bower(conf.libs)
});

gulp.task('bower-copy-libs', function () {
    return gulp.src(conf.libs + '/**/*')
        .pipe(gulp.dest(conf.build.libs))
});


gulp.task('bower-install', [
    'bower-install-libs',
    'bower-copy-libs'
]);
