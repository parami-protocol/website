//URL


var host = (location.host !== 'chain.pro' && location.host !== 'prabox.net') ? 'http://127.0.0.1:3300' : '';

var ACCOUNT_URL = host + '/proback/api/account';

var LOGIN_URL = host + '/proback/api/authenticate';
var REGISTER_URL = host + '/proback/api/register';
var REGISTER_URL_PHONE = host + '/proback/api/registerbyphone';
var REGISTER_URL_MAIL = host + '/proback/api/registerbymail';
var REGISTER_EMAIL = host + '/proback/api/account/registeremail';
var REGISTER_PHONE = host + '/proback/api/account/registersms';

var KYC_PHONE = host + '/proback/api/v2/userkyc/requestSms';
var FORGET_PASSOWRD_INIT_URL = host + '/proback/api/account/reset_password/init';
var FORGET_PASSOWRD_FINISH_URL = host + '/proback/api/account/reset_password/finish';

var FORGET_PASSOWRD_RESET_Mail = host + '/proback/api/account/getResetMail';
var FORGET_PASSOWRD_RESET_SMS = host + '/proback/api/account/getResetSMS';
var FORGET_PASSOWRD_RESET_URL = host + '/proback/api/account/resetpwd';

var KYC_SUBMIT_URL = host + '/proback/api/userkyc/commit';
var KYC_UPLOAD_URL = host + '/proback/api/userkyc/upload';

var KYC_STATUS_URL = host + '/proback/api/userkyc/getInfo'; // 获取用户kyc状态信息
var GOT_OSS = host + '/proback/api/oss/singnature';
var GOT_OSS_IMG_URL = host + '/proback/api/oss/getimageurl/thumbs';
// var GOT_OSS_IMG_URL = host + '/proback/api/oss/getimageurl/resize';
var QUICK_REGISTER_PHONE = host + '/proback/api/account/quickregsms';
var QUICK_REGISTER_URL_PHONE = host + '/proback/api/account/quickRegisterByPhone'; //快速注册
var QUICK_REGISTER_SUCCESS = host + '/tpl/success.html';
var IIC_QUICK_REGISTER_SUCCESS= host + '/tpl/iic/success.html';
var IIC_KYC_STATUS_PAGE = host + '/tpl/iic/kyc_status.html';
var IIC_LOGIN = host+'/tpl/iic/login.html';
var SIGN_MESSAGE  = host + '/proback/api/v2/account/getLoginSms';
var SIGN_MESSAGE_VERIFY  = host + '/proback/api/v2/smsAuthenticate';

//Page
var HOME_PAGE = host + '/';
var LOGIN_PAGE = host + '/tpl/login.html';
var REGISTER_PAGE = host + '/tpl/register.html';
var FORGET_PASSWORD_INIT_PAGE = host + '/tpl/forget_pwd_init.html';
var FORGET_PASSWORD_FINISH_PAGE = host + '/tpl/forget_pwd_finish.html';
var KYC_STATUS_PAGE = host + '/tpl/kyc_status.html';
var KYC_PAGE = host + '/tpl/kyc.html';

