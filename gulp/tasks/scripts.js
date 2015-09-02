'use strict';

/*====================================
=            Load modules            =
====================================*/

var config = require('../config').browserify;
var displayErrors = require('../util/displayErrors');
var bundlelogger = require('../util/bundleLogger');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
// var $ = require('gulp-load-plugins')();


/*=========================================================
=            Run JavaScript through Browserify            =
=========================================================*/

gulp.task('scripts', function(callback) {
  browserSync.notify('Compiling Javascript');

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    var bundler = browserify({
      // Required watchify args
      cache: {},
      packageCache: {},
      fullpaths: false,
      // Specify the entry point of your requires
      entries: bundleConfig.entries,
      // Add file extensions to make optional in your requires
      // extensions: config.extensions,
      // Enable source maps!
      // debug: config.debug
    });

    var bundle = function() {
      // Log when bundling starts
      bundlelogger.start(bundleConfig.outputName);

      return bundler
        .bundle()
        .on('error', displayErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('finish', reportFinished);
    };

    if (global.isWatching) {
      bundler = watchify(bundler);
      bundler.on('updaet', bundle);
    }

    var reportFinished = function() {
      // Log when bundling completes
      bundlelogger.end(bundleConfig.outputName);

      if (bundleQueue) {
        bundleQueue--;
        if (bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };

    return bundle();
  };

  config.bundleConfigs.forEach(browserifyThis);
});
