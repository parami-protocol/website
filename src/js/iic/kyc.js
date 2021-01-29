function switchLang4Kyc(type) {
  switchLang(type);
  $('input[name=idName]').attr('placeholder', $.i18n('name_different_warning'));
  $('input[name=idNum]').attr('placeholder', $.i18n('id_number'));
  $('input[name=activeCode]').attr('placeholder', $.i18n('placeholder_activecode'));
  $('input[name=ethAddress]').attr('placeholder', $.i18n('placeholder_eth_address'));
  $('input[name=phoneNum]').attr('placeholder', $.i18n('placeholder_phonenum'));
}

function checkRealName(val) {
  // var reg = /\w{3,}/ig
  if ($.trim(val) === '') {
    return $.i18n('check_error_real_name');
  } else {
    return false
  }
}

function checkID(val) {
  var reg = /\d{3,}/ig
  if (!reg.test(val)) {
    return $.i18n('check_error_id');
  } else {
    return false
  }
}

function checkPhoneNum(val) {
  var reg = /\d{3,}/ig
  if (!reg.test(val)) {
    return $.i18n('check_error_phone');
  } else {
    return false
  }
}

function checkImage() {
  var valid = true;
  if (!$('input[name=fileIdFront]').val()) {
    $('input[name=fileIdFront]').parent().next('div.with-errors').html($.i18n('image_warning3'));
    valid = false;
  } else {
    $('input[name=fileIdFront]').parent().next('div.with-errors').html('');
  }
  if (!$('input[name=fileIdBack]').val()) {
    $('input[name=fileIdBack]').parent().next('div.with-errors').html($.i18n('image_warning3'));
    valid = false;
  } else {
    $('input[name=fileIdBack]').parent().next('div.with-errors').html('');
  }
  if (!$('input[name=fileInHand]').val()) {
    $('input[name=fileInHand]').parent().next('div.with-errors').html($.i18n('image_warning3'));
    valid = false;
  } else {
    $('input[name=fileInHand]').parent().next('div.with-errors').html('');
  }
  return valid;
}

function checkProtocal() {
  var valid = true;
  if (!$('input[type=checkbox]').is(':checked')) {
    $('input[type=checkbox]').parent().next('div.with-errors').html($.i18n('protocol_warning'));
    valid = false;
  } else {
    $('input[type=checkbox]').parent().next('div.with-errors').html();
  }
  return valid;
}

function uploadImage() {
  var file = $(this)[0].files[0];
  if (file) {
    if (file.size && file.size / 1000000 > 10) {
      $(this).parent().next('.help-block.with-errors').html($.i18n('image_warning1'));
      return;
    }
    if (file.name && ['jpg', 'jpeg', 'png', 'gif'].indexOf(file.name.split('.').pop().toLowerCase()) == -1) {
      $(this).parent().next('.help-block.with-errors').html($.i18n('image_warning2'));
      return;
    }
    var fd = new FormData();
    fd.append('file', file);
    $.ajax({
      context: this,
      method: 'POST',
      url: KYC_UPLOAD_URL,
      headers: {'Authorization': 'Bearer ' + getToken()},
      contentType: false,
      processData: false,
      data: fd,
      success: function (result) {
        // console.log.log('result: ', result)
        $(this).parent().children('.upload-image').css('background-image', 'url(' + result.data + ')');
        $(this).parent().children('input[type=text]').val(result.data);
        $(this).next('upload-image-text').html($.i18n('change_image_title'));
      },
      error: function (xhr, status, error) {
        if (xhr.status == '401') {
          // window.location.href = LOGIN_PAGE;
        }
      }
    });
  }
}


/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
var isAddress = function (address) {
  address = address.toLowerCase()
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // check if it has the basic requirements of an address
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    // If it's all small caps or all all caps, return true
    return true;
  }

  /*else {
    // Otherwise check each case
    return isChecksumAddress(address);
  }*/
};

/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
var isChecksumAddress = function (address) {
  // Check each case
  address = address.replace('0x','');
  var addressHash = sha3(address.toLowerCase());
  for (var i = 0; i < 40; i++ ) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
      return false;
    }
  }
  return true;
};


