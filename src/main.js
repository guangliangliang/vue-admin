/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-11-27 16:37:05
 * @LastEditors: gll
 * @LastEditTime: 2020-12-05 16:47:55
 */
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n


/**
  package.json

    "generateAnalyzFile": "webpack --profile --json > stats.json",
    "analyz": "webpack-bundle-analyzer --port 8888 ./dist/stats.json"

 */

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

//全局指令
import importDirective from '@/layout/directive'
importDirective(Vue)

//国际化
import i18n from '@/locale'

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

//全局组件
import singleIndex from '@/components/Singles'
Vue.use(singleIndex)
//全局过滤器
import * as filters from '@/layout/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


Vue.config.productionTip = false

//系统错误捕获
const errorHandler = (error, vm)=>{
  console.error('抛出全局异常');
  console.error(vm);
  console.error(error);
  
}
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error)=> errorHandler(error,this);
/**
 * .catch(e =>　this.$throw(e))
 */

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
