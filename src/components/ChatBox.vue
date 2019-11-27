<template>
  <div class="msg-display">
    <ChatMessage
      v-for="(message,index) in messages"
      :message="message"
      :key="index"
      :username="username"
    ></ChatMessage>
  </div>
</template>

<script>
import ChatMessage from './ChatMessage'

export default {
  name: 'ChatBox',
  components: {
    ChatMessage
  },
  props: {
    username: String
  },
  data() {
    return {
      messages: []
    }
  },
  sockets: {
    receiveData(data) {
      this.messages.push(data)
    }
  }
}
</script>

<style scoped>
.msg-display {
  height: 75vh;
}
</style>
