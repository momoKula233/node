const WechatApi = require('wechat-api');
const fs = require('fs');
const api = new WechatApi('wx818254b4c2b5bb7e', '49a35f5b9483e8f0011cf568b69c0d66', (cb) => {
  fs.readFile('access_token.txt', 'uft8', (err, txt) => {
    if (err) return cb(err);
    cb(null, JSON.parse(txt));
  });
}, (token, cb) => {
  fs.writeFile('access_token.txt', JSON.stringify(token), cb)
});

module.export = api;