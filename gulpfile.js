/* eslint-disable */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    scss = require('gulp-sass');

// Styles
gulp.task('styles:production', function() {
  return sass('src/assets/scss/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('src/assets/scss/styles.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('src/assets/scss/styles.css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('styles:dev', function() {
  return  gulp.src('src/assets/scss/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('src/assets/css/'))
        .pipe(notify({ message: 'Dev styles complete'}))
});

// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/assets/scss/**/*.scss', ['styles']);
});