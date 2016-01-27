'use strict';

// # Required modules
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    webserver = require('gulp-webserver'),
    htmlToJs = require('gulp-html-js-template'),
    runSequence = require('run-sequence'),
    del = require('del');

gulp.task('default', ['build']);
gulp.task('serve', function (done) {
    runSequence('build', 'watch', 'run', done);
});
gulp.task('build', function (done) {
    runSequence('clean', ['js', 'styles', 'templates'], done);
});

// components
gulp.task('clean', clean);
gulp.task('js', js);
gulp.task('run', run);
gulp.task('styles', styles);
gulp.task('templates', templates);
gulp.task('watch', watch);

function clean(done) {
    return del('dist', done);
}

function js() {
    return gulp.src('src/**/*.js')
        .pipe(concat('cheeky.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
}

function run() {
    return gulp.src('./')
        .pipe(webserver({
            port: 6080,
            fallback: 'index.html'
        }));
}

function styles() {
    return gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'));
}

function templates(){
    return gulp.src('src/**/*.html')
        .pipe(htmlToJs({concat: 'cheeky-tmpls.js'}))
        .pipe(gulp.dest('dist'));
}

function watch() {
    gulp.watch('src/**/*.less', ['styles']);
    gulp.watch('src/**/*.js', ['js']);
}