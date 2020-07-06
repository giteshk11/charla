export default {
    getChatBox: (state, username) => {
        return state.activeChats.forEach(element => {
            if (element.username === username) {
                return element
            }
        });
    }
}