function bindEvent() {

  var options = COUNTRY_MAP.map(function (e) {
    return '<option value="' + e.langKey + ',' + e.areaCode + '">' + '+' +  e.areaCode + '  ' +  e.value + '</option>'
  }).join('');
  $('select').html(options);


  // 真实姓名
  $('input[name=idName]').on('blur', function (e) {
    var me = $(this)
    var err = checkRealName(me.val())
    showErr(me, err)
  })

  // 身份证号
  $('input[name=idNum]').on('blur', function (e) {
    var me = $(this)
    var err = checkID(me.val())
    showErr(me, err)
  })

  // 手机
  $('input[name=phoneNum]').on('blur', function (e) {
    var me = $(this)
    var err = checkPhoneNum(me.val())
    showErr(me, err)
  })

  $('.btn-send-code').on('click', function (e) {
    var me = $(this)

    var err = checkPhone($('input[name=phoneNum]').val())

    // console.log.log('err: ', err)
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
    var txt = 'SMS code has been sended, please check it out...'
    $('input[name=phoneNum]').siblings('.with-errors').text(txt)

    var pram = $('#kyc').serializeJSON()
    pram['mobilePhoneAreaCode'] = pram.nationality.split(',')[1]
    pram['areaCode'] = pram.nationality.split(',')[1]
    pram['langKey'] = pram.nationality.split(',')[0]

    sendKycSms({
      url: KYC_PHONE,
      pram: pram
    })
  })

  // 手机验证码
  $('input[name=activeCode]').on('blur', function (e) {
    var me = $(this)
    var err = checkVerfyCode(me.val())
    showErr(me, err)
  })


  // eth address
  $('input[name=ethAddress]').on('blur', function (e) {
    var me = $(this)
    var err = ''
    var isErr = isAddress(me.val())
    if(!isErr) err = $.i18n('check_error_eth');
    showErr(me, err)
  })
  


  $('.btn-submit').on('click', function (e) {
    // console.log.log('submit')
    e.preventDefault();

    var me = $(this)

    // if(!$('input[data-i18n=protocol_text]').is(':checked')){
    //   $('#popUpModal').find('.modal-body')
    //     .empty()
    //     .text('Please check the protocol ( 请勾选协议 ) !')
    //   $('#popUpModal').modal({
    //     show: true
    //   })
    //   return
    // }


    $.each($('#kyc').find('input'), function (i, item) {
      $(item).trigger('blur')
    })


    $.each($('.uploadImg'), function (i, item) {
      if($(item).attr('isupload') !== '1'){
        $(item).siblings('.with-errors').text('please upload image...')
      }
    })

    var errMsg = ''
    $.each($('#kyc').find('.with-errors'), function (i, item) {
      if ($(item).text() !== '') {
        errMsg += $(item).text()
      }
    })

    if (errMsg) {
      // console.log.log(errMsg)
      $('#popUpModal').find('.modal-body')
        .empty()
        .text('please finish user info (请完善用户资料) !')
      $('#popUpModal').modal({
        show: true
      })
      return
    }

    var o = $('form').serializeJSON()
    o['mobilePhoneAreaCode'] = o.nationality.split(',')[1]
    o['areaCode'] = o.nationality.split(',')[1]
    o['langKey'] = o.nationality.split(',')[0]

    o['fileIdFront'] = $('#frontImageContainer').attr('imgUrl')
    o['fileIdBack'] = $('#backImageContainer').attr('imgUrl')
    o['fileInHand'] = $('#holdImageContainer').attr('imgUrl')

    $.ajax({
      method: 'post',
      url: KYC_SUBMIT_URL,
      headers: {'Authorization': 'Bearer ' + getToken()},
      data: JSON.stringify(o),
      contentType: 'application/json'
    }).done(function (result, status, xhr) {
      // console.log.log('result: ', result)
      // console.log.log('status: ', status)
      // console.log.log('xhr: ', xhr)
      // window.location.href = KYC_STATUS_PAGE;
      if (!result.success) {
        $('#popUpModal').find('.modal-body')
          .empty()
          .text(result.message)
        $('#popUpModal').modal({
          show: true
        })
      } else {
        var txtConfirm = 'The information you submitted has been uploaded successfully, waiting for the staff to review.(您提交的信息已上传成功，等待工作人员审核中) '
        $('#popUpModal').find('.modal-body')
          .empty()
          .text(txtConfirm)
        $('#popUpModal').modal({
          show: true
        })

        var txt = $('.page-title').text()
        var html = '<span style="color: #4393d8; display: block;">'+ txtConfirm +'</span>'
        $('.page-title').html(txt + html)
        $('.btn-submit').attr('disabled', 'disabled')

        setTimeout(function () {
          location.href = IIC_KYC_STATUS_PAGE
        }, 3000)
      }
    });



  })


}


