const source = "src"
const _dist = "./dist/"

module.exports = {
	source		: 	source,  // 源文件目录名
	dist  		: 	_dist, // 生成最终文件的目录名

	port  		: 	3100,     // browser-sync服务器监听端口
	font  		: 	[source + "/fonts/*"],// font文件存在路径
	html  		: 	[source + "/**/*.html"],// html文件存在路径
	scss  		: 	[source + "/**/*.scss"], // sass文件路径
	css 			: 	[source + "/**/*.css"], //css文件路径
	script		: 	[source + "/js/**/*.js"],   // script文件路径
	concatjs	: 	[source + "/js/util/*.js"], //需合并脚本路径
	img   		: 	[source + "/img/**/*.*", source + "/js/activity/*.png"],        // img文件路径
	//iosapp		:   [source + "/download/*"],
	rem   		: 	75,	//px转rem 基数 根据设计图和flexaible设定
	_html 		: 	[_dist + "tpl/**/*.html"],// 打包html文件存在路径
	_css 			: 	[_dist + "/css/*.css"], //打包css文件路径
	_script		: 	[_dist + "/js/**/*.js"],   // 打包script文件路径
	_img   		: 	[_dist + "/img/**/*.*"],        // 打包img文件路径
	//_iosapp		:   [_dist + "/download/*.*"],
	releaseDir		:		_dist,	// 打包目录
	distHtml		:		_dist,	// 打包目录
	
	dsptest		:		"build/testdir",	//dsp测试目录 纯html
	dsprelease:		"build/release",	//dsp上线目录 纯html
	testUrl 	: 	"http://test-hybird1.rayjump.com/", //测试url
	releaseUrl: 	"http://hybird.rayjump.com/" //线上url
}
