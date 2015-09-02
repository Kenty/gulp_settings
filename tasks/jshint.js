'use strict';

/*====================================
=            Load modules            =
====================================*/

var config = require('../config').jshint;
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');

/*=============================================
=            Optimizing JavaScript            =
=============================================*/

gulp.task('jshint', function() {
  return gulp.src(config.src)
    // .pipe($.jshint('./.jshintrc'))
    .pipe($.jshint('.jshintrc'))
    .pipe($.jshint.reporter(stylish));
});
