var gulp = require('gulp');
var runSequence = require('run-sequence');
var tasks = require('require-dir')('./bin');

gulp.task('default', function (callback) {
		runSequence(
			'clear-build',
			'bower-install',
			'css',
			'js',
			'build-img',
			callback
		);
	}
);

gulp.task('deploy', function (callback) {
        runSequence(
            'clear-build',
            'bower-install',
            'build-index-html',
            [
                'build-css-base-production',
                'build-css-components-production',
                'build-js-app',
                'build-js-libs'
            ],
            'build-md5-img',
            'build-md5-css',
            'build-md5-js',
            callback
        );
    }
);
