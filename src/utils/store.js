/*
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-07-11 13:21:26
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-08 16:03:50
 */
import store from '@/store'
/**
 * @description: 创建一个实体用来存放子实体,方便删除的时候使用
 * @param {type}
 * @return:
 * @author: gll
 */
const getGetters = () => {
  return store.getters || {}
}

const getLocal = () => {
  return getGetters()?.['app/local'] ?? {}
}

export { getGetters, getLocal }
