export default {
  state: {
    events: {}
  },
  getters: {
    events: state => state.events
  },
  mutations: {
    SET_EVENTS: (state, events) => {
      state.events = { ...events }
    }
  },
  actions: {
    setEvents({ commit }, data) {
      commit('SET_EVENTS', data)
    }
  }
}
