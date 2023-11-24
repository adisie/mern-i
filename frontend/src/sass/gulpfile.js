
const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyle(){
    return src('./**/*.scss')
      .pipe(sass())
      .pipe(dest('../assets/css'))
}

function trackChanges(){
    watch(['./**/*.scss'],buildStyle)
}

exports.default = series(buildStyle,trackChanges)