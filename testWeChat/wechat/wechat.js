/**
 * Created by Administrator on 2018/11/17.
 */
const rp = require('request-promise-native')
const {writeFile, readFile} = require('fs')
const {appID,appsecret} = require('../config')
class Wechat {
  async getAccessToken(){
  const url = `
  https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=
  $(appID)&secret=${appsecret}`
  }
}