// var COUNTRY_MAP = [
//   {"key": "CN", "value": "中国(China)"},
//   {"key": "AD", "value": "安道尔共和国(Andorra)"},
//   {"key": "AE", "value": "阿拉伯联合酋长国(United Arab Emirates)"},
//   {"key": "AF", "value": "阿富汗(Afghanistan)"},
//   {"key": "AG", "value": "安提瓜和巴布达(Antigua and Barbuda)"},
//   {"key": "AI", "value": "安圭拉岛(Anguilla)"},
//   {"key": "AL", "value": "阿尔巴尼亚(Albania)"},
//   {"key": "AM", "value": "亚美尼亚(Armenia)"},
//   {"key": "AO", "value": "安哥拉(Angola)"},
//   {"key": "AR", "value": "阿根廷(Argentina)"},
//   {"key": "AT", "value": "奥地利(Austria)"},
//   {"key": "AU", "value": "澳大利亚(Australia)"},
//   {"key": "AZ", "value": "阿塞拜疆(Azerbaijan)"},
//   {"key": "BB", "value": "巴巴多斯(Barbados)"},
//   {"key": "BD", "value": "孟加拉国(Bangladesh)"},
//   {"key": "BE", "value": "比利时(Belgium)"},
//   {"key": "BF", "value": "布基纳法索(Burkina-faso)"},
//   {"key": "BG", "value": "保加利亚(Bulgaria)"},
//   {"key": "BH", "value": "巴林(Bahrain)"},
//   {"key": "BI", "value": "布隆迪(Burundi)"},
//   {"key": "BJ", "value": "贝宁(Benin)"},
//   {"key": "BL", "value": "巴勒斯坦(Palestine)"},
//   {"key": "BM", "value": "百慕大群岛(Bermuda Is.)"},
//   {"key": "BN", "value": "文莱(Brunei)"},
//   {"key": "BO", "value": "玻利维亚(Bolivia)"},
//   {"key": "BR", "value": "巴西(Brazil)"},
//   {"key": "BS", "value": "巴哈马(Bahamas)"},
//   {"key": "BW", "value": "博茨瓦纳(Botswana)"},
//   {"key": "BY", "value": "白俄罗斯(Belarus)"},
//   {"key": "BZ", "value": "伯利兹(Belize)"},
//   {"key": "CA", "value": "加拿大(Canada)"},
//   {"key": "CF", "value": "中非共和国(Central African Republic)"},
//   {"key": "CG", "value": "刚果(Congo)"},
//   {"key": "CH", "value": "瑞士(Switzerland)"},
//   {"key": "CK", "value": "库克群岛(Cook Is.)"},
//   {"key": "CL", "value": "智利(Chile)"},
//   {"key": "CM", "value": "喀麦隆(Cameroon)"},
//   {"key": "CO", "value": "哥伦比亚(Colombia)"},
//   {"key": "CR", "value": "哥斯达黎加(Costa Rica)"},
//   {"key": "CS", "value": "捷克(Czech)"},
//   {"key": "CU", "value": "古巴(Cuba)"},
//   {"key": "CY", "value": "塞浦路斯(Cyprus)"},
//   {"key": "CZ", "value": "捷克(Czech Republic)"},
//   {"key": "DE", "value": "德国(Germany)"},
//   {"key": "DJ", "value": "吉布提(Djibouti)"},
//   {"key": "DK", "value": "丹麦(Denmark)"},
//   {"key": "DO", "value": "多米尼加共和国(Dominica Rep.)"},
//   {"key": "DZ", "value": "阿尔及利亚(Algeria)"},
//   {"key": "EC", "value": "厄瓜多尔(Ecuador)"},
//   {"key": "EE", "value": "爱沙尼亚(Estonia)"},
//   {"key": "EG", "value": "埃及(Egypt)"},
//   {"key": "ES", "value": "西班牙(Spain)"},
//   {"key": "ET", "value": "埃塞俄比亚(Ethiopia)"},
//   {"key": "FI", "value": "芬兰(Finland)"},
//   {"key": "FJ", "value": "斐济(Fiji)"},
//   {"key": "FR", "value": "法国(France)"},
//   {"key": "GA", "value": "加蓬(Gabon)"},
//   {"key": "GB", "value": "英国(United Kiongdom)"},
//   {"key": "GD", "value": "格林纳达(Grenada)"},
//   {"key": "GE", "value": "格鲁吉亚(Georgia)"},
//   {"key": "GF", "value": "法属圭亚那(French Guiana)"},
//   {"key": "GH", "value": "加纳(Ghana)"},
//   {"key": "GI", "value": "直布罗陀(Gibraltar)"},
//   {"key": "GM", "value": "冈比亚(Gambia)"},
//   {"key": "GN", "value": "几内亚(Guinea)"},
//   {"key": "GR", "value": "希腊(Greece)"},
//   {"key": "GT", "value": "危地马拉(Guatemala)"},
//   {"key": "GU", "value": "关岛(Guam)"},
//   {"key": "GY", "value": "圭亚那(Guyana)"},
//   {"key": "HK", "value": "香港特别行政区(Hongkong)"},
//   {"key": "HN", "value": "洪都拉斯(Honduras)"},
//   {"key": "HT", "value": "海地(Haiti)"},
//   {"key": "HU", "value": "匈牙利(Hungary)"},
//   {"key": "ID", "value": "印度尼西亚(Indonesia)"},
//   {"key": "IE", "value": "爱尔兰(Ireland)"},
//   {"key": "IL", "value": "以色列(Israel)"},
//   {"key": "IN", "value": "印度(India)"},
//   {"key": "IQ", "value": "伊拉克(Iraq)"},
//   {"key": "IR", "value": "伊朗(Iran)"},
//   {"key": "IS", "value": "冰岛(Iceland)"},
//   {"key": "IT", "value": "意大利(Italy)"},
//   {"key": "JM", "value": "牙买加(Jamaica)"},
//   {"key": "JO", "value": "约旦(Jordan)"},
//   {"key": "JP", "value": "日本(Japan)"},
//   {"key": "KE", "value": "肯尼亚(Kenya)"},
//   {"key": "KG", "value": "吉尔吉斯坦(Kyrgyzstan)"},
//   {"key": "KH", "value": "柬埔寨(Kampuchea (Cambodia )"},
//   {"key": "KP", "value": "朝鲜(North Korea)"},
//   {"key": "KR", "value": "韩国(Korea)"},
//   {"key": "KT", "value": "科特迪瓦共和国(Republic of Ivory Coast)"},
//   {"key": "KW", "value": "科威特(Kuwait)"},
//   {"key": "KZ", "value": "哈萨克斯坦(Kazakstan)"},
//   {"key": "LA", "value": "老挝(Laos)"},
//   {"key": "LB", "value": "黎巴嫩(Lebanon)"},
//   {"key": "LC", "value": "圣卢西亚(St.Lucia)"},
//   {"key": "LI", "value": "列支敦士登(Liechtenstein)"},
//   {"key": "LK", "value": "斯里兰卡(Sri Lanka)"},
//   {"key": "LR", "value": "利比里亚(Liberia)"},
//   {"key": "LS", "value": "莱索托(Lesotho)"},
//   {"key": "LT", "value": "立陶宛(Lithuania)"},
//   {"key": "LU", "value": "卢森堡(Luxembourg)"},
//   {"key": "LV", "value": "拉脱维亚(Latvia)"},
//   {"key": "LY", "value": "利比亚(Libya)"},
//   {"key": "MA", "value": "摩洛哥(Morocco)"},
//   {"key": "MC", "value": "摩纳哥(Monaco)"},
//   {"key": "MD", "value": "摩尔多瓦(Moldova, Republic of)"},
//   {"key": "MG", "value": "马达加斯加(Madagascar)"},
//   {"key": "ML", "value": "马里(Mali)"},
//   {"key": "MM", "value": "缅甸(Burma)"},
//   {"key": "MN", "value": "蒙古(Mongolia)"},
//   {"key": "MO", "value": "澳门(Macao)"},
//   {"key": "MS", "value": "蒙特塞拉特岛(Montserrat Is)"},
//   {"key": "MT", "value": "马耳他(Malta)"},
//   {"key": "MU", "value": "毛里求斯(Mauritius)"},
//   {"key": "MV", "value": "马尔代夫(Maldives)"},
//   {"key": "MW", "value": "马拉维(Malawi)"},
//   {"key": "MX", "value": "墨西哥(Mexico)"},
//   {"key": "MY", "value": "马来西亚(Malaysia)"},
//   {"key": "MZ", "value": "莫桑比克(Mozambique)"},
//   {"key": "NA", "value": "纳米比亚(Namibia)"},
//   {"key": "NE", "value": "尼日尔(Niger)"},
//   {"key": "NG", "value": "尼日利亚(Nigeria)"},
//   {"key": "NI", "value": "尼加拉瓜(Nicaragua)"},
//   {"key": "NL", "value": "荷兰(Netherlands)"},
//   {"key": "NO", "value": "挪威(Norway)"},
//   {"key": "NP", "value": "尼泊尔(Nepal)"},
//   {"key": "NR", "value": "瑙鲁(Nauru)"},
//   {"key": "NZ", "value": "新西兰(New Zealand)"},
//   {"key": "OM", "value": "阿曼(Oman)"},
//   {"key": "PA", "value": "巴拿马(Panama)"},
//   {"key": "PE", "value": "秘鲁(Peru)"},
//   {"key": "PF", "value": "法属玻利尼西亚(French Polynesia)"},
//   {"key": "PG", "value": "巴布亚新几内亚(Papua New Cuinea)"},
//   {"key": "PH", "value": "菲律宾(Philippines)"},
//   {"key": "PK", "value": "巴基斯坦(Pakistan)"},
//   {"key": "PL", "value": "波兰(Poland)"},
//   {"key": "PR", "value": "波多黎各(Puerto Rico)"},
//   {"key": "PT", "value": "葡萄牙(Portugal)"},
//   {"key": "PY", "value": "巴拉圭(Paraguay)"},
//   {"key": "QA", "value": "卡塔尔(Qatar)"},
//   {"key": "RO", "value": "罗马尼亚(Romania)"},
//   {"key": "RU", "value": "俄罗斯(Russia)"},
//   {"key": "SA", "value": "沙特阿拉伯(Saudi Arabia)"},
//   {"key": "SB", "value": "所罗门群岛(Solomon Is)"},
//   {"key": "SC", "value": "塞舌尔(Seychelles)"},
//   {"key": "SD", "value": "苏丹(Sudan)"},
//   {"key": "SE", "value": "瑞典(Sweden)"},
//   {"key": "SG", "value": "新加坡(Singapore)"},
//   {"key": "SI", "value": "斯洛文尼亚(Slovenia)"},
//   {"key": "SK", "value": "斯洛伐克(Slovakia)"},
//   {"key": "SL", "value": "塞拉利昂(Sierra Leone)"},
//   {"key": "SM", "value": "圣马力诺(San Marino)"},
//   {"key": "SN", "value": "塞内加尔(Senegal)"},
//   {"key": "SO", "value": "索马里(Somali)"},
//   {"key": "SR", "value": "苏里南(Suriname)"},
//   {"key": "ST", "value": "圣多美和普林西比(Sao Tome and Principe)"},
//   {"key": "SV", "value": "萨尔瓦多(EI Salvador)"},
//   {"key": "SY", "value": "叙利亚(Syria)"},
//   {"key": "SZ", "value": "斯威士兰(Swaziland)"},
//   {"key": "TD", "value": "乍得(Chad)"},
//   {"key": "TG", "value": "多哥(Togo)"},
//   {"key": "TH", "value": "泰国(Thailand)"},
//   {"key": "TJ", "value": "塔吉克斯坦(Tajikstan)"},
//   {"key": "TM", "value": "土库曼斯坦(Turkmenistan)"},
//   {"key": "TN", "value": "突尼斯(Tunisia)"},
//   {"key": "TO", "value": "汤加(Tonga)"},
//   {"key": "TR", "value": "土耳其(Turkey)"},
//   {"key": "TT", "value": "特立尼达和多巴哥(Trinidad and Tobago)"},
//   {"key": "TW", "value": "台湾省(Taiwan)"},
//   {"key": "TZ", "value": "坦桑尼亚(Tanzania)"},
//   {"key": "UA", "value": "乌克兰(Ukraine)"},
//   {"key": "UG", "value": "乌干达(Uganda)"},
//   {"key": "US", "value": "美国(United States of America)"},
//   {"key": "UY", "value": "乌拉圭(Uruguay)"},
//   {"key": "UZ", "value": "乌兹别克斯坦(Uzbekistan)"},
//   {"key": "VC", "value": "圣文森特岛(Saint Vincent)"},
//   {"key": "VE", "value": "委内瑞拉(Venezuela)"},
//   {"key": "VN", "value": "越南(Vietnam)"},
//   {"key": "YE", "value": "也门(Yemen)"},
//   {"key": "YU", "value": "南斯拉夫(Yugoslavia)"},
//   {"key": "ZA", "value": "南非(South Africa)"},
//   {"key": "ZM", "value": "赞比亚(Zambia)"},
//   {"key": "ZR", "value": "扎伊尔(Zaire)"},
//   {"key": "ZW", "value": "津巴布韦(Zimbabw}e)"}
// ];
//
// var PHONE_MAP = [{"key":"86","value":"中国(China)"},{"key":"93","value":"阿富汗(Afghanistan)"},{"key":"355","value":"阿尔巴尼亚(Albania)"},{"key":"213","value":"阿尔及利亚(Algeria)"},{"key":"684","value":"萨摩亚(American Samoa)"},{"key":"376","value":"安道尔共和国(Andorra)"},{"key":"244","value":"安哥拉(Angola)"},{"key":"1264","value":"安圭拉岛(Anguilla)"},{"key":"672","value":"南极洲(Antarctica)"},{"key":"1268","value":"安提瓜和巴布达(Antigua and Barbuda)"},{"key":"54","value":"阿根廷(Argentina)"},{"key":"374","value":"亚美尼亚(Armenia)"},{"key":"297","value":"阿鲁巴(Aruba)"},{"key":"61","value":"澳大利亚(Australia)"},{"key":"43","value":"奥地利(Austria)"},{"key":"994","value":"阿塞拜疆(Azerbaijan)"},{"key":"1242","value":"巴哈马(Bahamas)"},{"key":"973","value":"巴林(Bahrain)"},{"key":"880","value":"孟加拉国(Bangladesh)"},{"key":"1246","value":"巴巴多斯(Barbados)"},{"key":"375","value":"白俄罗斯(Belarus)"},{"key":"32","value":"比利时(Belgium)"},{"key":"501","value":"伯利兹城(Belize)"},{"key":"229","value":"贝宁(Benin)"},{"key":"1441","value":"百慕大(Bermuda)"},{"key":"975","value":"不丹(Bhutan)"},{"key":"591","value":"玻利维亚(Bolivia)"},{"key":"387","value":"波斯尼亚和黑塞哥维那(Bosnia and Herzegovina)"},{"key":"267","value":"博茨瓦纳(Botswana)"},{"key":"55","value":"巴西(Brazil)"},{"key":"246","value":"英属印度洋领地(British Indian Ocean Territory)"},{"key":"673","value":"文莱达鲁萨兰国(Brunei Darussalam)"},{"key":"359","value":"保加利亚(Bulgaria)"},{"key":"226","value":"布基纳法索(Burkina Faso)"},{"key":"257","value":"布隆迪(Burundi)"},{"key":"855","value":"柬埔寨(Cambodia)"},{"key":"237","value":"喀麦隆(Cameroon)"},{"key":"1","value":"加拿大(Canada)"},{"key":"238","value":"佛得角(Cape Verde)"},{"key":"1345","value":"开曼群岛(Cayman Islands)"},{"key":"236","value":"中非共和国(Central African Republic)"},{"key":"235","value":"乍得(Chad)"},{"key":"56","value":"智利(Chile)"},{"key":"61","value":"圣延岛(Christmas Island)"},{"key":"61","value":"科科斯群岛(Cocos (Keeling) Islands)"},{"key":"57","value":"哥伦比亚(Colombia)"},{"key":"269","value":"科摩罗(Comoros)"},{"key":"242","value":"刚果(Congo)"},{"key":"243","value":"刚果民主共和国(Congo, The Democratic Republic Of The)"},{"key":"682","value":"库克群岛(Cook Islands)"},{"key":"506","value":"哥斯达黎加(Costa Rica)"},{"key":"225","value":"Cote D'Ivoire(Cote D'Ivoire)"},{"key":"385","value":"克罗地亚(Croatia (local name: Hrvatska))"},{"key":"53","value":"古巴(Cuba)"},{"key":"357","value":"塞浦路斯(Cyprus)"},{"key":"420","value":"捷克(Czech Republic)"},{"key":"45","value":"丹麦(Denmark)"},{"key":"253","value":"吉布提(Djibouti)"},{"key":"1767","value":"多米尼克国(Dominica)"},{"key":"1849","value":"多米尼加共和国(Dominican Republic)"},{"key":"670","value":"东帝汶(East Timor)"},{"key":"593","value":"厄瓜多尔(Ecuador)"},{"key":"20","value":"埃及(Egypt)"},{"key":"503","value":"萨尔瓦多(El Salvador)"},{"key":"240","value":"赤道几内亚(Equatorial Guinea)"},{"key":"291","value":"厄立特里亚国(Eritrea)"},{"key":"372","value":"爱沙尼亚(Estonia)"},{"key":"251","value":"埃塞俄比亚(Ethiopia)"},{"key":"500","value":"福克兰群岛(Falkland Islands (Malvinas))"},{"key":"298","value":"法罗群岛(Faroe Islands)"},{"key":"679","value":"斐济(Fiji)"},{"key":"358","value":"芬兰(Finland)"},{"key":"33","value":"法国(France)"},{"key":"33","value":"法国大都会(France Metropolitan)"},{"key":"594","value":"法属圭亚那(French Guiana)"},{"key":"689","value":"法属玻里尼西亚(French Polynesia)"},{"key":"241","value":"加蓬(Gabon)"},{"key":"220","value":" 冈比亚(Gambia)"},{"key":"995","value":"格鲁吉亚(Georgia)"},{"key":"49","value":"德国(Germany)"},{"key":"233","value":"加纳(Ghana)"},{"key":"350","value":"直布罗陀(Gibraltar)"},{"key":"30","value":"希腊(Greece)"},{"key":"45","value":"格陵兰(Greenland)"},{"key":"1473","value":"格林纳达(Grenada)"},{"key":"590","value":"瓜德罗普岛(Guadeloupe)"},{"key":"1671","value":"关岛(Guam)"},{"key":"502","value":"危地马拉(Guatemala)"},{"key":"224","value":"几内亚(Guinea)"},{"key":"245","value":"几内亚比绍(Guinea-Bissau)"},{"key":"592","value":"圭亚那(Guyana)"},{"key":"509","value":"海地(Haiti)"},{"key":"504","value":"洪都拉斯(Honduras)"},{"key":"852","value":"香港(Hong Kong)"},{"key":"36","value":"匈牙利(Hungary)"},{"key":"354","value":"冰岛(Iceland)"},{"key":"91","value":"印度(India)"},{"key":"62","value":"印度尼西亚(Indonesia)"},{"key":"98","value":"伊朗（伊斯兰共和国）(Iran (Islamic Republic of))"},{"key":"964","value":"伊拉克(Iraq)"},{"key":"353","value":"爱尔兰(Ireland)"},{"key":"972","value":"以色列(Israel)"},{"key":"39","value":"意大利(Italy)"},{"key":"1876","value":"牙买加(Jamaica)"},{"key":"81","value":"日本(Japan)"},{"key":"962","value":"约旦(Jordan)"},{"key":"7","value":"哈萨克(Kazakhstan)"},{"key":"254","value":"肯尼亚(Kenya)"},{"key":"965","value":"科威特(Kuwait)"},{"key":"996","value":"吉尔吉斯(Kyrgyzstan)"},{"key":"371","value":"拉脱维亚(Latvia)"},{"key":"961","value":"黎巴嫩(Lebanon)"},{"key":"266","value":"莱索托(Lesotho)"},{"key":"231","value":"利比里亚(Liberia)"},{"key":"218","value":"利比亚(Libyan Arab Jamahiriya)"},{"key":"423","value":"列支敦士登(Liechtenstein)"},{"key":"370","value":"立陶宛(Lithuania)"},{"key":"352","value":"卢森堡(Luxembourg)"},{"key":"853","value":"澳门地区(Macau)"},{"key":"261","value":"马达加斯加(Madagascar)"},{"key":"265","value":"马拉维(Malawi)"},{"key":"60","value":"马来西亚(Malaysia)"},{"key":"960","value":"马尔代夫(Maldives)"},{"key":"223","value":"马里(Mali)"},{"key":"356","value":"马尔他(Malta)"},{"key":"692","value":"马绍尔群岛(Marshall Islands)"},{"key":"596","value":"马提尼克岛(Martinique)"},{"key":"222","value":"毛里塔尼亚(Mauritania)"},{"key":"230","value":"毛里求斯(Mauritius)"},{"key":"262","value":"马约特(Mayotte)"},{"key":"52","value":"墨西哥(Mexico)"},{"key":"691","value":"密克罗尼西亚(Micronesia)"},{"key":"373","value":"摩尔多瓦(Moldova)"},{"key":"377","value":"摩纳哥(Monaco)"},{"key":"976","value":"外蒙古(Mongolia)"},{"key":"382","value":"黑山共和国(Montenegro)"},{"key":"1664","value":"蒙特塞拉特(Montserrat)"},{"key":"212","value":"摩洛哥(Morocco)"},{"key":"258","value":"莫桑比克(Mozambique)"},{"key":"95","value":"缅甸(Myanmar)"},{"key":"264","value":"那米比亚(Namibia)"},{"key":"674","value":"瑙鲁(Nauru)"},{"key":"977","value":"尼泊尔(Nepal)"},{"key":"31","value":"荷兰(Netherlands)"},{"key":"599","value":"荷兰安的列斯群岛(Netherlands Antilles)"},{"key":"687","value":"新喀里多尼亚(New Caledonia)"},{"key":"64","value":"新西兰(New Zealand)"},{"key":"505","value":"尼加拉瓜(Nicaragua)"},{"key":"227","value":"尼日尔(Niger)"},{"key":"234","value":"尼日利亚(Nigeria)"},{"key":"6723","value":"诺福克岛(Norfolk Island)"},{"key":"850","value":"朝鲜(North Korea)"},{"key":"1670","value":"北马里亚纳群岛(Northern Mariana Islands)"},{"key":"47","value":"挪威(Norway)"},{"key":"968","value":"阿曼(Oman)"},{"key":"92","value":"巴基斯坦(Pakistan)"},{"key":"680","value":"帛琉(Palau)"},{"key":"970","value":"巴勒斯坦(Palestine)"},{"key":"507","value":"巴拿马(Panama)"},{"key":"675","value":"巴布亚新几内亚(Papua New Guinea)"},{"key":"595","value":"巴拉圭(Paraguay)"},{"key":"51","value":"秘鲁(Peru)"},{"key":"63","value":"菲律宾共和国(Philippines)"},{"key":"64","value":"皮特凯恩岛(Pitcairn)"},{"key":"48","value":"波兰(Poland)"},{"key":"351","value":"葡萄牙(Portugal)"},{"key":"1787","value":"波多黎各(Puerto Rico)"},{"key":"974","value":"卡塔尔(Qatar)"},{"key":"262","value":"留尼汪岛(Reunion)"},{"key":"40","value":"罗马尼亚(Romania)"},{"key":"7","value":"俄罗斯联邦(Russian Federation)"},{"key":"250","value":"卢旺达(Rwanda)"},{"key":"685","value":"美属萨摩亚(Samoa)"},{"key":"378","value":"圣马力诺共和国(San Marino)"},{"key":"966","value":"沙特阿拉伯(Saudi Arabia)"},{"key":"221","value":"塞内加尔(Senegal)"},{"key":"381","value":"塞尔维亚共和国(Serbia)"},{"key":"248","value":"塞舌尔(Seychelles)"},{"key":"232","value":"塞拉利昂(Sierra Leone)"},{"key":"65","value":"新加坡(Singapore)"},{"key":"421","value":"斯洛伐克（斯洛伐克人的共和国）(Slovakia (Slovak Republic))"},{"key":"386","value":"斯洛文尼亚(Slovenia)"},{"key":"677","value":"索罗门群岛(Solomon Islands)"},{"key":"252","value":"索马里(Somalia)"},{"key":"27","value":"南非(South Africa)"},{"key":"82","value":"韩国(South Korea)"},{"key":"34","value":"西班牙(Spain)"},{"key":"94","value":"斯里兰卡(Sri Lanka)"},{"key":"249","value":"苏丹(Sudan)"},{"key":"597","value":"苏里南(Suriname)"},{"key":"268","value":"斯威士兰(Swaziland)"},{"key":"46","value":"瑞典(Sweden)"},{"key":"41","value":"瑞士(Switzerland)"},{"key":"963","value":"叙利亚(Syrian Arab Republic)"},{"key":"886","value":"台湾地区(Taiwan)"},{"key":"992","value":"塔吉克(Tajikistan)"},{"key":"255","value":"坦桑尼亚(Tanzania)"},{"key":"66","value":"泰国(Thailand)"},{"key":"228","value":"多哥(Togo)"},{"key":"690","value":"托克劳(Tokelau)"},{"key":"676","value":"汤加(Tonga)"},{"key":"1868","value":"特立尼达和多巴哥(Trinidad and Tobago)"},{"key":"216","value":"突尼斯(Tunisia)"},{"key":"90","value":"土耳其(Turkey)"},{"key":"993","value":"土库曼(Turkmenistan)"},{"key":"1809","value":"土克斯及开科斯群岛(Turks and Caicos Islands)"},{"key":"688","value":"图瓦卢(Tuvalu)"},{"key":"256","value":"乌干达(Uganda)"},{"key":"380","value":"乌克兰(Ukraine)"},{"key":"971","value":"阿拉伯联合酋长国(United Arab Emirates)"},{"key":"44","value":"英国(United Kingdom)"},{"key":"1","value":"美国(United States)"},{"key":"598","value":"乌拉圭(Uruguay)"},{"key":"998","value":"乌兹别克斯坦(Uzbekistan)"},{"key":"678","value":"瓦努阿图(Vanuatu)"},{"key":"39","value":"梵蒂冈(罗马教廷)(Vatican City State (Holy See))"},{"key":"58","value":"委内瑞拉(Venezuela)"},{"key":"84","value":"越南(Vietnam)"},{"key":"1284","value":"维尔京群岛(英国)(Virgin Islands (British))"},{"key":"1340","value":"维尔京群岛(美国)(Virgin Islands (U.S.))"},{"key":"681","value":"沃利斯和富图纳群岛(Wallis And Futuna Islands)"},{"key":"685","value":"西撒哈拉(Western Sahara)"},{"key":"967","value":"也门(Yemen)"},{"key":"381","value":"南斯拉夫(Yugoslavia)"},{"key":"260","value":"赞比亚(Zambia)"},{"key":"263","value":"津巴布韦(Zimbabwe)"},{"key":"7","value":"阿布哈兹(the Republic of Abkhazia)"},{"key":"7","value":"南奥赛梯(the Republic of South Ossetia)"},{"key":"44","value":"泽西岛(Bailiwick of Jersey)"},{"key":"856","value":"老挝(Lao People's Democratic Republic)"},{"key":"389","value":"马其顿(The Republic of Macedonia)"},{"key":"1869","value":"圣基茨和尼维斯(The Federation of Saint Kitts and Nevis)"},{"key":"1758","value":"圣卢西亚岛(Santa Luzia Island)"},{"key":"1784","value":"圣文森特和格林纳丁斯(Saint Vincent and the Grenadines)"},{"key":"239","value":"圣多美和普林西比(Sao Tome and Principe)"},{"key":"211","value":"南苏丹共和国(The Republic of South Sudan)"}]


