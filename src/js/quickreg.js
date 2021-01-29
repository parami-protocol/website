var sessionid;
var nc_token;
var sig;
function bindRegByPhone(){
	$('button[name=btn-reg]').on('click',function(e){

	var activeCode = $('input[name=activeCode]').val();
	if(activeCode == null || activeCode==""){
		alert("请先获取验证码");
		return;
	}
  if(isEmpty(sessionid)){
    alert("请先滑动验证");
    return;
  }
	var countryData = $("#phone").intlTelInput("getSelectedCountryData");
	var mobilePhoneAreaCode = countryData.dialCode;
	var mobilePhoneNumber =  $("#phone").intlTelInput("getNumber").replace("+"+mobilePhoneAreaCode,"");
	var nationality = countryData.iso2;
	var tracking = $('input[name=tracking]').val();
	console.log(countryData);
	var o ={
		"activeCode": activeCode,
		"mobilePhoneAreaCode": mobilePhoneAreaCode,
		"mobilePhoneNumber": mobilePhoneNumber,
		"nationality": nationality,
		"tracking": tracking
	}
	console.log(JSON.stringify(o));
	$.ajax({
      url: QUICK_REGISTER_URL_PHONE,
      method: 'POST',
      data: JSON.stringify(o),
      headers: {'captcha': 'sessionid=' + sessionid+";sig="+sig+";token="+nc_token+";scene=nc_register_h5" },
      contentType: 'application/json'
    }).done(function (result, status, xhr) {
      if (!result.success) {
        alert(result.message);
      } else {
        window.location.href = QUICK_REGISTER_SUCCESS+'?flag=success&code='+result.data.result;
      }
    }).fail(function (xhr, status, error) {
      $('.alert').html(xhr.responseText);
      $('.alert').removeClass('hidden');
    });
	})
}

function clickSendValid(){
		var telInput = $("#phone");
		if ($.trim(telInput.val())) {
		    if (!telInput.intlTelInput("isValidNumber")) {
		      telInput.addClass("error");
		      alert('手机号格式不对');
		      return;
		    }
        if(isEmpty(this.sessionid)){
           alert("请先滑动验证");
           return;
        }
		    var countryData = $("#phone").intlTelInput("getSelectedCountryData");
			  var mobilePhoneAreaCode = countryData.dialCode;
		  	var mobilePhoneNumber =  telInput.val();
		    var pram = {
		    	phoneNum: mobilePhoneNumber,
		    	areaCode: mobilePhoneAreaCode
		    }
		    var result = sendSms({
		      url: QUICK_REGISTER_PHONE,
		      pram: pram
		    })
		    if(result.success){
          $(".send_code_group").show();
          $(".nc-container").hide();
		    	$('.active_code').show();
		    	var me = $('#sendCode')
		    	var msg = me.text()
				    countDown({
				      el: me,
				      duration: 60,
				      cb: function () {
				        me.text(msg)
				        me.removeAttr("disabled");
				        me.toggleClass("count_down");
				      }
				    })
			}else{
				alert(result.message);
        nc.reset();
			}
	   }
}

$(document).ready(function(){
  	var inviteCode = getParam("i");
  	$('input[name=tracking]').val(inviteCode);
    $("#phone").attr("placeholder","请输入手机号");   
    bindRegByPhone();
    $('#recipient-name').bind('input propertychange',function(){
    	var inviteCode = $('#recipient-name').val();
    	if(!isEmpty(inviteCode)){
    		$('button[name=btn-reg]').removeAttr("disabled");
    	}else{
    		$('button[name=btn-reg]').attr("disabled","true");
    	}
    });
    $('.send_code_group').hide();
})


function sendSms(opt) {
  var pram = opt.pram
  pram.lanKey = pram.langKey
  var rt ;
  $.ajax({
    url: opt.url,
    method: 'GET',
    data: pram,
    async: false,
    headers: {'captcha': 'sessionid=' + sessionid+";sig="+sig+";token="+nc_token+";scene=nc_register_h5" },
    contentType: 'application/json'
  }).done(function (result, status, xhr) {
  	rt =  result;
  }).fail(function (xhr, status, error) {
    $('.alert').html(xhr.responseText);
    $('.alert').removeClass('hidden');
  });
  return rt;
}
function getParam(paramName) { 
    paramValue = "", isFound = !1; 
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) { 
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), paramValue ;
} 


function countDown(opt) {
  opt.el.attr("disabled","true");
	// opt.el.attr("color","#F9CD7B");
  opt.el.toggleClass("count_down");
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
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
 var nc;
 var nc_token;
$(function(){
      nc_token = ["FFFF00000000017B2097", (new Date()).getTime(), Math.random()].join(':');
      nc=NoCaptcha.init({
        renderTo: '#nc',
        appkey: 'FFFF00000000017B2097', 
        scene: 'nc_register_h5',
        token: nc_token,
        trans: {"key1": "code200"},
        elementID: ["usernameID"],
        is_Opt: 0,
        language: "cn",
        timeout: 10000,
        retryTimes: 5,
        errorTimes: 5,
        inline:false,
        apimap: {
            // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
            // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
        },
        bannerHidden:false,
        initHidden:false,
        callback: function (data) {
            window.sessionid = data.csessionid;
            window.sig = data.sig;
            clickSendValid();
        },
        error: function (s) {
        }
    });
    NoCaptcha.setEnabled(true);
    nc.reset();//请务必确保这里调用一次reset()方法
    NoCaptcha.upLang('cn', {
        'LOADING':"加载中...",//加载
        'SLIDER_LABEL': "向右滑动获取验证码",//等待滑动
        'CHECK_Y':"验证通过",//通过
        'ERROR_TITLE':"非常抱歉，这出错了...",//拦截
        'CHECK_N':"验证未通过", //准备唤醒二次验证
        'OVERLAY_INFORM':"经检测你当前操作环境存在风险，请输入验证码",//二次验证
        'TIPS_TITLE':"验证码错误，请重新输入"//验证码输错时的提示
    });


})

 