function getKycStatus(){
  $.ajax({
    context: this,
    method: 'get',
    url: KYC_STATUS_URL,
    headers: {'Authorization': 'Bearer ' + getToken()},
    contentType: false,
    processData: false,
    data: JSON.stringify({}),
    success: function (result, status, xhr) {
      // console.log.log('result: ', result)
      // console.log.log('status: ', status)
      // console.log.log('xhr: ', xhr)

      if (result.success) {

        var data = result.data

        if(!data) return

        if(data.idName){
          $('input[name=idName]').val(data.idName)
        }

        if(data.idNum){
          $('input[name=idNum]').val(data.idNum)
        }

        if(data.phoneNum){
          $('input[name=phoneNum]').val(data.phoneNum)
        }

        if(data.nationality){
          $("select[name=nationality]").val(data.nationality);
        }

        if(data.fileIdFront){
          $('#frontImageContainer').attr('isupload', '1')
          $('#frontImageContainer').find('.upload-image').css({
            'background-image': 'url(' + data.fileIdFront + ')'
          })
        }

        if(data.fileIdBack){
          $('#backImageContainer').attr('isupload', '1')
          $('#backImageContainer').find('.upload-image').css({
            'background-image': 'url(' + data.fileIdBack + ')'
          })
        }

        if(data.fileInHand){
          $('#holdImageContainer').attr('isupload', '1')
          $('#holdImageContainer').find('.upload-image').css({
            'background-image': 'url(' + data.fileInHand + ')'
          })
        }

        if(data.ethAddress){
          $('input[name=ethAddress]').val(data.ethAddress)
        }

        // window.location.href = KYC_STATUS_PAGE;

        if(result.data){
          if(result.data.kycStatus === 1){
            $('input').attr('disabled', 'disabled')
            $('.btn-submit').attr('disabled', 'disabled')
            var txt = $('.page-title').text()
            var html = '<span style="color: #4393d8; display: block;">您提交的信息已上传成功，等待工作人员审核中 (The information you submitted has been uploaded successfully, waiting for the staff to review. )</span>'
            $('.page-title').html(txt + '' + html)
          } else if(result.data.kycStatus === 0){
            // 0 处理中 1成功 2身份证姓名不符 3 认证失败
            var txt = $('.page-title').text()
            var html = '<span style="color: #4393d8; display: block;"> 审核中(Processing...) </span>'
            $('.page-title').html(txt + ' ' + html)
          } else if(result.data.kycStatus === 2){
            // 0 处理中 1成功 2身份证姓名不符 3 认证失败
            var txt = $('.page-title').text()
            var html = '<span style="color: #4393d8; display: block;"> 审核失败(The ID Card name fail to match your name...) </span>'
            $('.page-title').html(txt + ' ' + html)
          } else if(result.data.kycStatus === 3){
            // 0 处理中 1成功 2身份证姓名不符 3 认证失败
            var txt = $('.page-title').text()
            var html = '<span style="color: #4393d8; display: block;"> 审核失败(Authentication fail...) </span>'
            $('.page-title').html(txt + ' ' + html)
          }
        }


      }


    },
    error: function (xhr, status, error) {
      // alert('network error...')
    }
  });
}


$(document).ready(function () {
  // var user = getUserInfo();
  // $('.user').html(user);

  getKycStatus()
  bindEvent()
   $.i18n({locale: 'en'}).load({
    en: '/i18n/en.json',
    zh: '/i18n/zh.json'
  }).then(function () {
    switchLang4Kyc(2);
  });


});