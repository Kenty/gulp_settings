'use strict';

/*====================================
=            Load modules            =
====================================*/

// var config = require('../config.js');
var gulp = require('gulp');
var runSequence = require('run-sequence');

/*====================================
=            Run-sequence            =
====================================*/

gulp.task('build', function(cb) {
  runSequence('delete', ['styles', 'images', ], cb);
});
