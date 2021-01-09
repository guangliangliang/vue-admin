/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-09 11:13:16
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 11:36:02
 */
const { settings } = require('../src/config/reqIndex')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
module.exports = new ThemeColorReplacer({
  fileName: 'css/theme-colors.[contenthash:8].css',
  matchColors: [
    ...forElementUI.getElementUISeries(settings.themeColor) // element-ui主色系列
    // '#0cdd3a', //自定义颜色
  ],
  changeSelector: forElementUI.changeSelector,
  isJsUgly: process.env.NODE_ENV !== 'development'
  // injectCss: false,
  // resolveCss(resultCss) { // optional. Resolve result css code as you wish.
  //   return resultCss + youCssCode
  // }
})
