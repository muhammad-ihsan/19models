const gulp = require('gulp');
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const watch = require('gulp-watch');
const batch = require('gulp-batch')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const order = require('gulp-order')
const notify = require("gulp-notify")
const autoprefixer = require('gulp-autoprefixer');

const plugins = [
  './node_modules/jquery/dist/jquery.js',
  './node_modules/bootstrap3/dist/js/bootstrap.js',
  './node_modules/mustache/mustache.js',
  'views/scripts/material-kit.js',
]

const stylePlugins = [
  './node_modules/bootstrap3/dist/css/bootstrap.min.css',
  './node_modules/font-awesome/css/font-awesome.min.css'
]

const appScripts = [
  'views/scripts/Controllers.js',
  'views/scripts/Main.js'
]

const styles = [
  'views/sass/*.scss'
]

const DEFAULT_TASKS = ['scripts', 'script-plugins', 'style-plugins', 'sass', 'fonts']

if (process.env.NODE_ENV !== 'prod') {
  DEFAULT_TASKS.push('watch')
}

gulp.task('script-plugins', function () {
  return gulp.src(plugins)
    .pipe(sourcemaps.init())
    .pipe(concat('plugins.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./client/public/scripts/'))
})

gulp.task('style-plugins', function () {
  return gulp.src(stylePlugins)
    .pipe(concat('style-plugins.css'))
    .pipe(gulp.dest('./client/public/css/'))
})

gulp.task('scripts', function () {
  return gulp.src('./views/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(order(appScripts))
    .pipe(concat('apps.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./client/public/scripts/'))
})

gulp.task('sass', function () {
  return gulp.src('./views/sass/*.scss')
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./client/public/css/'))
    .pipe(notify("Beres bosku"));
})

gulp.task('fonts', function () {
  return gulp.src('./node_modules/font-awesome/fonts/fontawesome-webfont.*')
    .pipe(gulp.dest('./client/public/fonts/'))
})

gulp.task('watch', function () {
  watch(['./views/scripts/*.js', './views/sass/*.scss'], batch(function (events, done) {
    gulp.start(['scripts', 'script-plugins', 'sass'], done)
  }))
})


gulp.task('default', DEFAULT_TASKS)

