import customZhCn from '@/locale/lang/zh-CN'
import customEnUs from '@/locale/lang/en-US'
import zhCnLocale from '@/locale/lang/zh-CN'
import enUsLocale from '@/locale/lang/en-US'

const messages = {
  'zh-CN': Object.assign(zhCnLocale, customZhCn),
  'en-US': Object.assign(enUsLocale, customEnUs)
}

export default messages