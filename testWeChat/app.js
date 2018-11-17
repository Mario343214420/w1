
const express = require('express');
const handleRequest = require('./reply/handleRequest')
const app = express();
// const config = {
//   appID: 'wx4978781611d6785c',
//   appsecret: '2e62037506b7e5f5475f9d9d3e9624a3',
//   token: 'mario343214420'
// }
app.use(handleRequest())
app.listen(4000, err => {
  if (!err) console.log('服务器启动成功了~');
  else console.log(err);
})