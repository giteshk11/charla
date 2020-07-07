export default {
    getChatBox: state => username => {
        return state.activeChats.find(element => element.receiver === username)
    }
}
