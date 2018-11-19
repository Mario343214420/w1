/**
 * Created by Administrator on 2018/11/19.
 */
const prefix = 'https://api.weixin.qq.com/cgi-bin/'
module.exports = {
  access_token:`${prefix}token?grant_type=client_credential&`,
  menu:{
    create:`${prefix}`,
    delete:`${prefix}`
  },
  tag:{
    create:`${prefix}`,
    getUsers:`${prefix}`,
    batch:`${prefix}`
  }
}