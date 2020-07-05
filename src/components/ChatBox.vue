<template>
  <div class="area pt-2">
    <b-row no-gutters class="convo-area">
      <span class="text-white" v-if="messages.length === 0"
        >Send a message to start convo</span
      >
      <ul class="list-unstyled">
        <li
          v-for="(item, index) in messages"
          :key="index"
          :class="`${positionMessage(item)} p-2`"
        >
          <span
            :class="messageBgColor(item)"
            class="my-5 text-white message-text p-2"
            >{{ item.message }}
          </span>
        </li>
      </ul>
    </b-row>
    <b-row no-gutters class="typing-area">
      <b-form-input
        v-model="selfMessage"
        placeholder="Type your message here..."
        trim
        @keydown.enter.prevent="sendData"
        autocomplete="off"
      />
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    sender: String,
    receiver: String
  },
  data() {
    return {
      messages: [],
      selfMessage: ''
    }
  },
  methods: {
    positionMessage(data) {
      return data.from === this.sender ? 'text-right' : 'text-left'
    },
    messageBgColor(data) {
      return data.from === this.sender ? '' : 'receiver-text'
    },
    sendData() {
      if (this.selfMessage) {
        let data = {
          from: this.sender,
          to: this.receiver,
          message: this.selfMessage
        }
        this.$socket.emit('sendMessage', data)
        this.selfMessage = ''
        this.messages.push(data)
      }
    }
  },
  sockets: {
    receiveMessage(data) {
      this.messages.push(data)
    }
  }
}
</script>

<style scoped>
.area {
  width: 100%;
  height: 100%;
  top: 10px;
  overflow-y: auto;
}

.convo-area {
  width: 100%;
  height: 90%;
}

.typing-area {
  width: 100%;
}

.list-unstyled {
  width: 100%;
}

.message-text {
  text-align: center;
  border: 2px solid #42b883;
  border-radius: 5px;
}

.receiver-text {
  text-align: center;
  background-color: #42b883;
  border: 2px solid #42b883;
}

input[type='text'] {
  background: none;
  border: none;
  border-bottom: solid 2px #41b883;
  color: #fff;
  font-size: 1em;
  font-weight: 400;
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
