const gulp = require('gulp');

gulp.task('copy:index', function () {
    return gulp.src('src/index.html').pipe(gulp.dest('assets'));
});

gulp.task('copy:scripts', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(gulp.dest('assets/scripts'));
});

gulp.task('copy:templates', function () {
    return gulp.src('src/templates/**/*.dust')
        .pipe(gulp.dest('assets/templates'));
});

gulp.task('copy:require', function () {
    return gulp.src('src/app.main.js').pipe(gulp.dest('assets'));
});

gulp.task('default', ['copy:index', 'copy:scripts', 'copy:templates', 'copy:require']);
