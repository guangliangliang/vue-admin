/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-09 11:14:42
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 11:45:10
 */
import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
const { settings } = require('@/config/reqIndex')
export let curColor = settings.themeColor

// 动态切换主题色
export function changeThemeColor(newColor) {
  var options = {
    newColors: [...forElementUI.getElementUISeries(newColor)]
  }
  return client.changer.changeColor(options, Promise)
    .then(() => {
      curColor = newColor
      localStorage.setItem('theme_color', curColor)
    })
}

export function initThemeColor() {
  const savedColor = localStorage.getItem('theme_color')
  if (savedColor) {
    curColor = savedColor
    changeThemeColor(savedColor)
  }
}

