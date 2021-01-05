/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-05-24 15:52:09
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-05 16:51:31
 */
import axios from 'axios'
const getService = (ip) => {
  // create an axios instance
  const service = axios.create({
    baseURL: ip, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 200000 // request timeout
  })
  // 异常拦截处理器
  /*  const errorHandler = (error) => {
    const status = get(error, 'response.status')
    switch (status) {
      case 400: error.message = '请求错误'; break
      case 401: error.message = '未授权，请登录'; break
      case 403: error.message = '拒绝访问'; break
      case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
      case 408: error.message = '请求超时'; break
      case 500: error.message = '服务器内部错误'; break
      case 501: error.message = '服务未实现'; break
      case 502: error.message = '网关错误'; break
      case 503: error.message = '服务不可用'; break
      case 504: error.message = '网关超时'; break
      case 505: error.message = 'HTTP版本不受支持'; break
      default: break
    }
    return Promise.reject(error)
  } */

  // request拦截器
  service.interceptors.request.use(config => {
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
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    })
  return service
}
const request = getService(process.env.VUE_APP_BASE_API)
export {
  request
}
