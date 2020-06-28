var gulp   = require('gulp');
var less   = require('gulp-less');
var concat = require('gulp-concat');
var sync   = require('browser-sync').create();
var merge  = require('merge-stream');
var prefix = require('gulp-autoprefixer');

var scripts = require('./src/scripts');

gulp.task('less', function () {
    return gulp.src(['./src/less/*.less'])
        .pipe(less())
        .pipe(prefix({browsers: ['last 4 versions']}))
        .pipe(gulp.dest('./www/css'))
        .pipe(sync.stream())
});

gulp.task('scripts', function() {
    return gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./www/js'))
        .pipe(sync.stream())
});

gulp.task('browser-sync', function() {
    sync.init(null, {
        open: true,
        server: {
            baseDir: './www'
        }
    });
});

gulp.task('serve', function() {
    gulp.watch("./src/less/**/*.less", gulp.series('less')),
    gulp.watch("./src/scripts/**/*.js", gulp.series('scripts')),
    gulp.watch("./www/data/*.json").on('change', sync.reload),
    gulp.watch("./www/**/*.html").on('change', sync.reload)
});

gulp.task('default', gulp.parallel('serve', 'less', 'scripts', 'browser-sync'));