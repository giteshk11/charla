<template>
  <b-container fluid class="chat-box">
    <ChatBox :username="username" :userData="userData" class="overflow-auto" style="height:90%" />
    <hr class="mx-2" />
    <ChatInput :senderData="senderData" :username="username" :receiver="receiver" class="mt-4" />
  </b-container>
</template>

<script>
import ChatBox from './ChatBox'
import ChatInput from './ChatInput'

export default {
  name: 'ChatArea',
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
    this.username = this.$route.params.userData.from
    this.$socket.emit('initializeUser', { username: this.username })
    this.receiver = this.$route.params.userData.to
  },
  methods: {
    senderData(data) {
      this.userData = data
    }
  }
}
</script>

<style scoped>
.chat-box {
  height: 100%;
}
</style>