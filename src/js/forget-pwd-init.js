function switchLang4PwdInit(type) {
  switchLang(type);
  $('input[name=email]').attr('placeholder', $.i18n('email_placeholder'));
  $('input[name=phoneNum]').attr('placeholder', $.i18n('placeholder_phonenum'));
  $('input[name=activecode]').attr('placeholder', $.i18n('placeholder_activecode'));
  $('input[name=passWord]').attr('placeholder', $.i18n('new_pwd_placeholder'));
  $('input[name=password2]').attr('placeholder', $.i18n('placeholder_password2'));
}

function bindEmailEvent() {

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
    e.preventDefault();

    var err = checkEmail($('input[name=email]').val())
    console.log('err: ', err)
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
    var txt = 'verification code has sended, please check it!'
    $('input[name=email]').siblings('.with-errors').text(txt)
    sendEmail({
      url: FORGET_PASSOWRD_RESET_Mail,
      pram: $('#forget_email').serializeJSON()
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

  $('#forget_email').find('input[name=passWord]').on('blur', function (e) {
    checkPass($('#forget_email').find('input[name=passWord]'), $('#forget_email').find('input[name=password2]'))
  })

  $('#forget_email').find('input[name=password2]').on('blur', function (e) {
    checkPass($('#forget_email').find('input[name=passWord]'), $('#forget_email').find('input[name=password2]'))
  })

  $('.btn-retrieve-pass').on('click', function (e) {
    // forget_email
    e.preventDefault();
    var me = $(this)

    $.each($('#forget_email').find('input'), function (i, item) {
      // console.log('item: ', item)
      // console.log('i: ', i)
      $(item).trigger('blur')
    })


    var errMsg = ''
    $.each($('#forget_email').find('.with-errors'), function (i, item) {
      if ($(item).text() !== '') {
        errMsg += $(item).text()
      }
    })

    if (errMsg) {
      console.log(errMsg)
      // alert('please check your input!')
      $('#popUpModal').find('.modal-body')
        .empty()
        .text('please check your input!')
      $('#popUpModal').modal({
        show: true
      })
      return
    }
    console.log(JSON.stringify($('#forget_email').serializeJSON()))

    var o = $('#forget_email').serializeJSON()
    o['account'] = o.email

    $.ajax({
      url: FORGET_PASSOWRD_RESET_URL,
      method: 'get',
      data: o,
      contentType: 'application/json'
    }).done(function (result, status, xhr) {
      console.log('result: ', result)
      console.log('status: ', status)
      console.log('status: ', status)
      if (result.success) {
        window.location.href = LOGIN_PAGE;
      } else {
        alert(result.message)
      }
    }).fail(function (xhr, status, error) {
      $('.alert').html(xhr.responseText);
      $('.alert').removeClass('hidden');
    });
  })

}


function bindPhoneEvent() {

  $('input[name=phoneNum]').on('blur', function (e) {
    var me = $(this)
    var err = checkPhone(me.val())

    if (err) {
      me.siblings('.with-errors').text(err)
    } else {
      me.siblings('.with-errors').text('')
    }
  })

  $('.btn-send-phone').on('click', function (e) {
    console.log('send-phone')
    var me = $(this)
    e.preventDefault();

    var err = checkPhone($('input[name=phoneNum]').val())
    console.log('err: ', err)
    if (err) {
      $('input[name=phoneNum]').siblings('.with-errors').text(err)
      return
    } else {
      $('input[name=phoneNum]').siblings('.with-errors').text('')
    }

    var msg = me.text()
    countDown({
      el: me,
      duration: 60,
      cb: function () {
        me.text(msg)
      }
    })
    var txt = 'verification code has sended, please check it!'
    $('input[name=phoneNum]').siblings('.with-errors').text(txt)
    sendEmail({
      url: FORGET_PASSOWRD_RESET_SMS,
      pram: $('#forget_phone').serializeJSON()
    })
  })

  $('#forget_phone').find('input[name=passWord]').on('blur', function (e) {
    checkPass($('#forget_phone').find('input[name=passWord]'), $('#forget_phone').find('input[name=password2]'))
  })

  $('#forget_phone').find('input[name=password2]').on('blur', function (e) {
    checkPass($('#forget_phone').find('input[name=passWord]'), $('#forget_phone').find('input[name=password2]'))
  })

  $('.btn-retrieve-phone').on('click', function (e) {

    e.preventDefault();
    var me = $(this)

    $.each($('#forget_phone').find('input'), function (i, item) {
      // console.log('item: ', item)
      // console.log('i: ', i)
      $(item).trigger('blur')
    })


    var errMsg = ''
    $.each($('#forget_phone').find('.with-errors'), function (i, item) {
      if ($(item).text() !== '') {
        errMsg += $(item).text()
      }
    })

    if (errMsg) {
      console.log(errMsg)
      // alert('please check your input!')
      $('#popUpModal').find('.modal-body')
        .empty()
        .text('please check your input!')
      $('#popUpModal').modal({
        show: true
      })
      return
    }

    var o = $('#forget_phone').serializeJSON()
    o['account'] = o.phoneNum

    $.ajax({
      url: FORGET_PASSOWRD_RESET_URL,
      method: 'get',
      data: o,
      contentType: 'application/json'
    }).done(function (result, status, xhr) {
      console.log('result: ', result)
      console.log('status: ', status)
      console.log('status: ', status)
      if (result.success) {
        window.location.href = LOGIN_PAGE;
      } else {
        alert(result.message)
      }
    }).fail(function (xhr, status, error) {
      $('.alert').html(xhr.responseText);
      $('.alert').removeClass('hidden');
    });
  })

}


$(document).ready(function () {

  $.i18n({locale: 'en'}).load({
    en: '/i18n/en.json',
    zh: '/i18n/zh.json'
  }).then(function () {
    switchLang4PwdInit(1);
  });

  var options = COUNTRY_MAP.map(function (e) {
    return '<option value="' + e.langKey + '">' + e.value + '</option>'
  }).join('');
  $('select[name=langKey]').html(options);

  var opts = COUNTRY_MAP.map(function (e) {
    // console.log('e2: ', e)
    return '<option value="' + e.areaCode + '">' + e.value + '</option>'
  }).join('');
  $('select[name=areaCode]').html(opts);


  bindEmailEvent()
  bindPhoneEvent()

  $('.find_by_phone').on('click', function (e) {
    e.preventDefault();
    $('#forget_email, #forget_phone').toggleClass('hidden')
    if ($.trim($(this).attr("data-i18n")) === 'forget_by_phone') {
      $(this).attr("data-i18n","forget_by_email");
      $(this).text($.i18n('forget_by_email'));
    } else {
      $(this).attr("data-i18n","forget_by_phone");
      $(this).text($.i18n('forget_by_phone'));
    }
  })


});