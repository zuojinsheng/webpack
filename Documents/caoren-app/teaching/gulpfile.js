var gulp = require('gulp');
var svgSymbols = require('gulp-svg-symbols');
var connect = require('gulp-connect');

gulp.task('webserver',function(){
    connect.server();
})

gulp.task('svgsprites',function () {
    return gulp.src('./tabbar/font-face/*.svg')
    .pipe(svgSymbols())
    .pipe(gulp.dest('./src/svgsprites'))
});
