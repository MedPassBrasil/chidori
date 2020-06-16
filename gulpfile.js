const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");
const del = require("del")

gulp.task("clean", () => {
  return del(["build"])
})

gulp.task("sass", () => {
  return gulp
    .src("src/scss/main.scss")
    .pipe(sass())
    .pipe(rename("chidori.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(gulp.dest("website/static/css"));
});

gulp.task("fonts", () => {
  gulp.src("src/scss/fonts.scss")
    .pipe(sass())
    .pipe(rename("fonts.css"))
    .pipe(gulp.dest("build/css"))

  return gulp.src("src/fonts/*").pipe(gulp.dest("build/fonts"));
});

gulp.task("package", () => {
  return gulp.src([
    "package.json",
    "README.md"
  ]).pipe(gulp.dest("build"))
})

gulp.task("minify", () => {
  return gulp
    .src("build/css/*.css")
    .pipe(cssnano())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("build/css"));
});

gulp.task("watch", () => {
  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("build", gulp.series("clean", "package", "sass", "fonts", "minify"));
