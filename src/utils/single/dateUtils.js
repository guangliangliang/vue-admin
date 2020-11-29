/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-07-03 16:33:11
 * @LastEditors: gll
 * @LastEditTime: 2020-07-10 11:32:32
 */
// 时间格式化  dateFormatter('YYYY-MM-DD')
const dateFormatter = (formatter, date) => {
  date = date ? new Date(date) : new Date()
  const Y = date.getFullYear() + ''
  const M = date.getMonth() + 1
  const D = date.getDate()
  const H = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  return formatter
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD|dd/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/SS|ss/g, (s < 10 ? '0' : '') + s)
}

/**
 * @description:  通过传值来获取 2020/05/12 21:43:29 类型的时间格式
 * @param {Number} number 0代表当前时间, 正数代表几小时之后 负数代表之前几小时
 * @return:
 * @author: gll
 */
const formatDate = (number = 0) => {
  const tempData = new Date()
  let date = null
  if (number > 0) {
    date = new Date(tempData + parseInt(number) * 60 * 60 * 1000) // 几小时后
  } else if (number < 0) {
    date = new Date(tempData - parseInt(Math.abs(number)) * 60 * 60 * 1000) //  几小时前
  } else {
    date = tempData
  }
  return date
}

// 获取当前时间对象的年月日,时分秒
const getDateSingleFieldData = (date = new Date()) => {
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = date.getDate()
  day = day < 10 ? '0' + day : day
  let hours = date.getHours()
  hours = hours < 10 ? '0' + hours : hours
  let minute = date.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var second = date.getSeconds()
  second = minute < 10 ? '0' + second : second
  return { year, month, day, hours, minute, second }
}

// 获取几天前和几天后的事件  正数是几天后,负数是几天前
const getAppointDateData = (day) => {
  const date = new Date()
  date.setDate(date.getDate() + day)
  return date
}

export { getDateSingleFieldData, getAppointDateData, dateFormatter, formatDate }
