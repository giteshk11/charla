<template>
  <div class="msg-display">
    <template>
      <div v-for="(item, index) in messages" :key="index">
        <div class="row">
          <div :class="positionMessage(item)">{{ item.message }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    username: String
  },
  data() {
    return {
      messages: []
    }
  },
  methods: {
    positionMessage(data) {
      console.log(data.from)
      return data.from === this.username ? 'float-right' : 'float-left'
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
