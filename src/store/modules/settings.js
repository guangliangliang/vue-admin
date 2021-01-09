/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2020-12-24 09:46:02
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 14:34:02
 */
import defaultSettings from '@/config'
const { showSettings, fixedHeader, sidebarLogo, settings } = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  ...settings
}
const settingsTemp = {}
Object.keys(settings).map(item => {
  settingsTemp[item] = state => state[item]
})
const getters = {
  ...settingsTemp
}
const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

