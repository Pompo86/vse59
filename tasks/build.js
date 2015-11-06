/**
 * Created by Pompo on 07.11.2015.
 */

var gulp = require('gulp'); // Подключаем gulp

// gulp build (вторым параметром в массив передаются задачи которые запускаются перед выполнением данной задачи)
gulp.task('build', ['imagemin', 'scripts', 'styles', 'templates']);

// Команда по умолчанию, то что будет происходить если написать просто gulp
gulp.task('default', ['build']);