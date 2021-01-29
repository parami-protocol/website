
// 'use strict'

var accessid = ''
var accesskey = ''
var host = ''
var policyBase64 = ''
var signature = ''
var callbackbody = ''
var filename = ''
var key = ''
var expire = 0
var g_object_name = ''
var g_object_name_type = 'random_name'
var timestamp
var now = timestamp = Date.parse(new Date()) / 1000;

var token = getToken();



$(function () {

  if(!token) {
    location.href = LOGIN_PAGE + '?redirect=' + location.href
    return
  }

  uploader0.init();
  uploader1.init();
  uploader2.init();

})

function send_request(url) {
  var xmlhttp = null;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  if (xmlhttp != null) {
    var serverUrl = url || GOT_OSS
    xmlhttp.open("GET", serverUrl, false);
    xmlhttp.setRequestHeader('Authorization', 'Bearer ' + token)
    xmlhttp.send(null);
    return xmlhttp.responseText
  } else {
    alert("Your browser does not support XMLHTTP.");
  }
};

function check_object_radio() {
  var tt = document.getElementsByName('myradio');
  for (var i = 0; i < tt.length; i++) {
    if (tt[i].checked) {
      g_object_name_type = tt[i].value;
      break;
    }
  }
}

function get_signature() {
  //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
  var now = timestamp = Date.parse(new Date()) / 1000;
  if (expire < now + 3) {
    var body = send_request()
    var obj = eval("(" + body + ")")['data'];
    host = obj['host']
    policyBase64 = obj['policy']
    accessid = obj['accessid']
    signature = obj['signature']
    expire = parseInt(obj['expire'])
    callbackbody = obj['callback']
    key = obj['dir']
    return true;
  }
  return false;
};

