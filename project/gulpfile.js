var gulp = require('gulp');
var sass =  require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var uncss = require('gulp-uncss');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

var mainjs = './src/js/main.js';
var sassComponents = './src/scss/**/*.scss'
var mainCss = './src/scss/main.scss';

// Javascript task
gulp.task('jsTask', function() {
  gulp.src(mainjs)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

// Sass Task
gulp.task('sassTask-prod', function() {
  gulp.src(mainCss)
    .pipe(sass())
    .pipe(uncss({html: ['index.html']}))
    .pipe(autoprefixer({cascade: false}))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/'));
});
// Sass Task
gulp.task('sassTask-dev', function() {
  gulp.src(mainCss)
    .pipe(sass())
    .pipe(autoprefixer({cascade: false}))
    //.pipe(cssnano())
    .pipe(gulp.dest('./dist/'));
});

// Task runners
gulp.task('development', function() {
  gulp.run(['sassTask-dev', 'jsTask']);
  watch([sassComponents, mainCss], function() {
    gulp.run('sassTask-dev');
  });
  watch(mainjs, function() {
    gulp.run('jsTask');
  });
});
gulp.task('production', function() {
  gulp.run(['sassTask-prod','jsTask']);
  watch([sassComponents, mainCss], function() {
    gulp.run('sassTask-prod');
  });
  watch(mainjs, function() {
    gulp.run('jsTask');
  });
});
