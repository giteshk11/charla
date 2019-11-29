<template>
  <div id="app">
    <b-container fluid>
      <div class="chat-box pt-2">
        <ChatBox :username="username" :userData="userData" class="chat-message-area" />
        <hr class="mx-2" />
        <ChatInput :senderData="senderData" :username="username" :receiver="receiver" class="mt-4" />
      </div>
    </b-container>
  </div>
</template>

<script>
import ChatBox from './components/ChatBox'
import ChatInput from './components/ChatInput'

export default {
  name: 'app',
  components: {
    ChatBox,
    ChatInput
  },
  data() {
    return {
      username: '',
      receiver: '',
      userData: {}
    }
  },
  mounted() {
    this.username = prompt('Enter a username')
    this.$socket.emit('initializeUser', { username: this.username })
    this.receiver = prompt('Enter receiever name')
  },
  methods: {
    senderData(data) {
      this.userData = data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #35495e;
  color: #2c3e50;
}
.chat-box {
  height: 100vh;
}
.chat-message-area {
  height: 85vh;
}
</style>
