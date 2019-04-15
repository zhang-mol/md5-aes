// util 文件
// var aes = require('./aes.js'); //引入aes类包
//URl: https://github.com/wzqwzq666/JS_AESencode/blob/master/utils/aes.js

//十六位十六进制数作为秘钥
// var aeskey = aes.CryptoJS.enc.Utf8.parse("fdb3f2de19edf45943189a32afa02495");
//十六位十六进制数作为秘钥偏移量
var aesiv = CryptoJS.enc.Utf8.parse('');

// 加密
function encrypt(key, data) {
  var srcs = CryptoJS.enc.Utf8.parse(data);
  var aeskey = CryptoJS.enc.Utf8.parse(key)
  var encrypted = CryptoJS.AES.encrypt(srcs, aeskey, { iv: srcs, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
  //返回base64加密结果
  return encrypted.ciphertext.toString().toUpperCase()
}

//解密
function decrypt(key, data) {
  // data是base64编码数据
  var aeskey = CryptoJS.enc.Utf8.parse(key)
  var decrypt = CryptoJS.AES.decrypt(data, aeskey, { iv: aesiv, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
