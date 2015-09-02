'use strict';

/*====================================
=            Load modules            =
====================================*/

var config = require('../config.js');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/*==============================
=            Images            =
==============================*/

gulp.task('images', function() {
    return gulp.src(config.images.src)
      .pipe($.changed(config.images.dest))
      .pipe(gulp.dest(config.images.dest));
});
