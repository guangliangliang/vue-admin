/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-07-03 16:32:04
 * @LastEditors: gll
 * @LastEditTime: 2020-07-18 09:46:49
 */

const deepObjectCopy = (params) => {
  var obj
  if (typeof params === 'object') {
    if (Array.isArray(params)) {
      obj = []
      for (var i = 0; i < params.length; i++) {
        obj.push(arguments.callee(params[i]))
      }
    } else {
      obj = {}
      for (var c in params) {
        obj[c] = arguments.callee(params[c])
      }
    }
  } else { return params }
  return obj
}

const checkObjIsNull = (obj) => {
  return objectKeys(obj).length
}
// 删除对象属性
const removeProperty = prop => ({ [prop]: _, ...rest }) => rest// removeProperty('password')(user1)
const addProperty = prop => (obj, key, value) => {
  return { ...obj, key: value }
}

const objectKeys = (obj) => {
  return Object.keys(obj)
}
const objectValues = (obj) => {
  return Object.values(obj)
}
const objectEntries = (obj) => {
  return Object.entries(obj)
}

const objectHasOwnProperty = (obj, key) => {
  return obj.hasOwnProperty(key)
}
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 }
}
const getObjectLength = (obj) => {
  let result = -1
  if (obj instanceof Object) {
    result = Object.keys(obj).length
  }
  return result
}

const ObjectArraySort = (arr = [], sortName = 'value', flag = true) => {
  function compare(p) { // 这是比较函数
    return function(m, n) {
      var a = m[p]
      var b = n[p]
      return flag ? b - a : a - b
    }
  }
  return arr.sort(compare(sortName))
}

const objectGlobal = {
  addProperty,
  removeProperty,
  mergeObjects,
  getObjectLength,
  checkObjIsNull,
  deepObjectCopy,
  ObjectArraySort,
  objectHasOwnProperty, objectEntries, objectValues
}
export { objectGlobal }
