!function(e){"use strict";e.i18n.languages.os=e.extend({},e.i18n.languages.default,{convertGrammar:function(e,a){var i,t,c,s;switch(i="мæ",t="",c="",s="",e.match(/тæ$/i)?(e=e.slice(0,-1),i="æм"):e.match(/[аæеёиоыэюя]$/i)?t="й":e.match(/у$/i)?e.slice(-2,-1).match(/[аæеёиоыэюя]$/i)||(t="й"):e.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i)||(c="-"),a){case"genitive":s=c+t+"ы";break;case"dative":s=c+t+"æн";break;case"allative":s=c+i;break;case"ablative":s="й"===t?c+t+"æ":c+t+"æй";break;case"superessive":s=c+t+"ыл";break;case"equative":s=c+t+"ау";break;case"comitative":s=c+"имæ"}return e+s}})}(jQuery);