/**
 * Created by Pompo on 07.11.2015.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('templates', function(){
    return gulp.src('dev/templates/*.html')
        //.pipe($.jade()) // компилируем jade в html
        .pipe(gulp.dest('public')) // путь где будут лежать html файлы
        .pipe($.connect.reload()); // перезагрузка сервера
});
