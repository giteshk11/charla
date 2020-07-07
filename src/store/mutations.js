export default {
  INIT_ACTIVE_USERS: (state, payload) => {
    state.activeUsers = payload.data.map(el => {
      el.component = payload.component
      return el
    })
  },
  ADD_CHAT_BOX: (state, box) => {
    if (state.activeChats.length !== 0) {
      state.activeChats.forEach(el => {
        if (el.receiver !== box.receiver) {
          state.activeChats.push(box)
        }
      })
    } else {
      state.activeChats.push(box)
    }
  }
}
