// Based on the gulpfile from https://github.com/veu/js1k-2017

const fs = require('fs');
const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const cmdRegPack = require('regpack').cmdRegPack;
const log = require('fancy-log');

function minify() {
  return gulp.src('src/full.js')
    .pipe(babel({
      compact: true,
      comments: false
    }))
    // Replace the last semicolon in both functions and the program.
    // We can’t use the babel minified option here because it does
    // random other changes that increase size (eg. 1e3 => 1000).
    .pipe(replace(/;(?=}|$)/g, ''))
    .pipe(rename('min.js'))
    .pipe(gulp.dest('dist'));
}

function regpack(cb) {
  const js = fs.readFileSync('dist/min.js', 'utf8');
  const defaults = { reassignVars: true, hash2DContext: true, contextVariableName: 'c' };
  const args = [
    { crushGainFactor: 1, crushLengthFactor: 0 },
    { crushGainFactor: 2, crushLengthFactor: 1 }
  ];
  const [options, packed] = args
    .map(a => [a, cmdRegPack(js, { ...defaults, ...a })])
    .reduce((a, b) => b[1].length < a[1].length ? b : a);
  log.info(`Using regpack options ${JSON.stringify(options)} for ${packed.length} bytes`)
  fs.writeFileSync('dist/packed.js', packed);
  cb();
}

function join() {
  const js = fs.readFileSync('dist/packed.js', 'utf8');
  return gulp.src('src/shim.html')
    .pipe(replace(/<demo>/g, js))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist'));
}

const build = gulp.series(minify, regpack, join)

function watch() {
  gulp.watch(['src/*'], build)
}

exports.default = build;
exports.watch = gulp.series(build, watch);