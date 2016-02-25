var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    plumber      = require("gulp-plumber");

gulp.task("styles", function(){
    gulp.src(["./content/styles/scss/*.scss"])
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9'],
            cascade: false
        }))
        .pipe(gulp.dest("./content/styles/css/"));
});

gulp.task("default", ["styles"], function(){
    gulp.watch(["./**/*.scss"], ["styles"]);
});