var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested');

gulp.task('default', function(){
  console.log('Hello Gulp!');
});

gulp.task('html', function(){
  console.log('Hello HTML!');
});

gulp.task('styles', function(){
  console.log('Dummy Text!');
  return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([autoprefixer, cssvars, nestedcss]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
