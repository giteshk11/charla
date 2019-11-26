<template>
  <div id="app">
    <b-container fluid>
      <div class="chat-box">
        <ChatBox :username="username" />
        <hr class="mx-2" />
        <ChatInput :senderData="senderData" :username="username" />
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
      username: ''
    }
  },
  mounted() {
    this.username = prompt('Enter a username')
    this.$socket.emit('initializeUser', { username: this.username })
  },
  methods: {
    senderData() {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: aquamarine;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
