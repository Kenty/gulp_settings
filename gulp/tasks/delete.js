'use strict';

/*====================================
=            Load modules            =
====================================*/

var config = require('../config.js');
var gulp = require('gulp');
var del = require('del');

/*==============================
=            Delete            =
==============================*/

gulp.task('delete', function(cb) {
  del(config.delete.src, cb);
});