var COUNTRY_MAP = [{"areaCode":"86","langKey":"CN","value":"中国(China)"},{"areaCode":"376","langKey":"AD","value":"安道尔共和国(Andorra)"},{"areaCode":"971","langKey":"AE","value":"阿拉伯联合酋长国(United Arab Emirates)"},{"areaCode":"93","langKey":"AF","value":"阿富汗(Afghanistan)"},{"areaCode":"1268","langKey":"AG","value":"安提瓜和巴布达(Antigua and Barbuda)"},{"areaCode":"1264","langKey":"AI","value":"安圭拉岛(Anguilla)"},{"areaCode":"355","langKey":"AL","value":"阿尔巴尼亚(Albania)"},{"areaCode":"374","langKey":"AM","value":"亚美尼亚(Armenia)"},{"areaCode":"244","langKey":"AO","value":"安哥拉(Angola)"},{"areaCode":"54","langKey":"AR","value":"阿根廷(Argentina)"},{"areaCode":"43","langKey":"AT","value":"奥地利(Austria)"},{"areaCode":"61","langKey":"AU","value":"澳大利亚(Australia)"},{"areaCode":"994","langKey":"AZ","value":"阿塞拜疆(Azerbaijan)"},{"areaCode":"1246","langKey":"BB","value":"巴巴多斯(Barbados)"},{"areaCode":"880","langKey":"BD","value":"孟加拉国(Bangladesh)"},{"areaCode":"32","langKey":"BE","value":"比利时(Belgium)"},{"areaCode":"359","langKey":"BG","value":"保加利亚(Bulgaria)"},{"areaCode":"973","langKey":"BH","value":"巴林(Bahrain)"},{"areaCode":"257","langKey":"BI","value":"布隆迪(Burundi)"},{"areaCode":"229","langKey":"BJ","value":"贝宁(Benin)"},{"areaCode":"970","langKey":"BL","value":"巴勒斯坦(Palestine)"},{"areaCode":"591","langKey":"BO","value":"玻利维亚(Bolivia)"},{"areaCode":"55","langKey":"BR","value":"巴西(Brazil)"},{"areaCode":"1242","langKey":"BS","value":"巴哈马(Bahamas)"},{"areaCode":"267","langKey":"BW","value":"博茨瓦纳(Botswana)"},{"areaCode":"375","langKey":"BY","value":"白俄罗斯(Belarus)"},{"areaCode":"1","langKey":"CA","value":"加拿大(Canada)"},{"areaCode":"236","langKey":"CF","value":"中非共和国(Central African Republic)"},{"areaCode":"242","langKey":"CG","value":"刚果(Congo)"},{"areaCode":"41","langKey":"CH","value":"瑞士(Switzerland)"},{"areaCode":"56","langKey":"CL","value":"智利(Chile)"},{"areaCode":"237","langKey":"CM","value":"喀麦隆(Cameroon)"},{"areaCode":"57","langKey":"CO","value":"哥伦比亚(Colombia)"},{"areaCode":"506","langKey":"CR","value":"哥斯达黎加(Costa Rica)"},{"areaCode":"53","langKey":"CU","value":"古巴(Cuba)"},{"areaCode":"357","langKey":"CY","value":"塞浦路斯(Cyprus)"},{"areaCode":"420","langKey":"CZ","value":"捷克(Czech Republic)"},{"areaCode":"49","langKey":"DE","value":"德国(Germany)"},{"areaCode":"253","langKey":"DJ","value":"吉布提(Djibouti)"},{"areaCode":"45","langKey":"DK","value":"丹麦(Denmark)"},{"areaCode":"213","langKey":"DZ","value":"阿尔及利亚(Algeria)"},{"areaCode":"593","langKey":"EC","value":"厄瓜多尔(Ecuador)"},{"areaCode":"372","langKey":"EE","value":"爱沙尼亚(Estonia)"},{"areaCode":"20","langKey":"EG","value":"埃及(Egypt)"},{"areaCode":"34","langKey":"ES","value":"西班牙(Spain)"},{"areaCode":"251","langKey":"ET","value":"埃塞俄比亚(Ethiopia)"},{"areaCode":"358","langKey":"FI","value":"芬兰(Finland)"},{"areaCode":"679","langKey":"FJ","value":"斐济(Fiji)"},{"areaCode":"33","langKey":"FR","value":"法国(France)"},{"areaCode":"241","langKey":"GA","value":"加蓬(Gabon)"},{"areaCode":"1473","langKey":"GD","value":"格林纳达(Grenada)"},{"areaCode":"995","langKey":"GE","value":"格鲁吉亚(Georgia)"},{"areaCode":"594","langKey":"GF","value":"法属圭亚那(French Guiana)"},{"areaCode":"233","langKey":"GH","value":"加纳(Ghana)"},{"areaCode":"350","langKey":"GI","value":"直布罗陀(Gibraltar)"},{"areaCode":"224","langKey":"GN","value":"几内亚(Guinea)"},{"areaCode":"30","langKey":"GR","value":"希腊(Greece)"},{"areaCode":"502","langKey":"GT","value":"危地马拉(Guatemala)"},{"areaCode":"1671","langKey":"GU","value":"关岛(Guam)"},{"areaCode":"592","langKey":"GY","value":"圭亚那(Guyana)"},{"areaCode":"504","langKey":"HN","value":"洪都拉斯(Honduras)"},{"areaCode":"509","langKey":"HT","value":"海地(Haiti)"},{"areaCode":"36","langKey":"HU","value":"匈牙利(Hungary)"},{"areaCode":"62","langKey":"ID","value":"印度尼西亚(Indonesia)"},{"areaCode":"353","langKey":"IE","value":"爱尔兰(Ireland)"},{"areaCode":"972","langKey":"IL","value":"以色列(Israel)"},{"areaCode":"91","langKey":"IN","value":"印度(India)"},{"areaCode":"964","langKey":"IQ","value":"伊拉克(Iraq)"},{"areaCode":"354","langKey":"IS","value":"冰岛(Iceland)"},{"areaCode":"39","langKey":"IT","value":"意大利(Italy)"},{"areaCode":"1876","langKey":"JM","value":"牙买加(Jamaica)"},{"areaCode":"962","langKey":"JO","value":"约旦(Jordan)"},{"areaCode":"81","langKey":"JP","value":"日本(Japan)"},{"areaCode":"254","langKey":"KE","value":"肯尼亚(Kenya)"},{"areaCode":"850","langKey":"KP","value":"朝鲜(North Korea)"},{"areaCode":"965","langKey":"KW","value":"科威特(Kuwait)"},{"areaCode":"961","langKey":"LB","value":"黎巴嫩(Lebanon)"},{"areaCode":"423","langKey":"LI","value":"列支敦士登(Liechtenstein)"},{"areaCode":"94","langKey":"LK","value":"斯里兰卡(Sri Lanka)"},{"areaCode":"231","langKey":"LR","value":"利比里亚(Liberia)"},{"areaCode":"266","langKey":"LS","value":"莱索托(Lesotho)"},{"areaCode":"370","langKey":"LT","value":"立陶宛(Lithuania)"},{"areaCode":"352","langKey":"LU","value":"卢森堡(Luxembourg)"},{"areaCode":"371","langKey":"LV","value":"拉脱维亚(Latvia)"},{"areaCode":"212","langKey":"MA","value":"摩洛哥(Morocco)"},{"areaCode":"377","langKey":"MC","value":"摩纳哥(Monaco)"},{"areaCode":"261","langKey":"MG","value":"马达加斯加(Madagascar)"},{"areaCode":"223","langKey":"ML","value":"马里(Mali)"},{"areaCode":"230","langKey":"MU","value":"毛里求斯(Mauritius)"},{"areaCode":"960","langKey":"MV","value":"马尔代夫(Maldives)"},{"areaCode":"265","langKey":"MW","value":"马拉维(Malawi)"},{"areaCode":"52","langKey":"MX","value":"墨西哥(Mexico)"},{"areaCode":"60","langKey":"MY","value":"马来西亚(Malaysia)"},{"areaCode":"258","langKey":"MZ","value":"莫桑比克(Mozambique)"},{"areaCode":"227","langKey":"NE","value":"尼日尔(Niger)"},{"areaCode":"234","langKey":"NG","value":"尼日利亚(Nigeria)"},{"areaCode":"505","langKey":"NI","value":"尼加拉瓜(Nicaragua)"},{"areaCode":"31","langKey":"NL","value":"荷兰(Netherlands)"},{"areaCode":"47","langKey":"NO","value":"挪威(Norway)"},{"areaCode":"977","langKey":"NP","value":"尼泊尔(Nepal)"},{"areaCode":"674","langKey":"NR","value":"瑙鲁(Nauru)"},{"areaCode":"64","langKey":"NZ","value":"新西兰(New Zealand)"},{"areaCode":"968","langKey":"OM","value":"阿曼(Oman)"},{"areaCode":"507","langKey":"PA","value":"巴拿马(Panama)"},{"areaCode":"51","langKey":"PE","value":"秘鲁(Peru)"},{"areaCode":"92","langKey":"PK","value":"巴基斯坦(Pakistan)"},{"areaCode":"48","langKey":"PL","value":"波兰(Poland)"},{"areaCode":"1787","langKey":"PR","value":"波多黎各(Puerto Rico)"},{"areaCode":"351","langKey":"PT","value":"葡萄牙(Portugal)"},{"areaCode":"595","langKey":"PY","value":"巴拉圭(Paraguay)"},{"areaCode":"974","langKey":"QA","value":"卡塔尔(Qatar)"},{"areaCode":"40","langKey":"RO","value":"罗马尼亚(Romania)"},{"areaCode":"966","langKey":"SA","value":"沙特阿拉伯(Saudi Arabia)"},{"areaCode":"248","langKey":"SC","value":"塞舌尔(Seychelles)"},{"areaCode":"249","langKey":"SD","value":"苏丹(Sudan)"},{"areaCode":"46","langKey":"SE","value":"瑞典(Sweden)"},{"areaCode":"65","langKey":"SG","value":"新加坡(Singapore)"},{"areaCode":"386","langKey":"SI","value":"斯洛文尼亚(Slovenia)"},{"areaCode":"232","langKey":"SL","value":"塞拉利昂(Sierra Leone)"},{"areaCode":"221","langKey":"SN","value":"塞内加尔(Senegal)"},{"areaCode":"597","langKey":"SR","value":"苏里南(Suriname)"},{"areaCode":"239","langKey":"ST","value":"圣多美和普林西比(Sao Tome and Principe)"},{"areaCode":"268","langKey":"SZ","value":"斯威士兰(Swaziland)"},{"areaCode":"235","langKey":"TD","value":"乍得(Chad)"},{"areaCode":"228","langKey":"TG","value":"多哥(Togo)"},{"areaCode":"66","langKey":"TH","value":"泰国(Thailand)"},{"areaCode":"216","langKey":"TN","value":"突尼斯(Tunisia)"},{"areaCode":"676","langKey":"TO","value":"汤加(Tonga)"},{"areaCode":"90","langKey":"TR","value":"土耳其(Turkey)"},{"areaCode":"1868","langKey":"TT","value":"特立尼达和多巴哥(Trinidad and Tobago)"},{"areaCode":"255","langKey":"TZ","value":"坦桑尼亚(Tanzania)"},{"areaCode":"380","langKey":"UA","value":"乌克兰(Ukraine)"},{"areaCode":"256","langKey":"UG","value":"乌干达(Uganda)"},{"areaCode":"598","langKey":"UY","value":"乌拉圭(Uruguay)"},{"areaCode":"998","langKey":"UZ","value":"乌兹别克斯坦(Uzbekistan)"},{"areaCode":"58","langKey":"VE","value":"委内瑞拉(Venezuela)"},{"areaCode":"84","langKey":"VN","value":"越南(Vietnam)"},{"areaCode":"967","langKey":"YE","value":"也门(Yemen)"},{"areaCode":"381","langKey":"YU","value":"南斯拉夫(Yugoslavia)"},{"areaCode":"27","langKey":"ZA","value":"南非(South Africa)"},{"areaCode":"260","langKey":"ZM","value":"赞比亚(Zambia)"}]