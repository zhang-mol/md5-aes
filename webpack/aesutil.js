// util 文件
var aes = require('/aes.js'); //引入aes类包
//URl: https://github.com/wzqwzq666/JS_AESencode/blob/master/utils/aes.js

//十六位十六进制数作为秘钥
// var aeskey = aes.CryptoJS.enc.Utf8.parse("fdb3f2de19edf45943189a32afa02495");
//十六位十六进制数作为秘钥偏移量
var aesiv = aes.CryptoJS.enc.Utf8.parse('');

// 加密
function encrypt(key, data) {
  var srcs = aes.CryptoJS.enc.Utf8.parse(data);
  var aeskey = aes.CryptoJS.enc.Utf8.parse(key)
  var encrypted = aes.CryptoJS.AES.encrypt(srcs, aeskey, { iv: srcs, mode: aes.CryptoJS.mode.ECB, padding: aes.CryptoJS.pad.Pkcs7 });
  //返回base64加密结果
  return encrypted.ciphertext.toString().toUpperCase()
}

//解密
function decrypt(key, data) {
  // data是base64编码数据
  var aeskey = aes.CryptoJS.enc.Utf8.parse(key)
  var decrypt = aes.CryptoJS.AES.decrypt(data, aeskey, { iv: aesiv, mode: aes.CryptoJS.mode.ECB, padding: aes.CryptoJS.pad.Pkcs7 });
  var decryptedStr = decrypt.toString(aes.CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

// module.exports = {
//   encrypt: encrypt,
//   decrypt: decrypt
// }

export { encrypt, decrypt }