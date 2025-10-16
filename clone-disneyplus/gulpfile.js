const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const scssFiles = "./src/styles/*.scss";

function styles() {
  return gulp.src(scssFiles)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

exports.default = styles;
exports.watch = function() {
  gulp.watch(scssFiles, gulp.parallel(styles));
}
