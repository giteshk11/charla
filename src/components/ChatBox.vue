<template>
  <div class="area">
    <ul class="list-unstyled" v-for="(item, index) in messages" :key="index">
      <li :class="`${positionMessage(item)} p-2`">
        <span
          :class="messageBgColor(item)"
          class="my-5 text-white message-text p-2"
          >{{ item.message }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    username: String,
    userData: Object
  },
  data() {
    return {
      messages: []
    }
  },
  watch: {
    userData() {
      this.messages.push(this.userData)
    }
  },
  methods: {
    positionMessage(data) {
      return data.from === this.username ? 'text-right' : 'text-left'
    },
    messageBgColor(data) {
      return data.from !== this.username ? 'receiver-text' : ''
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
.area {
  width: 100%;
  height: 90%;
  top: 10px;
  overflow-y: auto;
  padding: 1.5rem;
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
</style>
