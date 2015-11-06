/**
 * Created by Pompo on 07.11.2015.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('imagemin', function() {
    return gulp.src('dev/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/img'));
});
