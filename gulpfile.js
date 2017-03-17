const gulp = require('gulp');

gulp.task('copy:scripts', function () {
    return gulp.src('src/scripts/**/*.js').pipe(gulp.dest('assets'));
});

gulp.task('copy:templates', function () {
    return gulp.src('src/templates/**/*.dust');
});

gulp.task('default', ['copy:scripts', 'copy:templates']);
