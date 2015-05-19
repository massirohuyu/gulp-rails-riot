var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pleeease = require('gulp-pleeease'),
    uglify = require('gulp-uglify'),
    minifyCSS= require('gulp-minify-css'),
    concat = require('gulp-concat'),
    riot = require('gulp-riot'),
    bourbon = require('node-bourbon');

var cssFiles = [
//        "lib/assets/stylesheets/*.css",
//        "vendor/assets/stylesheets/*.css",
        "app/assets/stylesheets/*.css"
    ],
    jsFiles = [
//        "lib/assets/javascripts/*.js",
        "vendor/bower_components/riot/riot.js",
        "app/assets/javascripts/tags/*.js",
        "app/assets/javascripts/*.js"
    ];

//------------------------------------------scss to css with bourbon

gulp.task('sass', function () {
  gulp.src('app/assets/scss/*.scss')
    .pipe(sass({ includePaths: bourbon.includePaths })
        .on('error', sass.logError))
    .pipe(pleeease({
        autoprefixer: { browsers: ['last 2 versions'] }
    }))
    .pipe(gulp.dest('app/assets/stylesheets/'));
});

//------------------------------------------tag to js

gulp.task('riot', function () {
  gulp.src('app/assets/tags/*.tag')
    .pipe(riot())
    .pipe(gulp.dest('app/assets/javascripts/tags/'));
});

//------------------------------------------css minify

gulp.task('css-minify', function () {
  gulp.src(cssFiles)
    .pipe(concat('application.css'))
    .pipe( minifyCSS({ 'keepBreaks' : false }) )
    .pipe(gulp.dest('public/stylesheets/'));
});

//------------------------------------------js minify

gulp.task('js-minify', function () {
  gulp.src(jsFiles)
    .pipe(concat('application.js'))
    .pipe( uglify({preserveComments: 'some'}) )
    .pipe(gulp.dest('public/javascripts/'));
});

//------------------------------------------default (watch)

gulp.task('default', function () {
    gulp.watch('app/assets/scss/*.scss', ['sass']);
    gulp.watch('app/assets/tags/*.tag', ['riot']);
    gulp.watch('app/assets/stylesheets/*.css', ['css-minify']);
    gulp.watch('app/assets/javascripts/*.js', ['js-minify']);
});