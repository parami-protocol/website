function switchLogoTitle() {
  // 切换中英文parami-logo parami-title
  var deviceType = getMobilePC()
  if (deviceType === 'mobile') {
    if (Cookies.get("lang") === 'en') {
      // $('#js__parami-logo-pc-en1').hide()
      // $('#js__parami-logo-pc-en2').hide()
      // $('#js__parami-logo-pc-zh1').hide()
      // $('#js__parami-logo-pc-zh2').hide()
      // $('#js__parami-title-pc-en').hide()
      // $('#js__parami-title-pc-zh').hide()
      //
      // $('#js__parami-title-mb-zh').hide()
      // $('#js__parami-logo-mb1').show()
      // $('#js__parami-logo-mb2').show()
      // $('#js__parami-title-mb-en').show()
      $('.bacter-theme .navbar-brand').css({
        paddingTop: '10px',
        paddingLeft: '15px'
      })
      // $('#js__parami-logo-mb1').css({
      //   width: '40px',
      //   height: '40px'
      // })
    } else if (Cookies.get("lang") === 'zh') {
      // $('#js__parami-logo-pc-en1').hide()
      // $('#js__parami-logo-pc-en2').hide()
      // $('#js__parami-logo-pc-zh1').hide()
      // $('#js__parami-logo-pc-zh2').hide()
      // $('#js__parami-title-pc-en').hide()
      // $('#js__parami-title-pc-zh').hide()
      //
      // $('#js__parami-title-mb-en').hide()
      // $('#js__parami-logo-mb1').show()
      // $('#js__parami-logo-mb2').show()
      // $('#js__parami-title-mb-zh').show()
      // $('.bacter-theme .navbar-brand').css({
      //   paddingTop: '20px',
      //   paddingLeft: '25px'
      // })
      // $('#js__parami-logo-mb1').css({
      //   width: '40px',
      //   height: '40px'
      // })
    }
  } else if (deviceType === 'pc') {
    if (Cookies.get("lang") === 'en') {
      // $('#js__parami-logo-mb1').hide()
      // $('#js__parami-logo-mb2').hide()
      // $('#js__parami-title-mb-en').hide()
      // $('#js__parami-title-mb-zh').hide()
      // $('#js__parami-logo-pc-zh1').hide()
      // $('#js__parami-logo-pc-zh2').hide()
      // $('#js__parami-title-pc-zh').hide()
      //
      // $('#js__parami-logo-pc-en1').show()
      // $('#js__parami-logo-pc-en2').show()
      // $('#js__parami-title-pc-en').show()
    } else if (Cookies.get("lang") === 'zh') {
      // $('#js__parami-logo-mb1').hide()
      // $('#js__parami-logo-mb2').hide()
      // $('#js__parami-title-mb-en').hide()
      // $('#js__parami-title-mb-zh').hide()
      // $('#js__parami-logo-pc-en1').hide()
      // $('#js__parami-logo-pc-en2').hide()
      // $('#js__parami-title-pc-en').hide()
      //
      // $('#js__parami-logo-pc-zh1').show()
      // $('#js__parami-logo-pc-zh2').show()
      // $('#js__parami-title-pc-zh').show()
    }
  }
}

