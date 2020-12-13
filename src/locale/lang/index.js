/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-05 14:47:32
 * @LastEditors: gll
 * @LastEditTime: 2020-12-11 14:39:30
 */
import customZhCn from '@/locale/lang/zh-CN'
import customEnUs from '@/locale/lang/en-US'
import zhCnLocale from '@/locale/lang/zh-CN'
import enUsLocale from '@/locale/lang/en-US'

const messages = {
  'zh-CN': Object.assign(zhCnLocale, customZhCn),
  'en-US': Object.assign(enUsLocale, customEnUs)
}

export default messages
