/**
 * Created by Administrator on 2018/11/17.
 */
module.exports = message => {
  let options = {
    toUserName: message.FromUserName,
    fromUserName: message.ToUserName,
    createTime: Date.now(),
    msgType: 'text'
  }
  
  let content = '你在说啥';
  if (message.MsgType === 'text') {
    if (message.Content === '1') {
      content = '111111'
    } else if (message.Content === '2') {
      content = '222222'
    } else if (message.Content.includes('a') || message.Content.includes('d')) {
      content = 'aaaaaaa'
    } else if (message.Content.includes('b')) {
      content = 'bbbbbbb'
    } else if (message.Content.includes('c')) {
      options.msgType = 'news'
      options.title = ''
      options.description = ''
      options.picUrl = ''
      options.url = 'http://www.baidu.com'
    }
  } else if (message.MsgType === 'voice') {
    //说明用户发送的是语音消息
    content = `语音识别结果为: ${message.Recognition}`;
  } else if (message.MsgType === 'location') {
    //用户主动发送位置
    content = `纬度：${message.Location_X}  经度：${message.Location_Y} 地图的缩放大小：${message.Scale} 位置详情：${message.Label}`;
  } else if (message.MsgType === 'event') {
    if (message.Event === 'subscribe') {
      //关注事件/订阅事件
      content = '欢迎您关注公众号~';
      if (message.EventKey) {
        //说明扫了带参数的二维码
        content = '欢迎您关注公众号~, 扫了带参数的二维码';
      }
    } else if (message.Event === 'unsubscribe') {
      //取消关注事件
      console.log('无情取关~');
    } else if (message.Event === 'LOCATION') {
      //用户初次访问公众号，会自动获取地理位置
      content = `纬度：${message.Latitude} 经度：${message.Longitude}`;
    } else if (message.Event === 'CLICK') {
      //用户初次访问公众号，会自动获取地理位置
      content = `用户点击了：${message.EventKey}`;
    }
  }
  options.content = content;
  
  
  return options;
}