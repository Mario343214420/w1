/**
 * Created by Administrator on 2018/11/17.
 */
const rp = require('request-promise-native')
const {writeFile, readFile} = require('fs')
const {appID,appsecret} = require('../config')
class Wechat {
  async getAccessToken(){
  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=
  $(appID)&secret=${appsecret}`
  const result = await rp({method:'GET',url,json:true})
  result.expires_in = Date.now() +7200000 - 300000
    
    return result
  }
  saveAccessToken(filePath,accessToken){
    return new Promise((resolve,reject)=>{
      writeFile(filePath,Json.stringify(accessToke),err=>{
        if(!err) {
          resolve()
        }else{
          reject('saveAccessToken方法的应用出错了'+err)
        }
      })
    })
  }
  readAccessToken(filePath){
    return new Promise((resolve,reject)=>{
      readFile(filePath,(err,data)=>{
        if(!err) {
          resolve(JSON.parse(data.toString()))
        }else{
          reject('readAcessToken方法出了问题:' + err)
        }
      })
    })
  }
  isValidAccessToken({expires_in}){
    return Date.now()<expires_in
  }
}
(async()=>{
  const w = new Wechat()
  w.readAccessToken('./accessToken.txt')
    .then(async res => {
      if (w.isValidAccessToken(res)){
        console.log(res);
        console.log('没过期，正常使用');
      }else{
        const accessToken = await  w.getAccessToken()
        await w.saveAccessToken('./accessToken.txt,accessToken')
      }
    })
    .catch(async err => {
      const accessToken = await w.getAccessToken()
      await w.saveAccessToken('./accessToken.txt',accessToken)
    })
})()