var strategies = {
  isNonEmpty: function (opt) {
    if (opt.el.val() === '') {
      return opt.name + ' can\'t not be null'
    }
  },
  minLength: function (opt) {
    if (opt.el.val().length < opt.minLength) {
      return opt.name + ' minimum length can\'t less than ' + opt.minLength
    }
  },
  maxLength: function (opt) {
    if (opt.el.val().length > opt.maxLength) {
      return opt.name + ' minimum length can\'t more than ' + opt.minLength
    }
  },

};

var userNameRules = [
  strategies.isNonEmpty,
  strategies.minLength
]

function switchLang4register(param){
  switchLang(param);
  $('input[name=login]').attr('placeholder', $.i18n('placeholder_login'));
  $('input[name=phonenum]').attr('placeholder', $.i18n('placeholder_phonenum'));
  $('input[name=activecode]').attr('placeholder', $.i18n('placeholder_activecode'));
  $('input[name=password]').attr('placeholder', $.i18n('placeholder_password'));
  $('input[name=password2]').attr('placeholder', $.i18n('placeholder_password2'));
  $('input[name=tracking]').attr('placeholder', $.i18n('placeholder_tracking'));
  $('input[name=email]').attr('placeholder', $.i18n('placeholder_email'));
  
}

function bindRegEmailEvent() {

  $('#reg_email').find('input[name=login]').on('blur', function (e) {
    var me = $(this)

    var err = ''
    userNameRules.map(function (item, i) {
      err = item({
        el: me,
        minLength: 6,
        maxLength: 16,
        name: 'username'
      })
      // // console.log(err)
      if (i === (userNameRules.length - 1)) {
        me.siblings('.with-errors').text(err)
      } else {
        me.siblings('.with-errors').text('')
      }
    })

  })

  $('input[name=email]').on('blur', function (e) {
    var me = $(this)
    var err = checkEmail(me.val())

    if (err) {
      me.siblings('.with-errors').text(err)
    } else {
      me.siblings('.with-errors').text('')
    }
  })

  $('.btn-send-email').on('click', function (e) {
    var me = $(this)

    var err = checkEmail($('input[name=email]').val())
    // console.log('err: ', err)
    if (err) {
      $('input[name=email]').siblings('.with-errors').text(err)
      return
    } else {
      $('input[name=email]').siblings('.with-errors').text('')
    }

    var msg = me.text()
    countDown({
      el: me,
      duration: 60,
      cb: function () {
        me.text(msg)
      }
    })
    var txt = 'Verification code has been sended, please check it in your email!'
    $('input[name=email]').siblings('.with-errors').text(txt)
    sendEmail({
      url: REGISTER_EMAIL,
      pram: $('#reg_email').serializeJSON()
    })
  })

  $('input[name=activecode]').on('blur', function (e) {
    var me = $(this)
    var err = checkVerfyCode(me.val())
    if (err) {
      me.siblings('.with-errors').text(err)
    } else {
      me.siblings('.with-errors').text('')
    }
  })

  $('#reg_email').find('input[name=password]').on('blur', function (e) {
    checkPass($('#reg_email').find('input[name=password]'), $('#reg_email').find('input[name=password2]'))
  })

  $('#reg_email').find('input[name=password2]').on('blur', function (e) {
    checkPass($('#reg_email').find('input[name=password]'), $('#reg_email').find('input[name=password2]'))
  })

  $('#submit_email').on('click', function (e) {
    e.preventDefault();
    var me = $(this)

    // console.log()

    if(!$('#reg_email').find('input[name=protocol_text]').is(':checked')){
      $('#popUpModal').find('.modal-body')
        .empty()
        .text('Please check the protocol ( 请勾选协议 ) !')
      $('#popUpModal').modal({
        show: true
      })
      return
    }

    $.each($('#reg_email').find('input'), function (i, item) {
      // // console.log('item: ', item)
      // // console.log('i: ', i)
      $(item).trigger('blur')
    })


    var errMsg = ''
    $.each($('#reg_email').find('.with-errors'), function (i, item) {
      if ($(item).text() !== '') {
        errMsg += $(item).text()
      }
    })

    if (errMsg) {
      // console.log(errMsg)
      $('#popUpModal').find('.modal-body')
        .empty()
        .text('Please finish user info (请完善用户资料) !')
      $('#popUpModal').modal({
        show: true
      })
      return
    }
    // console.log(JSON.stringify($('#reg_email').serializeJSON()))

    var o = $('#reg_email').serializeJSON()
    o['activeCode'] = o.activecode
    o['nickname'] = o.login
    $.ajax({
      url: REGISTER_URL_MAIL,
      method: 'POST',
      data: JSON.stringify(o),
      contentType: 'application/json'
    }).done(function (result, status, xhr) {

      if (!result.success) {
        $('#popUpModal').find('.modal-body')
          .empty()
          .text(result.message)
        $('#popUpModal').modal({
          show: true
        })
      } else {
        window.location.href = LOGIN_PAGE;
      }
    }).fail(function (xhr, status, error) {
      $('.alert').html(xhr.responseText);
      $('.alert').removeClass('hidden');
    });

  });


}


