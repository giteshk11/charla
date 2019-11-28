<template>
  <div class="msg-display">
    <div v-for="(item, index) in messages" :key="index">
      <div class="row">
        <div :class="positionMessage(item)">{{ item.message }}</div>
      </div>
    </div>
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
        ? 'text-right col-12'
        : 'text-left col-12'
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
