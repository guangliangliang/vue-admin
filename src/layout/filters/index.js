/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-06-24 18:57:15
 * @LastEditors: gll
 * @LastEditTime: 2020-06-24 18:58:30
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
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}
// 方便扩展
export { dateFormatter }
