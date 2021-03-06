/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-05 16:35:34
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 21:17:11
 */
import { preset } from '@/config/default/animate.config'
export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'Vue Admin Template',

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
    pro: 'https://produce.com'
  },
  settings: {
    animate: {
      name: 'bounce',
      direction: 'left',
      disabled: false
    },
    animates: preset,
    mode: 'vertical', // vertical  或者 horizontal
    themeColor: '#f67a17',
    fixedHeader: false
  }
}
