'use strict';
const crypto = require('crypto');

const decryptIv = (encMessage, encMethod, secret, iv) => {
  let decryptor = crypto.createDecipheriv(encMethod, secret, iv);
  return (
    decryptor.update(encMessage, 'base64', 'utf8') + decryptor.final('utf8')
  );
};

module.exports = {
  decryptIv,
  decryptOpenssl: (message, api) => {
    message = message.toString();
    if (message.length < 1) {
      return null;
    }
    if (message.includes(',')) {
      let messageArr = message.split(',', 2);
      let iv = new Buffer(messageArr[0], 'base64');
      let encMessage = new Buffer(messageArr[1], 'base64');
      return decryptIv(encMessage, 'AES-256-CBC', api, iv);
    } else {
      throw new Error('Invalid Message Format, message:' + message);
    }
  },
};
