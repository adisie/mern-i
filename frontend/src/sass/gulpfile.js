const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildStyles(){
    return src('./**/*.scss')
       .pipe(sass())
       .pipe(dest('../assets/css'))
}


function trackChanges(){
    watch(['./**/*.scss'],buildStyles)
}

exports.default = series(buildStyles,trackChanges)