function switchLang4Index(type) {
  switchLang(type);
  //首页主标题
  $('#main_title').html(randomFadeInString($.i18n('main_title'), 5, 0));
  //首页副标题
  $('#subtitle').html(randomFadeInString($.i18n('subtitle'), 5, 1));
  $('#subtitle_main').html(randomFadeInString($.i18n('subtitle_main'), 5, 1));
  // if (refreshContent) {
  //     $('.pdf-button').hide();
  //     $('.pdf-button').show();
  // }
  //
  $('#overview_title').html(randomFadeInString($.i18n('overview'), 3, 0));
  //项目特色
  $('#feature_title').html(randomFadeInString($.i18n('feature'), 3, 0));
  //核心优势
  $('#advantage_title').html(randomFadeInString($.i18n('advantage'), 3, 0));
  //创始人
  // $('#founder_title').html(randomFadeInString($.i18n('founder'), 3, 0));
  $('#team_title').html(randomFadeInString($.i18n('team'), 3, 0));
  //联合创始人
  $('#co_founder_and_technical_consultant_title').html(randomFadeInString($.i18n('co_founder_and_technical_consultant'), 3, 0));
  //投资机构
  $('#investment_title').html(randomFadeInString($.i18n('agency'), 3, 0));
  //交易所
  $('#exchange_title').html(randomFadeInString($.i18n('exchange'), 3, 0));
  //合作伙伴
  $('#partner_title').html(randomFadeInString($.i18n('partner'), 3, 0));
  //般若联盟
  $('#alliance_title').html(randomFadeInString($.i18n('alliance'), 3, 0));
  //联系我们
  $('#contact_title').html(randomFadeInString($.i18n('contact'), 3, 0));
  //白皮书
  $('#whitepaper_title').html(randomFadeInString($.i18n('whitepaper'), 3, 0));
  //入驻申请
  $('#cooperation_title').html(randomFadeInString($.i18n('cooperation'), 3, 0));
  //切换中英文白皮书
  /*
  if ($('.lang-btn>span').html() === '中文') {
    $('.whitepaper_pdf_btn').attr('href', 'https://parami.io/whitepaper.pdf');
  } else {
    $('.whitepaper_pdf_btn').attr('href', 'https://parami.io/whitepaper.pdf');
  }
  */
  // $('.whitepaper_pdf_btn').attr('href', '/Parami_Protocol_Light_Paper.pptx');
  switchLogoTitle()

  $(document).attr("title", "PARAMI - BUILD AD３ FOR WEB３");
  // if ($.i18n().locale === 'zh' ) {
  //   $(document).attr("title", "PARAMI - BUILD AD３ FOR WEB３");
  // } else {
  //   $(document).attr("title", "PARAMI - BUILD AD３ FOR WEB３");
  // }
}

function randomFadeInString(str, maxDurationSecond, delaySecond) {
  var result = '';
  if (str) {
    var strs = str.split('');
    result = strs.map(function (e) {
      var duration = (Math.random() * maxDurationSecond).toFixed(3) - 0;
      return '<span class="wow fadeIn random-animate" data-wow-duration="' + duration + 's" data-wow-delay="' + delaySecond + 's">' + e + '</span>'
    }).join('');
  }
  return result;
}

