function switchLogoTitle(){var t=getMobilePC();"mobile"===t?"en"===Cookies.get("lang")?$(".bacter-theme .navbar-brand").css({paddingTop:"10px",paddingLeft:"15px"}):Cookies.get("lang"):"pc"===t&&("en"===Cookies.get("lang")||Cookies.get("lang"))}function switchLang4Index(t){switchLang(t),$("#main_title").html(randomFadeInString($.i18n("main_title"),5,0)),$("#subtitle").html(randomFadeInString($.i18n("subtitle"),5,1)),$("#subtitle_main").html(randomFadeInString($.i18n("subtitle_main"),5,1)),$("#overview_title").html(randomFadeInString($.i18n("overview"),3,0)),$("#feature_title").html(randomFadeInString($.i18n("feature"),3,0)),$("#advantage_title").html(randomFadeInString($.i18n("advantage"),3,0)),$("#team_title").html(randomFadeInString($.i18n("team"),3,0)),$("#tokenomics_title").html(randomFadeInString($.i18n("tokenomics"),3,0)),$("#co_founder_and_technical_consultant_title").html(randomFadeInString($.i18n("co_founder_and_technical_consultant"),3,0)),$("#investment_title").html(randomFadeInString($.i18n("agency"),3,0)),$("#exchange_title").html(randomFadeInString($.i18n("exchange"),3,0)),$("#partner_title").html(randomFadeInString($.i18n("partner"),3,0)),$("#alliance_title").html(randomFadeInString($.i18n("alliance"),3,0)),$("#contact_title").html(randomFadeInString($.i18n("contact"),3,0)),$("#whitepaper_title").html(randomFadeInString($.i18n("whitepaper"),3,0)),$("#cooperation_title").html(randomFadeInString($.i18n("cooperation"),3,0)),switchLogoTitle(),$(document).attr("title","PARAMI - BUILD AD３ FOR WEB３")}function randomFadeInString(t,n,i){var e="";if(t){e=t.split("").map(function(t){return'<span class="wow fadeIn random-animate" data-wow-duration="'+((Math.random()*n).toFixed(3)-0)+'s" data-wow-delay="'+i+'s">'+t+"</span>"}).join("")}return e}$(document).ready(function(){function t(){$(".application-items ul").css({left:"0"}),"mobile"===getMobilePC()?$("#js__parami-logo").css({width:"40px"}):$("#js__parami-logo").css({width:"60px"})}function n(){if($(this).hasClass("active")||i)return!1;i=!0;var e=$(".application-items li"),a=e.find("a.active"),o=e.index(a.parent()),l=e.index($(this).parent());a.removeClass("active");for(var r=$(".application-items ul"),d=o;d<l;++d){var c=$("<li>"+$(e[d]).html()+"</li>");c.find("a").click(n),r.append(c)}$(this).addClass("active");var s=parseInt(r.css("left").replace("px",""),10);r.animate({left:s-(l-o)*$(this).width()+"px"},200,function(){i=!1,$(".application-items li:lt("+l+")").remove(),t()});var h=$(this).find(".application-item-img").attr("class").split(" ")[1];$(".application-content").find("div").fadeOut(200),$(".application-content").find("div."+h).fadeIn(200)}$(".carousel-slide").slick({dots:!0,prevArrow:!1,nextArrow:!1,autoplay:!0,autoplaySpeed:2e3}),$(".tooltip").tooltipster({delay:50,side:"bottom",theme:"tooltipster-borderless"}),new WOW({scrollContainer:"#content"}).init(),$("#agency").css("min-height",$(window).height()),$("#exchange").css("min-height",$(window).height()),$("#partner").css("min-height",$(window).height()),$("#alliance").css("min-height",$(window).height()),$("#whitepaper").css("min-height",$(window).height()),$("#cooperation").css("min-height",$(window).height()),t();var i=!1;$(".application-items a").click(n),$("div[b-data-target]").each(function(){var t=$(this).attr("b-data-target");$(this).html($("div[b-data-id="+t+"]").html())}),$(window).resize(t),$("#content").scrollspy({target:"#navbar"}),$("body").on("click",".logout",logout.bind(this)),$.i18n({locale:"en"}).load({en:"i18n/en.json",zh:"i18n/zh.json"}).then(function(){switchLang4Index(1)}),$(".collapse a").click(function(){$(".collapse").collapse("hide")})});