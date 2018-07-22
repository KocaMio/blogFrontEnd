var gulp = require('gulp');
var parcel = require('gulp-parcel');

gulp.task('parcelBundle', () => {
    gulp.src('src/assets/script/index.js', {read: false})
        .pipe(parcel())
        .pipe(gulp.dest('static/index.js'))
})

gulp.task('default', ['parcelBundle'])