/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-05 14:37:22
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-08 16:08:09
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getLocal } from '@/utils/store'
import messages from '@/locale/lang'
import locale from 'element-ui/lib/locale'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
const lang = localLang || getLocal('local')
Vue.config.lang = lang

// vue-i18n 6.x+写法
Vue.locale = () => {}
const i18n = new VueI18n({
  locale: lang,
  messages
})

locale.i18n((key, value) => { i18n.t(key, value) })

export default i18n

// vue-i18n 5.x写法
// Vue.locale('zh-CN', Object.assign(zhCnLocale, customZhCn))
// Vue.locale('en-US', Object.assign(zhTwLocale, customZhTw))
// Vue.locale('zh-TW', Object.assign(enUsLocale, customEnUs))
