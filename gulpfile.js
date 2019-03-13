const gulp = require("gulp")
const sass = require("gulp-sass")
const rename = require("gulp-rename")
const cssnano = require("gulp-cssnano")

gulp.task("sass", () => {
	return gulp.src("src/scss/main.scss")
		.pipe(sass())
		.pipe(rename("chidori.css"))
		.pipe(gulp.dest("build"))
		.pipe(gulp.dest("docusaurus/website/static/css"))
})
	
gulp.task("minify", () => {
	return gulp.src("build/*.css")
		.pipe(cssnano())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest("build"))
})

gulp.task("watch", () => {
	gulp.watch("src/scss/**/*.scss", gulp.series("sass"))
})

gulp.task("build", gulp.series("sass", "minify"))