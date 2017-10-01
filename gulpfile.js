'use strict';

//include required plugins
var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  rigger = require('gulp-rigger'),
  rimraf = require('rimraf'),
  cssmin = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  browserSync = require("browser-sync"),
  plumber = require("gulp-plumber"),
  notify = require('gulp-notify'),
  reload = browserSync.reload;

//set paths
var path = {
    build: {
        html: 'build',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/html/*.html',
        js: 'src/js/main.js',
        style: 'src/sass/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.{ttf,otf,eot,svg,woff,woff2}'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/sass/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

//config local server
var config = {
    server: {
        baseDir: "build/",
        index: "people.html"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

//build assets
gulp.task('html:build', function () {
    gulp.src(path.src.html)
      .pipe(rigger())
      .pipe(gulp.dest(path.build.html))
      .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
      .pipe(plumber({ errorHandler: function(err) {
          notify.onError({
              title: "Gulp error in " + err.plugin,
              message:  err.toString()
          })(err);
      }}))
      .pipe(rigger())
      .pipe(sourcemaps.init()) 
      .pipe(uglify())
      .pipe(sourcemaps.write()) 
      .pipe(gulp.dest(path.build.js))
      .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
      .pipe(sourcemaps.init())
      .pipe(plumber({ errorHandler: function(err) {
          notify.onError({
              title: "Gulp error in " + err.plugin,
              message:  err.toString()
          })(err);
      }}))
      .pipe(sass())
      .pipe(prefixer())
      .pipe(cssmin())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.build.css))
      .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
      .pipe(plumber({ errorHandler: function(err) {
          notify.onError({
              title: "Gulp error in " + err.plugin,
              message:  err.toString()
          })(err);
      }}))
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()],
          interlaced: true
      }))
      .pipe(gulp.dest(path.build.img))
      .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
      .pipe(plumber({ errorHandler: function(err) {
          notify.onError({
              title: "Gulp error in " + err.plugin,
              message:  err.toString()
          })(err);
      }}))
      .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

//config watching task
gulp.task('watch', function(){
    watch([path.watch.html], function() {
        gulp.start('html:build');
    });
    watch([path.watch.style], function() {
        gulp.start('style:build');
    });
    watch([path.watch.js], function() {
        gulp.start('js:build');
    });
    watch([path.watch.img], function() {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function() {
        gulp.start('fonts:build');
    });
});

//start local server
gulp.task('webserver', function () {
    browserSync(config);
});

//remove built assets
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

//config main task
gulp.task('default', ['clean'], function() {
    gulp.start('build');
    gulp.start('webserver');
    gulp.start('watch');
});