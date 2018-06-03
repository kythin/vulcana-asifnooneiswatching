var gulp = require('gulp');
var sass = require('gulp-sass');
var imageResize = require('gulp-image-resize');


gulp.task('default', function () {

    gulp.src('./img_raw/*/*.jpg')
        .pipe(imageResize({
            width : 600,
            height : 900,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('./web/img'));


    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./web/css'));
});
