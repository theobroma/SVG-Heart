var gulp = require('gulp'),
  watch = require('gulp-watch'),
  notify = require('gulp-notify'),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync').create();

//Конфиг
var paths = {
  src: './',
  dist: './'
};

//Перезагрузка страницы
gulp.task('browser-sync', function() {
  browserSync.init(['css/*.css', 'js/*.js', '*.html'], {
    server: {
      baseDir: './'
    }
  });
});

//Конкатанация JavaScript
gulp.task('concat', function() {
  return gulp
    .src(paths.src + '/src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest(paths.src + '/js/'))
    .pipe(browserSync.stream())
    .pipe(notify('Scripts concatenated'));
});

/*
# ===============================================
# Отслеживание изменения файлов
# ===============================================
*/

gulp.task('watch', function() {
  gulp.watch(paths.src + '/src/**/*.js', ['concat']);
});

/*
# ===============================================
# Группы тасков
# ===============================================
*/

gulp.task('compile', ['concat']);

gulp.task('default', ['compile', 'browser-sync', 'watch']);
