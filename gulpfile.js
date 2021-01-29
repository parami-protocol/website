const del = require("del")
const gulp = require("gulp")
const gulpsync = require("gulp-sync")(gulp)
const browserSync = require('browser-sync')
const sass = require("gulp-sass")
const gutil = require("gulp-util")
const concat = require('gulp-concat')
const postcss = require('gulp-postcss')
const px2rem = require('postcss-px2rem')
const minifycss = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const replace = require("gulp-replace")
const htmlminify = require("gulp-html-minify")
const gulpCopy = require('gulp-copy')
const config = require("./config.js")


gulp.task("start", gulpsync.sync([
  "_delete",
  "_html",
  "_seo",
  "_css",
  "_font",
  "_json",
  "_plupload",
  "_sass",
  "_script",
  "_concatjs",
  "_img",
  "_iosapp",
  "_watch",
  "_server"
]))

// 删除多余的文件
gulp.task("_delete", function () {
  return del(config.dist, {force: true})
})

// 处理html模版
gulp.task("_html", function () {
  return gulp.src(config.html, {base: config.source}).pipe(gulp.dest(config.dist))
})

//ios
gulp.task("_iosapp", function () {
  return gulp.src(['./src/download/avatar.png','./src/download/prabox.plist']).pipe(gulp.dest('./dist/'))
})
gulp.task("_seo", function () {
  return gulp.src(['./src/sitemap.xml','./src/robots.txt','./src/lianjinshu.txt']).pipe(gulp.dest('./dist/'))
})

// 将sass文件处理成css文件
gulp.task("_sass", function () {
  var processors = [px2rem({remUnit: config.rem})]
  return gulp.src(config.scss)
    .pipe(sass.sync({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.dist + "/css"))
})

//处理css 文件 一般为工具类
gulp.task("_css", function () {
  return gulp.src(config.css, {base: config.source}).pipe(gulp.dest(config.dist))
})

// 处理脚本文件
gulp.task("_script", function () {
  return gulp.src(config.script, {base: config.source}).pipe(gulp.dest(config.dist))
})

//合并脚本文件
gulp.task("_concatjs", function () {
  return gulp.src(config.concatjs, {base: config.source}).pipe(concat('common.min.js')).pipe(gulp.dest(config.dist + '/js'))
})

// 处理图片
gulp.task("_img", function () {
  return gulp.src(config.img, {base: config.source}).pipe(gulp.dest(config.dist))
})


// 处理文件
gulp.task("_font", function () {
  return gulp.src('./src/fonts/**/*') .pipe(gulp.dest('./dist/fonts'))
})

// 处理文件
gulp.task("_json", function () {
  return gulp.src('./src/i18n/**/*') .pipe(gulp.dest('./dist/i18n'))
})

// 处理文件
gulp.task("_plupload", function () {
  return gulp.src('./src/js/lib/plupload/Moxie*') .pipe(gulp.dest('./dist/js/lib/plupload/'))
})

// 监听文件的变更
gulp.task("_watch", function () {
  gulp.watch(config.img, gulpsync.sync(["_img", "_reload"]))         // 监听图片文件的变更
  gulp.watch(config.html, gulpsync.sync(["_html", "_reload"]))        // 监听html文件的变更
  gulp.watch(config.scss, gulpsync.sync(["_sass", "_reload"]))  			// 监听sass文件
  gulp.watch(config.css, gulpsync.sync(["_css", "_reload"]))					//监听css文件变更
  gulp.watch(config.script, gulpsync.sync(["_script", "_concatjs", "_reload"]))      // 监听script文件
})



// 重新加载页面
gulp.task("_reload", function (done) {
  browserSync.reload();
  done();
})

// 启动服务器
gulp.task('_server', function (done) {

  browserSync.init({
    port: config.port,
    server: {
      baseDir: config.dist,
      directory: true
    }
  })

  done()
})

// 默认构建任务，出错提示
gulp.task("default", function (done) {
  console.log("没有指定构建模块，构建失败！")
})


// 打包
gulp.task('build', gulpsync.sync(
[
  "_delete",
  "_html",
  "_css",
  "_sass",
  "_seo",
  "_font",
  "_json",
  "_script",
  "_concatjs",
  "_img",
  '_minjs',
  '_mincss',
  '_minhtml',
  // '_minimg',
  "_iosapp",
  '_plupload'
]))


//删除build文件
// gulp.task("_deletebuild", function() {
// 	return del(config.build, {force: true})
// })



//js压缩
gulp.task('_minjs', function () {
  return gulp.src(config._script, {base: config.dist})
      .pipe(uglify())
      .pipe(gulp.dest(config.releaseDir))
})
//css压缩
gulp.task('_mincss', function () {
  return gulp.src(config._css, {base: config.dist}).pipe(minifycss()).pipe(gulp.dest(config.releaseDir))
})
//图片压缩
gulp.task('_minimg', function () {
  return gulp.src(config._img, {base: config.dist}).pipe(imagemin({progressive: true})).pipe(gulp.dest(config.releaseDir))
})

// //复制模板
// gulp.task('_copyhtml', function(){
// 	return gulp.src(config._html, {base: config.dist}).pipe(gulp.dest(config.releaseDir))
// })

// 压缩html
gulp.task('_minhtml', function () {
  return gulp.src(config.html)
    .pipe(htmlminify())
    .pipe(gulp.dest(config.distHtml))
})

//打包模板并替换url
// gulp.task('_min_rphtml', function(){
// 	return gulp.src(config._html)
// 		.pipe(replace("script", "EXID")) 	//由于压缩工具会无法压缩underscore模板，so需要临时替换掉script名称
// 		.pipe(replace("/*mv_data*/", "xxx:123")) //临时替换php需要的数据占位符
// 		.pipe(htmlmin())									//压缩html
// 		.pipe(replace("EXID", "script"))	//替换回script标签
// 		.pipe(replace("xxx:123", "/*mv_data*/"))  //替换回占位符
// 		.pipe(replace("../../", config.testUrl)) //替换测试环境url
// 		.pipe(gulp.dest(config.dsptest)) //输出到测试目录
// 		.pipe(replace(config.testUrl, config.releaseUrl)) //替换线上url
// 		.pipe(gulp.dest(config.dsprelease)) //输出至线上目录
// })
