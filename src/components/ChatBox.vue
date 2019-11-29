<template>
  <div>
    <ul class="list-unstyled" v-for="(item, index) in messages" :key="index">
      <li :class="`${positionMessage(item)} p-2`">
        <span
          :class="messageBgColor(item)"
          class="my-5 text-white message-text p-2"
        >{{ item.message }}</span>
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
      console.log(data.from, this.username)
      return data.from === this.username
        ? 'text-right'
        : 'text-left receiver-text-color'
    },
    messageBgColor(data) {
      return data.from !== this.username ? 'receiver-bgcolor' : ''
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
  height: 85vh;
}

.message-text {
  border: 1px solid #ffffff;
  border-radius: 10px;
}

.receiver-bgcolor {
  background-color: #42b883;
}
</style>
