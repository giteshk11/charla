export default {
  initActiveUsers: ({ commit }, arr) => {
    commit('INIT_ACTIVE_USERS', arr)
  },
  addChatBox: ({ commit }, box) => {
    commit('ADD_CHAT_BOX', box)
  }
}