$(document).ready(function () {
  $('.carousel-slide').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('.tooltip').tooltipster({
    delay: 50,
    side: 'bottom',
    theme: 'tooltipster-borderless',
  });

  new WOW({
    scrollContainer: '#content'
  }).init();

  // 每个section占至少一屏的高度
  $('#agency').css('min-height', $(window).height());
  $('#exchange').css('min-height', $(window).height());
  $('#partner').css('min-height', $(window).height());
  $('#alliance').css('min-height', $(window).height());
  $('#whitepaper').css('min-height', $(window).height());
  $('#cooperation').css('min-height', $(window).height());

// $('.navbar .navbar-right a').click(function(e) {
//   $('.navbar-collapse').removeClass('in');
//   $('.navbar-toggle').addClass('collapsed');
//   var href = $(this).attr('href');
//   var match = /\/(#\w+)/.exec(href);
//   if (match) {
//     var selector = match[1]
//     var top = $(selector).offset().top;
//     $('html').animate({
//       scrollTop: top
//     }, 800);
//   }
// });

  resetApplicationItemsOffset();
  function resetApplicationItemsOffset() {
    var $ul = $('.application-items ul');
    // var width = $(window).width();
    $ul.css({
      left: '0'
    });

    var deviceType = getMobilePC()
    if (deviceType === 'mobile') {
      $('#js__parami-logo').css({
        width: '40px',
      })
    } else{
      $('#js__parami-logo').css({
        width: '60px',
        // height: '80px'
      })
    }
    // if(getMobilePC() === 'pc'){
    //   $('#js__parami-logo-mb1').hide()
    //   $('#js__parami-logo-pc-en1').show()
    // }else {
    //   $('#js__parami-logo-mb1').show()
    //   $('#js__parami-logo-pc-en1').hide()
    // }

    // if (width >= 768 && width < 992) {
    //     $ul.css({
    //         left: '-3px'
    //     });
    // } else if (width < 1200) {
    //     $ul.css({
    //         left: '-23px'
    //     });
    // } else if (width >= 1200) {
    //     $ul.css({
    //         left: '-38px'
    //     });
    // }
  }

  var scrollAnimationPlaying = false;

  function onApplicationItemClick() {
    if ($(this).hasClass('active') || scrollAnimationPlaying) {
      return false;
    }
    scrollAnimationPlaying = true;
    var $li = $('.application-items li');
    var $active = $li.find('a.active');
    var activeIndex = $li.index($active.parent());
    var thisIndex = $li.index($(this).parent());
    $active.removeClass('active');
    var $ul = $('.application-items ul');
    for (var i = activeIndex; i < thisIndex; ++i) {
      var $newElement = $('<li>' + $($li[i]).html() + '</li>');
      $newElement.find('a').click(onApplicationItemClick);
      $ul.append($newElement);
    }
    $(this).addClass('active');
    var oldLeft = parseInt($ul.css('left').replace('px', ''), 10);
    $ul.animate({
      left: oldLeft - (thisIndex - activeIndex) * $(this).width() + 'px',
    }, 200, function () {
      scrollAnimationPlaying = false;
      $('.application-items li:lt(' + thisIndex + ')').remove();
      resetApplicationItemsOffset();
    });
    var className = $(this).find('.application-item-img').attr('class').split(' ')[1];
    $('.application-content').find('div').fadeOut(200);
    $('.application-content').find('div.' + className).fadeIn(200);
  }

  $('.application-items a').click(onApplicationItemClick);

  $('div[b-data-target]').each(function () {
    var target = $(this).attr('b-data-target');
    $(this).html($('div[b-data-id=' + target + ']').html());
  });

  $(window).resize(resetApplicationItemsOffset);

  // $('iframe').attr('src', $('#video-src').text());

  // $(document).on('closing', '.remodal', function() {
  //     $('iframe').attr('src', '');
  //     $('iframe').attr('src', $('#video-src').text());
  // });

  $('#content').scrollspy({target: '#navbar'});

  $('body').on('click', '.logout', logout.bind(this));

  $.i18n({locale: 'en'}).load({
    en: 'i18n/en.json',
    zh: 'i18n/zh.json'
  }).then(function () {
    switchLang4Index(1);
  });

  // alive(function (result) {
  //
  //   if (result.success) {
  //     if (result.data) {
  //       var data = result.data
  //       var html = '<a href="../tpl/kyc_status.html">Hi, ' + data.nickname + ' </a>'
  //       html += '<a class="logout" style="cursor: pointer;">退出</a>'
  //       $('.login-nav-login-wrapper').empty().html(html)
  //     }
  //   }
  //
  //   // $('.left-nav-login').addClass('hidden');
  //   // $('.left-nav-logout').removeClass('hidden');
  //   // $('.login-nav-login-wrapper').addClass('hidden');
  //   // $('.login-nav-logout-wrapper').removeClass('hidden');
  //   // $('.login-nav-user').html(Cookies.get('user'));
  // });

  $('.collapse a').click(function () {
    $('.collapse').collapse('hide');
  })

  // $("#navbar a").on('click', function(event) {
  //     if (this.hash !== "" && this.hash != window.location.hash) {
  //         event.preventDefault();
  //         var hash = this.hash;
  //         $('#content').animate({
  //             scrollTop: $(hash).offset().top
  //         }, 800, function(){
  //         window.location.hash = hash;
  //         });
  //         return false;
  //     }  // End if
  // });

});
