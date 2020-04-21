const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
gulp.task("sass", () => {
	return gulp
		.src("sass/**/*.scss")
		.pipe(
			sass({
				outputStyle: "expanded",
			}).on("error", sass.logError)
		)
		.pipe(gulp.dest("css/"));
});

gulp.task("pug", () => {
	return gulp
		.src({
			pretty: true,
		})
		.pipe(gulp.dest("dist/"));
});

gulp.task("default", () => {
	gulp.watch("sass/**/*.scss", gulp.series("sass"));
});
