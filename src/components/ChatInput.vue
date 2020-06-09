<template>
  <div>
    <b-form>
      <b-form-row>
        <b-col>
          <b-form-input
            v-model="message"
            placeholder="Type your message here..."
            trim
            @keydown.enter.prevent="sendData"
            autocomplete="off"
          />
        </b-col>
      </b-form-row>
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
      if (this.message) {
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
}
</script>

<style scoped>
.form-row {
  padding: 0;
  margin: 0;
}

.btn-send {
  border: 2px solid #41b883;
  background: none;
  transition: all 0.2s;
}

.btn-send:hover {
  background: #41b883;
}

.btn-send:focus {
  box-shadow: none;
}

input[type='text'] {
  background: none;
  border: none;
  border-bottom: solid 2px #41b883;
  color: #fff;
  font-size: 1em;
  font-weight: 400;
  margin: 0 01em 0 0;
  padding: 0.5em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

::placeholder {
  color: #fff;
}

input[type='text'] {
  box-shadow: none;
}
</style>
