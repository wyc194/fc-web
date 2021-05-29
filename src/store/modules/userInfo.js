import { login } from '@/api/account/login'
import { getUserInfo } from '@/api/account/user'

export default {
  state: {
    userInfo: {},
    token: null,
    menus: []
  },
  getters: {
    userInfo: state => state.userInfo,
    token: state => state.token,
    menus: state => state.menus
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    REMOVE_TOKEN: (state) => {
      state.token = null
    },
    SET_MENU: (state, menus) => {
      state.menus = menus
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        const { menus } = login(data)
        commit('SET_MENU', menus)
        resolve(menus)
        // login(data).then(resp => {
        //   const { userInfo } = resp
        //   commit('SET_TOKEN', userInfo)
        //   commit('SET_USER_INFO', userInfo)
        //   commit('SET_MENU', userInfo)
        //   resolve(userInfo)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
    getUserInfo({ commit }, data) {
      return new Promise((resolve, reject) => {
        const { menus } = getUserInfo(data)
        commit('SET_MENU', menus)
        resolve(menus)
      })
    }
  }
}
