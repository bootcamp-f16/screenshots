const gulp = require('gulp');
const webpack = require('webpack-stream');

const handleError = function(error) {
    console.log(error);
    this.emit('end')
};

gulp.task('webpack', function(){
    gulp.src('./client/main.js', {read: false})
        .pipe(webpack(require('./webpack.config.js')))
        .on('error', handleError)
        .pipe(gulp.dest('./static'))
});

gulp.task('webpack:watch', ['webpack'], function () {
  gulp.watch(['./client/**/*.*'], ['webpack']);
})

gulp.task('default', ['webpack:watch'], () => {});
