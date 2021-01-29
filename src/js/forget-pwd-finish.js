function switchLang4PwdFinish(type) {
  switchLang(type);
  $('input[name=password]').attr('placeholder', $.i18n('new_pwd_placeholder'));
  $('input[name=password2]').attr('placeholder', $.i18n('confirm_pwd_placeholder'));
}

function checkPwd(e) {
  var valid = true;
  if (!/^[\S]{6,16}$/.test($('input[name=password]').val())) {
    $('input[name=password] + div.with-errors').html($.i18n('register_name_illegal_character_warning'));
    valid = false;
  } else {
    $('input[name=password] + div.with-errors').html('');
  }
  return valid;
}

function checkPwd2(e) {
  var valid = true;
  if ($('input[name=password]').val() != $('input[name=password2]').val()) {
    $('input[name=password2] + div.with-errors').html($.i18n('pwd_different_warning'));
    valid = false;
  } else {
    $('input[name=password2] + div.with-errors').html('');
  }
  return valid;
}

$(document).ready(function () {

  $.i18n({locale: 'en'}).load({
    en: '/i18n/en.json',
    zh: '/i18n/zh.json'
  }).then(function () {
    switchLang4PwdFinish(1);
  });

  $('input[name=password]').blur(checkPwd);
  $('input[name=password2]').blur(checkPwd2);

  var url = $.url(window.location.href);
  var key = url.param('key');
  $('form').on('submit', function (e) {
    if (checkPwd() && checkPwd2() && !e.isDefaultPrevented()) {
      var pwd = $('input[name=password]').val();
      if (key) {
        $.ajax({
          url: FORGET_PASSOWRD_FINISH_URL,
          method: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            key: key,
            newPassword: pwd
          }),
        }).done(function (result, status, xhr) {
          window.location.href = LOGIN_PAGE;
        }).fail(function (xhr, status, error) {
          $('.page-error').html(error);
        });
      } else {
        $('.page-error').html($.i18n('empty_key'));
      }
    }
    e.preventDefault();
  });
});