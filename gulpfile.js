var gulp = require('gulp')
var ts = require('gulp-typescript')
var rename = require('gulp-rename')
var del = require('del')

const tsproj = ts.createProject('tsconfig.json')

function build() {
  return gulp.src(['src/**/*.ts', '!src/**/*.d.ts', '!src/**/*.test.ts'])
      .pipe(tsproj())
      .pipe(rename({
        extname: ".js"
      }))
      .pipe(gulp.dest('scripts'))
}

exports.build = build
exports.watch = gulp.series(build, function () {
  return gulp.watch(['src/**/*.ts', '!src/**/*.d.ts', '!src/**/*.test.ts'], ['build'])
})
exports.clean = function() {
  del('scripts/**/*')
}
