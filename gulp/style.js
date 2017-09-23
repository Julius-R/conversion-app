const gulp = require('gulp');
const prefix = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');

gulp.task('style', function(){
  return gulp.src('./app/src/styles/**/*.css')
              .pipe(postcss([prefix, cssvars, mixins, nested, cssImport]))
              .pipe(gulp.dest('./app/dist/styles/'));
});
