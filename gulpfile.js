"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var replace = require('gulp-replace-task');
// var csso = require("gulp-csso");  // минификатор
// var rename = require("gulp-rename"); // для переименования файла
// var imagemin = require("gulp-imagemin"); // оптимизация картинок
// var webp = require("gulp-webp"); //конвертация в webp
// var svgstore = require("gulp-svgstore"); // создание свг спрайта
// var posthtml = require("gulp-posthtml");  // шаблонизируем хтмл
// var include = require("posthtml-include");// добавить в разметку
// var del = require("del"); // перед новой сборкой удалить build








gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(replace({
      patterns: [{
      match: /}(?=\n[^\n}])/g,
      replacement: '}\n'
      },
      {
      match: / }/g,
      replacement: '}\n'
      }],
      usePrefix: false
      }))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));
