/**
 * Created by Pompo on 07.11.2015.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src('dev/styles/main.scss')
        .pipe($.sass({errLogToConsole: true})) // компиляция scss файлов в css
        .pipe($.autoprefixer({ browsers: ['last 2 version'] })) // добавляем префиксы
        .pipe($.csso()) // минификация
        .pipe(gulp.dest('public/styles')) // путь, куда ложим преобразованные стили
        .pipe($.connect.reload()); // перезагрузка сервера
});