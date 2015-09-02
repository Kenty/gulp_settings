'use strict';

/*====================================
=            Load modules            =
====================================*/

var config = require('../config').optimize.js;
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/*=============================================
=            Optimizing JavaScript            =
=============================================*/

gulp.task('optimize:js', function() {
  var jsFilter = $.filter('*.js', {
    restore: true
  });

  return gulp.src(config.src)
    .pipe(jsFilter)
    .pipe($.uglify(config.options))
    // .pipe($.concat('bundle.js'))
    .pipe($.rename(config.options))
    .pipe(jsFilter.restore)
    .pipe(gulp.dest(config.dest))
    .pipe($.size({
      title: 'Script'
    }));
});
