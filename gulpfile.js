var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pleeease = require('gulp-pleeease'),
    uglify = require('gulp-uglify'),
    minifyCSS= require('gulp-minify-css'),
    concat = require('gulp-concat'),
    riot = require('gulp-riot'),
    neat = require('node-neat'),
    merge = require('merge-stream'),
    plumber = require('gulp-plumber');

var cssFiles = [
//        "lib/assets/stylesheets/*.css",
//        "vendor/assets/stylesheets/*.css",
        "app/assets/stylesheets/*.css"
    ];

var jsFilesMin = [
//        "vendor/assets/javascripts/**/*min.js",
        "vendor/bower_components/underscore/underscore-min.js"
//        "vendor/bower_components/lodash/lodash.min.js"
    ],
    jsFiles = [
//        "lib/assets/javascripts/*.js",
        "vendor/assets/javascripts/**/*.js",
//        "vendor/bower_components/riot/riot+compiler.min.js",
        "vendor/bower_components/riot/riot.min.js",
        "app/assets/javascripts/tags/*.js",
        "app/assets/javascripts/*.js"
    ];

//------------------------------------------scss to css with bourbon

gulp.task('sass', function () {
    gulp.src('app/assets/scss/*.scss')
        .pipe(plumber())
        .pipe(sass({ includePaths: neat.includePaths })
            .on('error', sass.logError))
        .pipe(pleeease({
            autoprefixer: { browsers: ['last 2 versions'] }
        }))
        .pipe(gulp.dest('app/assets/stylesheets/'));
});

//------------------------------------------tag to js

gulp.task('riot', function () {
    gulp.src('app/assets/tags/*.tag')
        .pipe(plumber())
        .pipe(riot())
        .pipe(gulp.dest('app/assets/javascripts/tags/'));
});

//------------------------------------------css minify

gulp.task('css-minify', function () {
    gulp.src(cssFiles)
        .pipe(plumber())
        .pipe(concat('application.css'))
        .pipe( minifyCSS({ 'keepBreaks' : false }) )
        .pipe(gulp.dest('public/stylesheets/'));
});

//------------------------------------------js minify

gulp.task('js-minify', function () {
    merge(
        gulp.src(jsFilesMin),
        gulp.src(jsFiles)
            .pipe(plumber())
//            .pipe( uglify({preserveComments: 'some'}) )
    )
    .pipe(concat('application.js'))
    .pipe(gulp.dest('public/javascripts/'));
});

//------------------------------------------all

gulp.task('all', function () {
    gulp.start(['sass', 'riot', 'css-minify', 'js-minify']);
});

//------------------------------------------default (watch)

gulp.task('default', function () {
    gulp.watch('app/assets/scss/**/*.scss', ['sass']);
    gulp.watch('app/assets/tags/*.tag', ['riot']);
    gulp.watch('app/assets/stylesheets/**/*.css', ['css-minify']);
    gulp.watch('app/assets/javascripts/**/*.js', ['js-minify']);
});
