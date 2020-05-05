const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

gulp.task("sass", () => {
	return gulp
		.src("dev/sass/**/*.scss")
		.pipe(
			sass({
				outputStyle: "compressed",
			}).on("error", sass.logError)
		)
		.pipe(gulp.dest("dist/css/"));
});

gulp.task("pug", () => {
	return gulp
		.src("dev/pug/*.pug")
		.pipe(
			pug({
				pretty: false,
			})
		)
		.pipe(gulp.dest("dist/"));
});

gulp.task("default", () => {
	gulp.watch("dev/sass/**/*.scss", gulp.series("sass"));
	gulp.watch("dev/pug/**/*.pug", gulp.series("pug"));
});