function random_string(len) {
  len = len || 32;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

function get_suffix(filename) {
  var pos = filename.lastIndexOf('.')
  var suffix = ''
  if (pos != -1) {
    suffix = filename.substring(pos)
  }
  return suffix;
}

function calculate_object_name(filename) {
  if (g_object_name_type == 'local_name') {
    g_object_name += "${filename}"
  } else if (g_object_name_type == 'random_name') {
    var suffix = get_suffix(filename)
    g_object_name = key + random_string(10) + suffix
  }
  return ''
}

function get_uploaded_object_name(filename) {
  if (g_object_name_type == 'local_name') {
    var tmp_name = g_object_name
    tmp_name = tmp_name.replace("${filename}", filename);
    return tmp_name
  }
  else if (g_object_name_type == 'random_name') {
    return g_object_name
  }
}

function set_upload_param(up, filename, ret) {
  // console.log('set_upload_param up: ', up)
  if (ret == false) {
    ret = get_signature()
  }
  g_object_name = key;
  if (filename != '') {
    var suffix = get_suffix(filename)
    calculate_object_name(filename)
  }
  var new_multipart_params = {
    'key': finalFile + g_object_name,
    'policy': policyBase64,
    'OSSAccessKeyId': accessid,
    'success_action_status': '200', //让服务端返回200,不然，默认会返回204
    'callback': callbackbody,
    'signature': signature,
  };

  up.setOption({
    'url': host,
    'multipart_params': new_multipart_params
  });

  up.start();
}

var finalDir1 = token.substring(0,2).toLowerCase()
var finalDir2 = token.substring(2,4).toLowerCase()
var finalFile = finalDir1 + '/' + finalDir2 + '/';


var uploader0 = new plupload.Uploader({
  runtimes: 'html5,flash,silverlight,html4',
  browse_button: 'frontImage',
  container: document.getElementById('frontImageContainer'),
  el: $('#frontImageContainer'),
  flash_swf_url: 'lib/plupload/js/Moxie.swf',
  silverlight_xap_url: 'lib/plupload/js/Moxie.xap',
  url: 'http://oss.aliyuncs.com',
  filters: {
    mime_types: [ //只允许上传图片和zip,rar文件
      {title: "Image files", extensions: "jpg,gif,png,bmp,jpeg"},
      {title: "Zip files", extensions: "zip,rar"}
    ],
    max_file_size: '10mb', //最大只能上传10mb的文件
    prevent_duplicates: true //不允许选取重复文件
  },

  init: {
    PostInit: function () {
      // console.log('uploader0 init')
    },

    FilesAdded: function (up, files) {
      // console.log(this)
      this.settings.el.attr('isUpload', '0')
      this.settings.el.siblings('.with-errors').text('')
      // console.log('FilesAdded')
      set_upload_param(uploader0, finalFile, false);
    },

    BeforeUpload: function (up, file) {
      // check_object_radio();
      // console.log('file.name: ', get_uploaded_object_name(file.name))
      set_upload_param(up, file.name, true);
    },

    UploadProgress: function (up, file) {
      // console.log('UploadProgress up: ', up)
      // console.log('UploadProgress file: ', file)
      this.settings.el.siblings('.with-errors').text('uploaded ' + file.percent + '%, please wait...')
      // var d = document.getElementById(file.id);
      // d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
      // var prog = d.getElementsByTagName('div')[0];
      // var progBar = prog.getElementsByTagName('div')[0]
      // progBar.style.width = 2 * file.percent + 'px';
      // progBar.setAttribute('aria-valuenow', file.percent);
    },

    FileUploaded: function (up, file, info) {
      // console.log('FileUploaded up: ', up)
      // console.log('FileUploaded file: ', file)
      // console.log('FileUploaded info: ', info)
      if (info.status === 200) {
        this.settings.el.siblings('.with-errors').text('')
        var fileName = get_uploaded_object_name(file.name)

        var imgUrl = host + '/' + finalFile + fileName;
        this.settings.el.attr('imgUrl', imgUrl)

        this.settings.el.attr('isUpload', '1')
        this.settings.el.find('.upload-image').css({
          'background-image': 'url(' + imgUrl + '?x-oss-process=image/resize,m_lfit,h_750,w_450)'
        })

      } else {
        this.settings.el.siblings('.with-errors').text('uploaded error, please try again!')
      }
    },

    Error: function (up, err) {
      this.settings.el.siblings('.with-errors').text('uploaded error, please try again!')
    }
  }
});

var uploader1 = new plupload.Uploader({
  runtimes: 'html5,flash,silverlight,html4',
  browse_button: 'backImage',
  container: document.getElementById('backImageContainer'),
  el: $('#backImageContainer'),
  flash_swf_url: 'lib/plupload/js/Moxie.swf',
  silverlight_xap_url: 'lib/plupload/js/Moxie.xap',
  url: 'http://oss.aliyuncs.com',
  filters: {
    mime_types: [ //只允许上传图片和zip,rar文件
      {title: "Image files", extensions: "jpg,gif,png,bmp,jpeg"},
      {title: "Zip files", extensions: "zip,rar"}
    ],
    max_file_size: '10mb', //最大只能上传10mb的文件
    prevent_duplicates: true //不允许选取重复文件
  },

  init: {
    PostInit: function () {
      // console.log('uploader1 init')
    },

    FilesAdded: function (up, files) {
      // console.log(this)
      this.settings.el.attr('isUpload', '0')
      this.settings.el.siblings('.with-errors').text('')
      // console.log('FilesAdded')
      set_upload_param(uploader1, finalFile, false);
    },

    BeforeUpload: function (up, file) {
      // check_object_radio();
      // console.log('file.name: ', get_uploaded_object_name(file.name))
      set_upload_param(up, file.name, true);
    },

    UploadProgress: function (up, file) {
      // console.log('UploadProgress up: ', up)
      // console.log('UploadProgress file: ', file)
      this.settings.el.siblings('.with-errors').text('uploaded ' + file.percent + '%, please wait...')
      // var d = document.getElementById(file.id);
      // d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
      // var prog = d.getElementsByTagName('div')[0];
      // var progBar = prog.getElementsByTagName('div')[0]
      // progBar.style.width = 2 * file.percent + 'px';
      // progBar.setAttribute('aria-valuenow', file.percent);
    },

    FileUploaded: function (up, file, info) {
      // console.log('FileUploaded up: ', up)
      // console.log('FileUploaded file: ', file)
      // console.log('FileUploaded info: ', info)
      if (info.status === 200) {
        this.settings.el.siblings('.with-errors').text('')
        var fileName = get_uploaded_object_name(file.name)

        var imgUrl = host + '/' + finalFile + fileName;
        this.settings.el.attr('imgUrl', imgUrl)

        this.settings.el.attr('isUpload', '1')
        this.settings.el.find('.upload-image').css({
          'background-image': 'url(' + imgUrl + '?x-oss-process=image/resize,m_lfit,h_750,w_450)'
        })
      } else {
        this.settings.el.siblings('.with-errors').text('uploaded error, please try again!')
      }
    },

    Error: function (up, err) {
      this.settings.el.siblings('.with-errors').text('uploaded error, please try again!')
    }
  }
});

var uploader2 = new plupload.Uploader({
  runtimes: 'html5,flash,silverlight,html4',
  browse_button: 'holdImage',
  container: document.getElementById('holdImageContainer'),
  el: $('#holdImageContainer'),
  flash_swf_url: 'lib/plupload/js/Moxie.swf',
  silverlight_xap_url: 'lib/plupload/js/Moxie.xap',
  url: 'http://oss.aliyuncs.com',
  filters: {
    mime_types: [ //只允许上传图片和zip,rar文件
      {title: "Image files", extensions: "jpg,gif,png,bmp,jpeg"},
      {title: "Zip files", extensions: "zip,rar"}
    ],
    max_file_size: '10mb', //最大只能上传10mb的文件
    prevent_duplicates: true //不允许选取重复文件
  },

  init: {
    PostInit: function () {
      // console.log('uploader2 init')
    },

    FilesAdded: function (up, files) {
      // console.log(this)
      this.settings.el.attr('isUpload', '0')
      this.settings.el.siblings('.with-errors').text('')
      // console.log('FilesAdded')
      set_upload_param(uploader2, finalFile, false);
    },

    BeforeUpload: function (up, file) {
      // check_object_radio();
      // console.log('file.name: ', get_uploaded_object_name(file.name))
      set_upload_param(up, file.name, true);
    },

    UploadProgress: function (up, file) {
      // console.log('UploadProgress up: ', up)
      // console.log('UploadProgress file: ', file)
      this.settings.el.siblings('.with-errors').text('uploaded ' + file.percent + '%, please wait...')
      // var d = document.getElementById(file.id);
      // d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
      // var prog = d.getElementsByTagName('div')[0];
      // var progBar = prog.getElementsByTagName('div')[0]
      // progBar.style.width = 2 * file.percent + 'px';
      // progBar.setAttribute('aria-valuenow', file.percent);
    },

    FileUploaded: function (up, file, info) {
      // console.log('FileUploaded up: ', up)
      // console.log('FileUploaded file: ', file)
      // console.log('FileUploaded info: ', info)
      if (info.status === 200) {
        this.settings.el.siblings('.with-errors').text('')
        var fileName = get_uploaded_object_name(file.name)
        // var imgBody = send_request(GOT_OSS_IMG_URL +'?fileName=' + finalFile + fileName + '&style=kyc&width=750&height=450')
        // var imgUrl = eval("(" + imgBody + ")")['data'];
        // // console.log('imgUrl: ', imgUrl)
        var imgUrl = host + '/' + finalFile + fileName;
        this.settings.el.attr('imgUrl', imgUrl)

        this.settings.el.attr('isUpload', '1')
        this.settings.el.find('.upload-image').css({
          'background-image': 'url(' + imgUrl + '?x-oss-process=image/resize,m_lfit,h_750,w_450)'
        })
      } else {
        this.settings.el.siblings('.with-errors').text('uploaded error, please try again!')
      }
    },

    Error: function (up, err) {
      this.settings.el.siblings('.with-errors').text('uploaded error, please try again!')
    }
  }
});