function bindRegPhoneEvent() {

  $('#reg_phone').find('input[name=login]').on('blur', function (e) {
    var me = $(this)

    var err = ''
    userNameRules.map(function (item, i) {
      err = item({
        el: me,
        minLength: 6,
        maxLength: 16,
        name: 'username'
      })
      // // console.log(err)
      if (i === (userNameRules.length - 1)) {
        me.siblings('.with-errors').text(err)
      } else {
        me.siblings('.with-errors').text('')
      }
    })

  })

  // checkPhone
  $('input[name=phonenum]').on('blur', function (e) {
    var me = $(this)
    var err = checkPhone(me.val())
    if (err) {
      me.siblings('.with-errors').text(err)
    } else {
      me.siblings('.with-errors').text('')
    }
  })

  $('.btn-send-code').on('click', function (e) {
    var me = $(this)

    var err = checkPhone($('input[name=phonenum]').val())
    // console.log('err: ', err)
    if (err) {
      $('input[name=phonenum]').siblings('.with-errors').text(err)
      return
    } else {
      $('input[name=phonenum]').siblings('.with-errors').text('')
    }

    var msg = me.text()
    countDown({
      el: me,
      duration: 60,
      cb: function () {
        me.text(msg)
      }
    })
    var txt = 'Verification code has been sended, please check it!'
    $('input[name=phonenum]').siblings('.with-errors').text(txt)
    var pram = $('#reg_phone').serializeJSON()
    pram.phoneNum = pram.phonenum
    sendSms({
      url: REGISTER_PHONE,
      pram: pram
    })
  })

  $('#submit_phone').on('click', function (e) {
    var me = $(this)
    e.preventDefault();

    if(!$('#reg_phone').find('input[name=protocol_text]').is(':checked')){
      $('#popUpModal').find('.modal-body')
        .empty()
        .text('Please check the protocol ( 请勾选协议 ) !')
      $('#popUpModal').modal({
        show: true
      })
      return
    }

    $.each($('#reg_phone').find('input'), function (i, item) {
      // // console.log('item: ', item)
      // // console.log('i: ', i)
      $(item).trigger('blur')
    })


    var errMsg = ''
    $.each($('#reg_phone').find('.with-errors'), function (i, item) {
      if ($(item).text() !== '') {
        errMsg += $(item).text()
      }
    })

    if (errMsg) {
      // console.log(errMsg)
      $('#popUpModal').find('.modal-body')
        .empty()
        .text('Please finish user info (请完善用户资料) !')
      $('#popUpModal').modal({
        show: true
      })
      return
    }

    var o = $('#reg_phone').serializeJSON()
    o['activeCode'] = o.activecode
    // o['login'] = o.phonenum
    o['nickname'] = o.login
    o['mobilePhoneNumber'] = o.phonenum
    o['mobilePhoneAreaCode'] = o.areaCode
    // console.log(JSON.stringify(o))

    $.ajax({
      url: REGISTER_URL_PHONE,
      method: 'POST',
      data: JSON.stringify(o),
      contentType: 'application/json'
    }).done(function (result, status, xhr) {
      // console.log('result: ', result)
      // console.log('status: ', status)
      // console.log('status: ', status)
      if (!result.success) {
        $('#popUpModal').find('.modal-body')
          .empty()
          .text(result.message)
        $('#popUpModal').modal({
          show: true
        })
      } else {
        window.location.href = LOGIN_PAGE;
      }
    }).fail(function (xhr, status, error) {
      $('.alert').html(xhr.responseText);
      $('.alert').removeClass('hidden');
    });
  })

  $('#reg_phone').find('input[name=password]').on('blur', function (e) {
    checkPass($('#reg_phone').find('input[name=password]'), $('#reg_phone').find('input[name=password2]'))
  })

  $('#reg_phone').find('input[name=password2]').on('blur', function (e) {
    checkPass($('#reg_phone').find('input[name=password]'), $('#reg_phone').find('input[name=password2]'))
  })

}


$(document).ready(function () {

  bindRegPhoneEvent()

  bindRegEmailEvent()

  $('.use_phone').on('click', function (e) {
    $('.reg_email, .reg_phone').toggleClass('hidden')

    // console.log($.trim($(this).text()))
    if ($.trim($(this).attr("data-i18n")) === 'register_by_email') {
      $(this).attr("data-i18n","register_by_phone");
      $(this).text($.i18n('register_by_phone'));
    } else {
      $(this).attr("data-i18n","register_by_email");
      $(this).text($.i18n('register_by_email'));
    }
  })

  $('.logout').click(logout);


  var options = COUNTRY_MAP.map(function (e) {
    return '<option value="' + e.langKey + '">' + e.value + '</option>'
  }).join('');
  $('select[name=langKey]').html(options);


  var opts = COUNTRY_MAP.map(function (e) {
    return '<option value="' + e.areaCode + '">' + e.value + '</option>'
  }).join('');
  $('select[name=areaCode]').html(opts);


  $('#protocalModal').modal({
    show: false
  });

  var inviteCode = getParam("i");
  if(inviteCode != null){
      Cookies.set("invite_code",inviteCode);
  }else{
     Cookies.set("invite_code",null);
  }
  $("input[name='tracking']").each(  
  function(){  
    var code = getInviteCode();
    if(code != "" && code!=null && code!='null'){
      $(this).val(code);    
      $(this).attr("readonly","readonly");
    }else{
       $(this).val("");  
       $(this).removeAttr("readonly");
    }
  });
});

$.i18n({locale: 'en'}).load({
    en: '../i18n/en.json',
    zh: '../i18n/zh.json'
  }).then(function () {
     switchLang4register(1);
});


function getParam(paramName) { 
    paramValue = "", isFound = !1; 
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) { 
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), paramValue ;
} 

