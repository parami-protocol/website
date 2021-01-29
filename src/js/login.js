function switchLang4Login(type) {
  switchLang(type);
  $('input[name=username]').attr('placeholder', $.i18n('user_name_warning'));
  $('input[name=password]').attr('placeholder', $.i18n('pwd_warning'));
}

function checkUser(e) {
  var valid = true;
  if ($('input[name=username]').val() === '') {
    $('input[name=username] + div.with-errors').html($.i18n('user_name_not_empty'));
    valid = false;
  } else {
    $('input[name=username] + div.with-errors').html('');
  }
  return valid;
}

function checkPwd(e) {
  var valid = true;
  if ($('input[name=password]').val() === '') {
    $('input[name=password] + div.with-errors').html($.i18n('pwd_not_empty'));
    valid = false;
  } else {
    $('input[name=password] + div.with-errors').html('');
  }
  return valid;
}


$(document).ready(function () {
  alive(function () {
    window.location.href = HOME_PAGE;
  });

  $.i18n({locale: 'en'}).load({
    en: '/i18n/en.json',
    zh: '/i18n/zh.json'
  }).then(function () {
    switchLang4Login(1);
  });

  $('input[name=username]').blur(checkUser);
  $('input[name=password]').blur(checkPwd);

  var form = $("form");
  form.on("submit", function (e) {
    if (checkUser() && checkPwd() && !e.isDefaultPrevented()) {
      $.ajax({
        url: LOGIN_URL,
        method: 'POST',
        data: JSON.stringify(form.serializeJSON()),
        contentType: 'application/json'
      }).done(function (result, status, xhr) {
        // // console.log.log.log('result: ', result)
        // // console.log.log.log('status: ', status)
        // // console.log.log.log('xhr: ', xhr)
        if(!result.success){
          if(result.message){
            $('.page-error').text(result.message)
          }
        }
        Cookies.set('token', result.id_token, {expires: 3});
      }).fail(function (xhr, status, error) {
        $('.page-error').html($.i18n('login_error'));
      }).then(function (data) {
        if (data.id_token) {
          return $.ajax({
            url: KYC_STATUS_URL,
            headers: {'Authorization': 'Bearer ' + data.id_token}
          });
        }
      }).done(function (result, status, xhr) {
        // // console.log.log.log('result: ', result)
        // // console.log.log.log('status: ', status)
        // // console.log.log.log('xhr: ', xhr)
        if (result.data === null || result.data.kycStatus !== null) {
          window.location.href = KYC_STATUS_PAGE;
        } else {
          if(getUrlParams('redirect')){
            window.location.href = getUrlParams('redirect');
          }else{
            window.location.href = HOME_PAGE;
          }

        }

      });
    }
    e.preventDefault();
  });
});