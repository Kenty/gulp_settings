'use strict';

/*====================================
=            Load modules            =
====================================*/

var config = require('../config');
var displayErrors = require('../util/displayErrors');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bulkSass = require('gulp-sass-bulk-import');

/*===============================
=            Libsass            =
===============================*/

gulp.task('styles', function() {

  // var filter = $.filter(['*.css', '!*.map']);

  return gulp.src([config.sass.src])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe(bulkSass())
    .pipe($.sass({
      precision: 10,
      sourceComments: false,
      errLogToConsole: true,
      outputStyle: 'compressed',
      includePaths: [
        config.sass.bowerSrc + config.sass.foundationSrc + config.sass.sourceRoot
      ]
    })).on('error', displayErrors)
    .pipe($.autoprefixer(config.autoprefixer))
    .pipe($.if('*.css', $.csso()))
    // .pipe(filter)
    .pipe($.sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: config.sass.sourceRoot
    }))
    .pipe(gulp.dest(config.sass.root))
    .pipe($.notify({
      title: 'COMPILE',
      message: 'Sass task complete😄'
    }))
    .pipe($.size({
      title: 'sass'
    }));
});
