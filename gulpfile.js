var gulp = require('gulp');
var coffee = require('gulp-coffee');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

// 语法检查
gulp.task('jshint', function () {
    return gulp.src('develop/js/tween.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 合并文件之后压缩代码
gulp.task('minify', function (){
     return gulp.src('develop/js/tween.js')
        .pipe(concat('tween.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('mc_tweenn.min.js'))
        .pipe(gulp.dest('dist/js'));
});
// 合并文件之后压缩代码
gulp.task('minify_sea', function (){
     return gulp.src('develop/js/ajax.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('mc_ajax.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// 监视文件的变化
gulp.task('watch', function () {
    gulp.watch('develop/js/tween.js', ['minify']);
});

// 注册任务
gulp.task('default', ['minify', 'watch']);
gulp.task('sea', ['minify_sea', 'watch']);