var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

// PATHS CONFIG
var paths = {
    src: "src/",
    dist: "dist/",
    tests: "test/"
};

gulp.task('default', function() {
    gulp.watch(paths.src + "index.js", ['build']);
});

gulp.task('build', function() {
    gulp.src(paths.src + "index.js")
        .pipe(uglify())
        .pipe(rename("index.min.js"))
        .pipe(gulp.dest(paths.dist));
    return true;
});