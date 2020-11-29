/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-07-03 16:31:56
 * @LastEditors: gll
 * @LastEditTime: 2020-07-16 10:54:10
 */
/**
 * @description: 数组的去重
 * @param {type}
 * @return:
 * @author: gll
 */
const arrayUniq = (arr) => {
  let resultArray = []
  if (Array.isArray(arr)) {
    resultArray = arr.reduce((pre, cur) => {
      if (!pre.includes(cur)) {
        return pre.concat(cur)
      } else {
        return pre
      }
    }, [])
    // resultArray = [...new Set(arr)]
  }
  return resultArray
}
/**
   * @description: 数组对象的去重
   * @param {type}
   * @return:
   * @author: gll
   */
const arrayObjectUniq = (arr, name, singleFlag = false) => {
  if (Array.isArray(arr)) {
    var obj = {}
    arr = arr.reduce(function(item, next) {
      obj[next[name]] ? '' : obj[next[name]] = true && item.push(next)
      return item
    }, [])
    if (singleFlag) {
      // 放回当前对应的属性的数组
      arr = arr.map(item => {
        return item[name]
      })
    }
  }
  return arr
}
// 累加
const Accumulation = (...vals) => {
  return vals.reduce((t, v) => t + v, 0)
}
// 累乘
const multiplicative = (...vals) => {
  return vals.reduce((t, v) => t * v, 1)
}

// 去掉数组里面的六个虚值undefined null NaN 0 '' false
const takeOutVirtualValue = (arr) => {
  return arr.filter(Boolean)
}

// 多个数组合并支持二维数组的时候也会进行全部合并
const mergeArrays = (arr1, ...arr2) => {
  return [...arr1, ...arr2.flat(2)]
}

// 数组的浅拷贝
const lightCopy = (arr) => {
  return [...arr]
}
// 数组分割
const Chunk = (arr = [], size = 1) => {
  return arr.length ? arr.reduce((t, v) => (t[t.length - 1].length === size ? t.push([v]) : t[t.length - 1].push(v), t), [[]]) : []
}
// 数组过滤
const Difference = (arr = [], oarr = []) => {
  return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), [])
}
// 数组扁平
function Flat(arr = []) {
  return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), [])
}
// 数组去重
function Uniq(arr = []) {
  return arr.reduce((t, v) => t.includes(v) ? t : [...t, v], [])
}
function Max(arr = []) {
  return arr.reduce((t, v) => t > v ? t : v)
}

function Min(arr = []) {
  return arr.reduce((t, v) => t < v ? t : v)
}
// 数组成员个数统计
function Count(arr = []) {
  return arr.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t), {})
}
// 数组成员特性分组为对象
function arrayGroupObject(arr = [], key) {
  // eslint-disable-next-line no-sequences
  return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {}
}
// 数组分组为数组  [{name:'',value:[]},{name:'',value:[]}
function arrayGroupArray(arr = [], key) {
  return key ? arr.reduce((t, v) => { t.filter(item => item.name === v[key])[0] ? t.filter(item => item.name === v[key])[0].data.push(v) : t.push({ name: v[key], data: [v] }); return t }, []) : []
}

// 斐波那契数列
function Fibonacci(len = 2) {
  const arr = [...new Array(len).keys()]
  return arr.reduce((t, v, i) => (i > 1 && t.push(t[i - 1] + t[i - 2]), t), [0, 1])
}
// 默认从大到小 false从小到大
const ObjectArraySort = (arr = [], sortName = 'value', flag = true) => {
  function compare(p) { // 这是比较函数
    return function(m, n) {
      var a = parseFloat(m[p])
      var b = parseFloat(n[p])
      return flag ? b - a : a - b
    }
  }
  return arr.sort(compare(sortName))
}
/*
        //数组转对象
        const people = [
            { area: "GZ", name: "YZW", age: 27 },
            { area: "SZ", name: "TYJ", age: 25 }
        ];
        const map = people.reduce((t, v) => {
            const { name, ...rest } = v;
            t[name] = rest;
            return t;
        }, {}); */
// 数组填充
function Fill(arr = [], val = '', start = 0, end = arr.length) {
  if (start < 0 || start >= end || end > arr.length) return arr
  return [
    ...arr.slice(0, start),
    ...arr.slice(start, end).reduce((t, v) => (t.push(val || v), t), []),
    ...arr.slice(end, arr.length)
  ]
}
const myReverse2 = (arr = []) => {
  return arr.reduceRight((t, v) => (t.push(v), t), [])
}

const myReverse = (arr = []) => {
  return arr.reduceRight((prev, cur) => [...prev, cur], []) // 也可以返回逗号表达式 (prev.push(cur), prev)
}
// 删除指定索引的数组
const delElByIndex = (arr, index) => {
  var sliced = arr.slice(index + 1)// 将需要删除元素后续的元素截取出来保存
  arr.length = index// 将需要删除的元素以及后续的所有元素删除
  return mergeArrays(arr, sliced)
}

const arrayGlobal = {
  arrayObjectUniq,
  arrayUniq,
  mergeArrays,
  delElByIndex,
  Accumulation,
  myReverse,
  myReverse2,
  Fill,
  Fibonacci, arrayGroupObject, arrayGroupArray, Count, Min, Max, Uniq, Flat, Difference, Chunk, lightCopy, takeOutVirtualValue, multiplicative
}
export { arrayGlobal, mergeArrays, arrayGroupObject, arrayGroupArray, ObjectArraySort }
