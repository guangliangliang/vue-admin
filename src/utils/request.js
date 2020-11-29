/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-05-24 15:52:09
 * @LastEditors: gll
 * @LastEditTime: 2020-07-02 14:42:30
 */
import axios from 'axios'
import { Message, Loading } from 'element-ui'
const getService = (ip) => {
  // create an axios instance
  const service = axios.create({
    baseURL: ip, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 200000 // request timeout
  })
  // 定义请求次数(用于判断请求是否已经全部响应)
  let requestCount = 0
  let loading
  // (客户端请求前)显示loading
  function showLoading() {
    if (requestCount === 0) {
      loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: '',
        background: 'rgba(0, 0, 0, 0.58)'
      })
    }
    requestCount++
  }
  let timer
  // (服务器响应后)尝试隐藏loading
  function tryHideLoading() {
    requestCount--
    // 采用setTimeout是为了解决一个请求结束后紧接着有另一请求发起导致loading闪烁的问题
    timer = setTimeout(() => {
      if (requestCount === 0) {
        loading.close()
        clearTimeout(timer)
      }
    })
  }

  // request拦截器
  service.interceptors.request.use(config => {
    // if (config.timeout > 20000) {
    //     showLoading()
    // }
    return config
  }, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  })
  // response interceptor
  service.interceptors.response.use(
    /**
         * If you want to get http information such as headers or status
         * Please return  response => response
         */

    /**
         * Determine the request status by custom code
         * Here is just an example
         * You can also judge the status by HTTP Status Code
         */
    response => {
      const { status, data: res } = response
      if (res.code !== 200 && status !== 200) {
        // Message({
        //   message: res.msg || 'Error',
        //   type: 'error',
        //   duration: 3 * 1000
        // })
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        // tryHideLoading()
        return res
      }
    },
    error => {
      console.log('err' + error) // for debug
      // Message({
      //   message: error.message,
      //   type: 'error',
      //   duration: 3 * 1000
      // })
      return Promise.reject(error)
    }
  )
  return service
}
const request = getService(process.env.VUE_APP_BASE_API) 
export {
  request
}
