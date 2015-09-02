// 'use strict';
var paths;

paths = {
  scssSrc: 'scss/**/*.scss',
  jsSrc: 'js/**/*.js',
  imgSrc: 'assets/img/src/**',
  dest: './assets/dest',
  rootDir: './'
};

module.exports = {
  /**
   *
   * sass Compile Option.
   *
   */
  sass: {
    src: paths.scssSrc,
    bowerSrc: 'bower-components/',
    foundationSrc: 'foundation/',
    dest: paths.dest + '/css',
    sourceRoot: 'scss/',
    root: paths.rootDir
  },

  autoprefixer: {
    browsers: [
      'ie >= 10',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],
    cascade: true
  },

  /**
   *
   * Images
   *
   */
  images: {
    src: paths.imgSrc,
    dest: paths.dest + '/img'
  },

  /**
   *
   * JavaScript.
   *
   */
  browserify: {
    bundleConfigs: [{
      entries: './' + 'assets/js/src/plugins.js',
      dest: paths.dest + '/js',
      outputName: 'all.js'
    }, {
      entries: './' + 'assets/js/src/my_mixitup.js',
      dest: paths.dest + '/js',
      outputName: 'mixItUp.js'
    }, {
      entries: './' + 'assets/js/src/my_chart.js',
      dest: paths.dest + '/js',
      outputName: 'chart.js'
    }, {
      entries: './' + 'assets/js/src/test.js',
      dest: paths.dest + '/js',
      outputName: 'test.js'
    }],
    debug: true,
    // extensions: ['js', 'jsx'],
  },

  /**
   *
   * browserSync.
   *
   */
  browserSync: {
    proxy: 'vccw.dev',
    server: {
      baseDir: './'
    },
    xip: true,
    files: [
      paths.dest + '/css/*.css',
      paths.dest + '/js/*.js',
      paths.dest + '/img/**',
      './**/*.php',
      './**/*.html'
    ]
  },

  /**
   *
   * Delete
   *
   */
  delete: {
    src: [paths.dest]
  },

  /**
   *
   * Optimize
   *
   */
  optimize: {
    css: {

    },
    js: {
      src: paths.dest + '/js/*.js',
      dest: paths.dest + '/js',
      options: {
        mangle: false,
        preserveComments: 'some',
        extname: '.min.js'
      }
    },
    images: {
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    }
  },

  /**
   * [jshint description]
   * @type {Object}
   */
  jshint: {
    src: [paths.jsSrc, paths.rootDir + paths.jsSrc]
  }
};
