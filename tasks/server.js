/**
 * Created by Pompo on 07.11.2015.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('server', ['watch'], function() {
    $.connect.server({
        root: 'public', // корневая папка для сервера
        port: 3000, // порт сервера
        livereload: true // автоматический перезапуск
    })
});
