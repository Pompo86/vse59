/**
 * Created by Pompo on 07.11.2015.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('watch', ['styles', 'scripts', 'templates'], function() {
// при изменении любых файлов с расширением jade в папке src запускается задача templates, аналогично для js и scss файлов
    gulp.watch('dev/**/*.html', ['templates']);
    gulp.watch('dev/**/*.js', ['js']);
    gulp.watch('dev/**/*.scss', ['styles']);
});

