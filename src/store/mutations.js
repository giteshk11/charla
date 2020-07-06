export default {
  INIT_ACTIVE_USERS: (state, arr) => {
    state.activeChats = arr
  },
  ADD_CHAT_BOX: (state, box) => {
    console.log(state.activeChats)
    let arr = state.activeChats;
    arr.forEach(el => {
      if (el.username !== box.username) {
        state.activeChats.push(box)
      }
    });
  }
}
