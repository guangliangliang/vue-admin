/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-05-24 15:51:51
 * @LastEditors: gll
 * @LastEditTime: 2020-06-20 21:01:12
 */
export const WBS = function(obj) {
  window.WebSocket = window.WebSocket || window.MozWebSocket
  if (!window.WebSocket) {
    // 检测浏览器支持
    console.error('错误: 浏览器不支持websocket')
    return
  }
  // socket对象
  this.socket = null
  // 配置
  this.config = obj
  // 心跳状态  为false时不能执行操作 等待重连
  this.isHeartflag = false
  // 重连状态  避免不间断的重连操作
  this.isReconnect = false
  // 返回的数据
  this.msg = null
  /* 初始化 socket 传入注册信息  */
  this.initWebSocket(this.config.message)
}
// 初始化
WBS.prototype.initWebSocket = function(message) {
  const url =
      this.config.ip ||
      this.config.protocol + this.config.host + this.config.port
  const that = this
  this.socket = new WebSocket(url)
  this.socket.onmessage = function(e) {
    console.log('接受数据')
    /* 解析拿到的json */
    try {
      that.msg = JSON.parse(e.data)
    } catch (e) {
      that.msg = e.data
    }
    that.config.messageHandler && that.config.messageHandler(e)
  }
  this.socket.onopen = function(e) {
    that.isHeartflag = true // 心跳开始 连接成功
    console.log('链接成功')
    that.config.openHandler && that.config.openHandler(e)
    message && that.sendMessage(message)
  }
  this.socket.onclose = function(e) {
    console.log('链接关闭')
    that.socket = null // 清理
    that.config.closeHandler && that.config.closeHandler(e)
  }
  this.socket.onerror = function(e) {
    that.isHeartflag = false // 心跳暂停 连接断开
    console.log('WebSocket连接发生错误', e)
    that.reConnect(message)
  }
}
// 重连
WBS.prototype.reConnect = function(message) {
  if (this.isReconnect) return // 如果正在重连 就不调用了
  this.isReconnect = true // 重连开始，状态置为true
  setTimeout(() => {
    this.initWebSocket(message)
    this.isReconnect = false
  }, 60000) // 做一定延迟的重连,设置延迟避免请求过多
}

// 发送消息
WBS.prototype.sendMessage = function(params) {
  if (!this.isHeartflag) {
    console.log('连接通道断开...')
    return
  }
  this.socket.send(JSON.stringify(params))
}

// 关闭通道
WBS.prototype.closeConnect = function() {
  if (this.socket) {
    this.socket.close()
    this.socket = null
  }
}
