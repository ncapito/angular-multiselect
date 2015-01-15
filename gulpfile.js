(function(){

'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    htmlmin = require('gulp-htmlmin'),
    jshintreporter = require('jshint-summary'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngTemplates = require('gulp-ng-templates'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    karma = require('karma').server;

var files = {
  test : [],
  css : [ 'styles/multi-select.css'],
  src : ['release/templates.min.js', 'multiselect.js', 'multiselect.config.js', 'multiselect.v2.js'],
  templates : ['views/**/*.html'],
  destination : 'release/',
  all: function(){
    return this.css.concat(this.src).concat(this.templates);
  }
};


gulp.task('templates', function () {
  return gulp.src(files.templates)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(ngTemplates({
      filename: 'templates.js',
      module: 'shalotelli-angular-multiselect.templates',
      path: function (path, base) {
        return path.replace(base, '/');
      }
    }))
    .pipe(gulp.dest('release/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('release/'));
});

gulp.task('scripts', ['templates'], function() {
  return gulp.src(files.src)
    .pipe(concat('multiselect.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(files.destination))
    .pipe(rename(function(path){
      //this is needed so we dont rename the map file
      if(path.extname === '.js') {
        path.basename += '.min';
      }
    }))
    .pipe(uglify({
      preserveComments: 'some',
      outSourceMap: true
    }))
    .pipe(gulp.dest(files.destination));
});


//this is just for css (we can do sass later)
gulp.task('copy', function(){
  gulp.src(files.css)
  .pipe(gulp.dest(files.destination + 'styles/'));
});


gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

gulp.task('clean', function(cb) {
  del([files.destination + 'styles/', files.destination], cb);
});


gulp.task('connect', function() {
  connect.server({
      livereload: true
  });
});

gulp.task('reload', function() {
    gulp.src(['index.html', 'demo/**/*.html'])
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(files.all().concat(['./demo/**/*.html']), ['build' ]);

  gulp.watch(['demo/**/*.html', 'release/**/*'] , ['reload']);
});


gulp.task('build', ['copy', 'scripts']);

gulp.task('default', ['connect', 'watch']);

})();
