const fileinclude = require("gulp-file-include");
const gulp = require("gulp");

// gulp.task("fileinclude", function(resolve, reject) {
//   gulp
//     .src(["./index.*"])
//     .pipe(
//       fileinclude({
//         prefix: "@@",
//         basepath: "@file"
//       })
//     )
//     .pipe(gulp.dest("./"));
// });

gulp.task("hello", function(resolve, reject) {
  gulp
    .src(["./index.*"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest("./dist"));
  resolve();
});
