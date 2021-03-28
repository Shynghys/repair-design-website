const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task("sass", function () {
  return gulp.src('./assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task("watch", function () {
  gulp.watch('./assets/styles/**/*.scss', gulp.series('sass'));
});