'use strict';

/*====================================
=            Load modules            =
====================================*/

// var config = require('../config.js');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bowerFiles = require('main-bower-files');


/*====================================
=            Run-sequence            =
====================================*/

gulp.task('bower-files', function() {
  var filterJs = $.filter('**/*.js');
  return gulp.src(bowerFiles())
    .pipe(filterJs)
    .pipe($.uglify({
      preserveComments: 'some'
    }))
    // .pipe(filterJs.restore())
    .pipe(gulp.dest('assets/lib'));
});
