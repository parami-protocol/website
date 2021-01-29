function switchLang4KycStatus(type) {
  switchLang(type);
  if (status == 0) {
    $('.kyc-status-title').html($.i18n('go_kyc'));
  } else {
    $('.kyc-status-title').html($.i18n('kyc_wait_title'));
  }
}

function clearMsg() {
  $('#msg').html("");
  $('#msg').hide();
}

$(document).ready(function () {
  if (document.referrer === 'https://chain.pro/tpl/iic/login.html?source=wechat') {
    $('#iic_content').show();
  } else {
    $('#iic_content').hide();
  }
  var token = Cookies.get('token');
  var status = 0;
  // if (!token || token == 'undefined') {
  //   // window.location.href = LOGIN_PAGE;
  // }
    $('#msg').hide();
  $(function () { $("[data-toggle='tooltip']").tooltip(); });
  var clipBoard = new ClipboardJS('.btn');
  clipBoard.on('success', function(e) {
    $("#msg").html($.i18n('copied'));
    e.clearSelection();
    $('#msg').show();
    setTimeout("clearMsg()",2000)
  });

  $.i18n({locale: 'en'}).load({
    en: '/i18n/en.json',
    zh: '/i18n/zh.json'
  }).then(function () {
    switchLang4KycStatus(2);
  });

  $('.logout').on('click', logout.bind(this));

  $('.kyc-status-user').html(Cookies.get('user'));

  $.ajax({
    context: this,
    url: KYC_STATUS_URL,
    headers: {'Authorization': 'Bearer ' + token}
  }).done(function (result, status, xhr) {

    var img = '/img/kyc/kyc-'
    if (result.data) {
      if (result.data.kycStatus === 1) {
        img += '1.png'
        $('.btn-submit').remove()
        var html = '<span style="color: #4393d8;">认证成功(Congratulations! KYC has been passed successfully)</span>'
        $('.kyc-status-title').html(html)
      } else if (result.data.kycStatus === 0) {
        img += '0.png'
        $('.btn-submit').remove()
        $('.btn-renew').removeClass('hidden')
        // 0 处理中 1成功 2身份证姓名不符 3 认证失败
        var html = '<span style="color: #4393d8;">认证中(KYC is processing)</span>'
        $('.kyc-status-title').html(html)
        status = 1;
      } else if (result.data.kycStatus === 2) {
        img += '2.png'
        $('.btn-submit').remove()
        $('.btn-renew').removeClass('hidden')
        // 0 处理中 1成功 2身份证姓名不符 3 认证失败
        var html = '<span style="color: #e18c10;">认证失败(The ID Card name fail to match your name)</span>'
        $('.kyc-status-title').html(html)

      } else if (result.data.kycStatus === 3) {
        img += '2.png'
        $('.btn-submit').remove()
        $('.btn-renew').removeClass('hidden')
        // 0 处理中 1成功 2身份证姓名不符 3 认证失败
        var html = '<span style="color: #e18c10;">认证失败(Authentication failed, please check the information you upload and renew it)</span>'
        $('.kyc-status-title').html(html)
      }
      $('.kyc-status-content').css('display', 'none');
    } else {
      img += '2.png'
      var html = '您尚未完成实名认证，请完成实名认证以获得糖果空投'
      $('.kyc-status-title').html(html)
    }

    $('.kyc-status-img').removeClass('hidden')
    $('.kyc-status-img').find('img').attr({
      src: img
    })
    $('.kyc-status-btn').css('display', 'inline-block');

  }).fail(function (xhr, status, error) {
    // window.location.href = LOGIN_PAGE;
  });


  alive(function (result) {
    if (result.success) {
      if (result.data) {
        var data = result.data
        var html = 'Hi, ' + data.nickname + ' '
        var phoneNumber = data.mobilePhoneNumber.substr(-8);
        $.ajax({
            url: "https://candy.mimidao.net/iic/reward?mobile=" + phoneNumber,
            type: 'get',
            dataType:'json'
        }).done(function(results) {
            if (results.message === 'success') {
              var invite_cnt = results.result.invite_cnt;
              var reward = results.result.reward;
              var register_cnt = results.result.register_cnt;
              $('#iic_content').html('您邀请的总人数为' + invite_cnt + '，已经登记的人数为' + register_cnt + '，获得奖励为' + reward + '个IIC');
            } else {
                $('#iic_content').html('');
            }
        });
        $('.user').empty().html(html)
        $('#user_code_v').html(data.code);
      }
    }
  });
});