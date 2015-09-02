'use strict';

/*====================================
=            Load modules            =
====================================*/

var config = require('../config.js');
var gulp = require('gulp');
// var $ = require('gulp-load-plugins')();

/*=============================
=            Watch            =
=============================*/

gulp.task('watch', function() {
  // gulp.watch(config.sass.src, ['styles']);
  gulp.watch(config.sass.src, function() {
      gulp.start('styles');
    })
    .on('change', function(evt) {
      console.log('[watcher] File ' + evt.path.replace(/.*(?=sass)/, '') + ' was ' + evt.type + ', compiling...');
    });
  gulp.watch('config.images.src', function() {
      gulp.start('images');
    })
    .on('change', function(evt) {
      console.log('[watcher] File ' + evt.path + ' was ' + evt.type + ', compiling...');
    });
});
