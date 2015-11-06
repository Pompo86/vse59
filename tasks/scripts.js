/**
 * Created by Pompo on 07.11.2015.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp

gulp.task('scripts', function() {
    return gulp.src('dev/js/main.js')
        .pipe($.browserify({debug: true})) // объединяем файлы с помощью browserify
        .pipe($.uglify()) // минификация
        .pipe(gulp.dest('public/js/')) // путь до сформированного файла
        .pipe($.connect.reload()); // перезагружаем сервер
});