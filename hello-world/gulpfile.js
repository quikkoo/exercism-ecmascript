'use strict'

const gulp     = require('gulp')
const del      = require('del')
const eslint   = require('gulp-eslint')
const mocha    = require('gulp-mocha')
const istanbul = require('gulp-istanbul')
const sequence = require('run-sequence')

const mainFiles = 'src/**/*.js'
const testFiles = 'test/**/*.js'
const allFiles  = ['gulpfile.js', mainFiles, testFiles]

gulp.task('clean', (cb) => {
  del(['dist'], cb)
})

gulp.task('check', () => {
  return gulp.src(allFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
})

gulp.task('test', () => {
  return gulp.src(testFiles, {
      read: true
    })
    .pipe(mocha({
      ui: 'tdd',
      bail: false,
      reporter: 'spec'
    }))
})

gulp.task('instrument', () => {
  return gulp.src(mainFiles)
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
})

gulp.task('report', () => {
  return gulp.src(testFiles)
    .pipe(istanbul.writeReports({
      dir: 'dist/coverage',
      reporters: ['html', 'text', 'text-summary']
    }))
    .pipe(istanbul.enforceThresholds({
      thresholds: {
        global: 50
        // statements: 50,
        // branches: 50,
        // functions: 50,
        // lines: 50,
        // each: 50,
      }
    }))
})

gulp.task('coverage', (cb) => {
  sequence('instrument', 'test', 'report', cb)
})
