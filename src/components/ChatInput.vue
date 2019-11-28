<template>
  <div class="input-box">
    <b-form inline>
      <b-form-input
        v-model="message"
        class="input-area mx-2"
        placeholder="Type your message here..."
        trim
      ></b-form-input>
      <b-button class="btn-send" variant="primary" @click.stop.prevent="sendData">Send</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'ChatInput',
  props: {
    username: String,
    receiver: String,
    senderData: Function
  },
  data() {
    return {
      message: ''
    }
  },
  sockets: {
    connect() {
      console.log('connected')
    }
  },
  methods: {
    sendData() {
      let data = {
        from: this.username,
        to: this.receiver,
        message: this.message
      }
      this.$socket.emit('sendData', data)
      this.senderData(data)
      this.message = ''
    }
  }
}
</script>

<style scoped>
.input-box {
  height: 10vh;
}
.input-area {
  width: 88%;
}
.btn-send {
  width: 10%;
}
</style>
