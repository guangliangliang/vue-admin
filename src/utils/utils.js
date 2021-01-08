/* eslint-disable no-irregular-whitespace */

import config from '@/config'
const { useI18n } = config

/* 函数节流 */
export function throttle(fn, interval) {
  const __self = fn // 保存需要被延迟执行的函数引用
  let timer // 定时器
  let firstTime = true // 是否是第一次调用

  return function() {
    const args = arguments
    const __me = this

    if (firstTime) {
      // 如果是第一次调用，不需延迟执行
      __self.apply(__me, args)
      return (firstTime = false)
    }

    if (timer) {
      // 如果定时器还在，说明前一次延迟执行还没有完成
      return false
    }

    timer = setTimeout(function() {
      // 延迟一段时间执行
      clearTimeout(timer)
      timer = null
      __self.apply(__me, args)
    }, interval || 500)
  }
}

/* 获取图片地址 */
export function getImage(name) {
  // return `http://10.36.234.85:8888/geological/image/${name}.png`
  // return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png'
  return 'http://10.36.234.85:8888/cangchujingyingqiye.png'
}

/* echarts 图片下载 */
export function downloadImpByChart(chartId, filename) {
  // eslint-disable-next-line no-undef
  const myChart = echarts.getInstanceByDom(document.getElementById(chartId))
  const url = myChart.getConnectedDataURL({
    pixelRatio: 5, // 导出的图片分辨率比率,默认是1
    backgroundColor: 'rgba(8, 26, 57, 1)', // 图表背景色
    type: 'png' // 图片类型支持png和jpeg
  })
  const $a = document.createElement('a')
  const type = 'png'
  $a.download = filename + '.' + type
  $a.target = '_blank'
  $a.href = url
  // Chrome and Firefox
  if (typeof MouseEvent === 'function') {
    const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false
    })
    $a.dispatchEvent(evt)
  } else {
    // IE
    const html =
      '' +
      '<body style="margin:0;">' +
      '<img src="' +
      url +
      '" style="max-width:100%;" title="' +
      filename +
      '" />' +
      '</body>'
    const tab = window.open()
    tab.document.write(html)
  }
}

/* 获取当前时间 */
export function getNowDate() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${year}-${conver(month)}-${conver(day)} ${conver(hour)}:${conver(minute)}:${conver(second)}`
}

/* 修改时间格式为 yyyy-mm-dd */
export function formatDate(date) {
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  return `${year}-${month}-${day}`
}

function conver(s) {
  return s < 10 ? '0' + s : s
}

/* 修改时间格式为 yyyy-mm-dd HH */
export function formatDateNew(date) {
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  const hour = date.getHours()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  return `${year}-${month}-${day} ${conver(hour)}`
}

/* 获取当前时间前一个月 */
export function getNowBeforeDate() {
  const date = new Date()
  date.setMonth(date.getMonth() - 1)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${year}-${conver(month)}-${conver(day)} ${conver(hour)}:${conver(minute)}:${conver(second)}`
}

/* 删除数组中指定元素 */
export function arrRemove(arr, val) {
  const index = arr.indexOf(val)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function getRandomNum() {
  const Min = 100
  var Range = 100 * 100 * 100 * 100 - Min
  var Rand = Math.random()
  return (Min + Math.round(Rand * Range)) + ''
}
const recursion = (data, current) => {
  var result = null
  if (!data) {
    return
  }
  for (var i in data) {
    var item = data[i]
    // eslint-disable-next-line eqeqeq
    if (item.catalogueId == current) {
      result = item
      break
    } else if (item.menu && item.menu.length > 0) {
      result = recursion(item.menu, current)
    }
  }
  return result
}
const recursionCname = (data, current) => {
  var result = null
  if (!data) {
    return
  }
  for (var i in data) {
    var item = data[i]
    // eslint-disable-next-line eqeqeq
    if (item.chineseName == current) {
      result = item
      break
    } else if (item.menu && item.menu.length > 0) {
      result = recursionCname(item.menu, current)
    }
  }
  return result
}
const recursionEname = (data, current) => {
  var result = null
  if (!data) {
    return
  }
  for (var i in data) {
    var item = data[i]
    // eslint-disable-next-line eqeqeq
    if (item.englishName == current) {
      result = item
      break
    } else if (item.menu && item.menu.length > 0) {
      result = recursionEname(item.menu, current)
    }
  }
  return result
}
// 进行类型判断
var is = {
  types: ['Array', 'Boolean', 'Date', 'Number', 'Object', 'Function', 'RegExp', 'String', 'Window', 'HTMLDocument']
}
is.types.map(item => {
  is[item] = (function(type) {
    return function(obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']'
    }
  })(item)
})

const showTitle = (item, vm) => {
  let { title } = item.meta
  if (!title) return
  if (useI18n) {
    title = vm.$t(item.name)
  } else {
    title = (item.meta && item.meta.title) || item.name
  }
  return title
}
// 全屏
function fullScreen() {
  var element = document.documentElement
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  }
}

// 退出全屏
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

/**
 * [isFullscreen 判断浏览器是否全屏]
 * @return [全屏则返回当前调用全屏的元素,不全屏返回false]
 */
function isFullscreen() {
  return document.fullscreenElement    ||
     document.msFullscreenElement  ||
     document.mozFullScreenElement ||
     document.webkitFullscreenElement || false
}

export { recursion, recursionCname, fullScreen, exitFullscreen, isFullscreen, recursionEname, is, showTitle }
