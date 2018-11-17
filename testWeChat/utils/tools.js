/**
 * Created by Administrator on 2018/11/16.
 */
//工具包
const {parseString} = require('xml2js')
module.exports = {
  getUserDataAsync (req){
    return new Promise(resolve => {
      let result = ''
      req
        .on('data', data => {
          console.log(data);//是buffer二进制需要进行字符串转换
          result += data.toString()
        })
        .on('end', () => {
          console.log('用户接收数据完成');
          resolve(result)
        })
      
    })
    
    
  },
  parseXMLDataAsync (xmlData) {
    return new Promise((resolve, reject) => {
      parseString(xmlData, {trim: true}, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject('parseXMLDataAsync方法出了问题：' + err);
        }
      })
    })
  },
  formatMessage ({xml}) {
    // const {xml} = jsData
    //去掉xml
    //去掉[]
    let result = {};
    //遍历对象
    for (let key in xml) {
      //获取属性值
      let value = xml[key];
      //去掉[]
      result[key] = value[0];
    }
  
    return result;
  }
}