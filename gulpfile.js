const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const extReplace = require("gulp-ext-replace");
const browserSync = require("browser-sync").create();
const nunjucks = require("gulp-nunjucks");
const nunjucks_lib = require('nunjucks');
const fs = require("fs");
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const jsMinify = require('gulp-minify');

const config = {
  destination: "build",
  source: "src",
  archive: "archive",
};


gulp.task("clean", (cb) => {
  try {
    fs.rmdirSync(`${config.destination}`, { recursive: true });
  } catch (err){
  }
  try {
    fs.mkdirSync(config.destination);
  } catch (err){
  }

  cb();
});

gulp.task("scss", ()=>{
  return gulp.src(`${config.source}/**/**.scss`, {base: config.source})
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(extReplace(".css", ".min.css"))
    .pipe(gulp.dest(config.destination));
})


gulp.task("js", ()=>{
  return gulp.src(`${config.source}/**/**.js`, {base: config.source})
    //.pipe(jsMinify({noSource: true}))
    .pipe(extReplace(".js", "-min.js"))
    .pipe(gulp.dest(config.destination));
})

gulp.task("njk", ()=>{
  return gulp.src(`${config.source}/**/**.njk`, {base: config.source})
    .pipe(nunjucks.compile(null,{
      env: new nunjucks_lib.Environment(new nunjucks_lib.FileSystemLoader('.'))
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(extReplace(".html", ".njk"))
    .pipe(gulp.dest(config.destination));
})

//gulp.task("copy", ()=>{
//  return gulp.src([`${config.source}/**/**`, "!**/**.scss", "!**/**.njk", "!**/**.svg"], {base: config.source, allowEmpty: true})
//    .pipe(gulp.dest(config.destination));
//})

gulp.task("reload", ()=>{
  browserSync.reload();
})

gulp.task("browser-sync", ()=>{
  browserSync.init({
    server: {
      baseDir: config.destination,
    },
    notify: false,
    open: false

  });
})

gulp.task("build", gulp.series(["clean", "js", "scss", "njk"]))

gulp.task("dev", function(){
  gulp.series(["browser-sync"])()
  gulp.series(["build"])()

  return gulp.watch(`${config.source}/**/**`, {usePolling: true, ignoreInitial: false}).on("change", async(file) => {
    gulp.series(["build", "reload"])()
  });
});