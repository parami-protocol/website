function logout() {
  console.log('logout')
  Cookies.remove('token');
  Cookies.remove('user');
  Cookies.remove('invite_code');
  window.location.href = HOME_PAGE;
}

function alive(cb) {
  //判断是否已经登录
  var token = Cookies.get('token');
  $.ajax({
    url: ACCOUNT_URL,
    headers: {'Authorization': 'Bearer ' + token}
  }).done(function (result, status, xhr) {
    if (result && result.login) {
      Cookies.set('user', result.login);
    }
    cb(result);
  });
}

function getUserInfo() {
  var user = Cookies.get('user');
  if (!user || user == 'undefined') {
    window.location.href = LOGIN_PAGE;
  }
  return user;
}

function getToken() {
  var token = Cookies.get('token');
  // if (!token || token == 'undefined') {
  //   window.location.href = LOGIN_PAGE;
  // }
  return token;
}

function getInviteCode(){
  var code = Cookies.get('invite_code')
  if(code == 'undefined' || code == null){
    return "";
  }
  return code;
}


function switchLang(type) {
  //type: 1 刷新页面， 2 点击
  var lang, urllang, newurl;
  var url = $.url(window.location.href);
  var refreshContent = true;
  urllang = url.param('lang');
  if (type == 1) {
    if (urllang && (urllang == 'zh' || urllang == 'en')) {
      //如果刷新页面，url带lang参数，并且是zh或en，则根据url参数进行国际化
      lang = urllang;
    } else {
      urllang = Cookies.get("lang");
      if(urllang){
        lang = urllang;
      }else{
      //如果刷新页面，url不带lang参数，或者不是zh且不是en，则默认为en
        lang = 'en';
      }
    }
    var curLang = $('.lang-btn>span').html() == '中文' ? 'en' : 'zh';
    if (lang == curLang) {
      refreshContent = false;
    }
  } else {
    if (urllang && (urllang == 'zh' || urllang == 'en')) {
      //如果切换语言，url带lang参数，并且是zh或en，则根据url参数的对立语言进行国际化
      lang = urllang == 'zh' ? 'en' : 'zh';
      newurl = window.location.href.replace('lang=' + urllang, 'lang=' + lang);
      window.history.pushState({path: newurl}, '', newurl);
    } else {
      console.log($('.lang-btn>span').html())
      //如果切换语言，url不带lang参数，或者不是zh且不是en，则根据页面语言取反进行国际化
      lang = $('.lang-btn>span').html() == '中文' ? 'zh' : 'en';
    }
  }
  Cookies.set("lang",lang);
  $.i18n().locale = lang;
  if (refreshContent) {
    $('body').i18n();
  }
}

function checkEmail(val) {
  var reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!reg.test(val)) {
    return 'email is wrong'
  } else {
    return ''
  }
}

function checkPhone(val) {
  var reg = /\d{6,16}/ig
  if (!reg.test(val)) {
    return 'phone is wrong'
  } else {
    return ''
  }
}

function checkPass(el1, el2) {
  var reg = /\w{6,16}/i
  var errMsg1 = 'password must more than 6 & less than 16'
  var errMsg2 = 'confirm password must be the same with password'

  var password = el1
  var password2 = el2

  if (!reg.test(password.val())) {
    password.siblings('.with-errors').text(errMsg1)
  } else {
    password.siblings('.with-errors').text('')
  }

  // console.log('password2.val(): ', password2.val())
  // console.log('password.val(): ', password.val())

  if (password2.val() !== password.val() || !reg.test(password2.val())) {
    password2.siblings('.with-errors').text(errMsg2)
  } else {
    password2.siblings('.with-errors').text('')
  }
}

function checkVerfyCode(val) {
  var reg = /\w{6}/ig
  if (!reg.test(val)) {
    return 'SMS code is wrong'
  } else {
    return ''
  }
}

function countDown(opt) {
  console.log(opt)
  var n = opt.duration
  var el = opt.el

  setTimeout(function () {
    clearInterval(timer)
    opt.cb && opt.cb()
  }, n * 1000)

  n--
  el.text(n + ' s ')
  var timer = setInterval(function () {
    n--
    console.log(n)
    el.text(n + ' s ')
  }, 1000)

}

function sendEmail(opt) {
  var pram = opt.pram
  if (pram.langKey) {
    pram.lanKey = pram.langKey
  }
  $.ajax({
    url: opt.url,// REGISTER_EMAIL,
    method: 'GET',
    data: pram,
    contentType: 'application/json'
  }).done(function (result, status, xhr) {
    // console.log('result: ', result)
    // console.log('status: ', status)
    // console.log('status: ', status)
    if(!result.success){
      alert(result.message)
    }

  }).fail(function (xhr, status, error) {
    $('.alert').html(xhr.responseText);
    $('.alert').removeClass('hidden');
  });
}

function sendSms(opt) {
  var pram = opt.pram
  // var pram = $('#reg_phone').serializeJSON()
  pram.lanKey = pram.langKey
  $.ajax({
    url: opt.url,
    method: 'GET',
    data: pram,
    contentType: 'application/json'
  }).done(function (result, status, xhr) {
    // console.log('result: ', result)
    // console.log('status: ', status)
    // console.log('status: ', status)
    if(!result.success){
      alert(result.message)
    }

  }).fail(function (xhr, status, error) {
    $('.alert').html(xhr.responseText);
    $('.alert').removeClass('hidden');
  });
}

function sendKycSms(opt) {
  var pram = opt.pram;
  var token = Cookies.get('token');
  // var pram = $('#reg_phone').serializeJSON()
  pram.lanKey = pram.langKey
  $.ajax({
    url: opt.url+"?areaCode="+pram.areaCode+"&phoneNum="+pram.phoneNum,
    method: 'POST',
    contentType: 'text',
    headers: {'Authorization': 'Bearer ' + token}
  }).done(function (result, status, xhr) {
    // console.log('result: ', result)
    // console.log('status: ', status)
    // console.log('status: ', status)
    if(!result.success){
      alert(result.message)
    }

  }).fail(function (xhr, status, error) {
    $('.alert').html(xhr.responseText);
    $('.alert').removeClass('hidden');
  });
}

function showErr(el, err) {
  if (err) {
    el.siblings('.with-errors').text(err)
  } else {
    el.siblings('.with-errors').text('')
  }
}

function getUrlParams(name, url) {
  var m,
    reg,
    tmp;
  url = (url || window.location.href).split('#');
  if (name.indexOf('#') != -1) {
    tmp = url.length < 2 ? '' : url[1];
  } else {
    tmp = url[0];
  }
  m = tmp.match(new RegExp('(|[?&#])' + name.replace('#', '') + '=([^#&?]*)(\\s||$)', 'gi'));
  if (m) {
    return decodeURIComponent(m[0].split('=')[1]);
  } else {
    return '';
  }
}

function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

$(function () {
  $('.navbar-toggle').on('click', function () {
    var me = $(this)
    me.toggleClass('collapsed')
    $('#navbar').toggleClass('in')
  })
})

function getMobilePC() {
  if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return 'mobile'
  }
  else {
    return 'pc'
  }
}
