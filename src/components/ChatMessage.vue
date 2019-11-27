<template>
  <div :class="positionMessage()">{{message.message}}</div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: {
    message: Object,
    username: String
  },
  methods: {
    positionMessage() {
      console.log(this.message.from)
      return this.message.from === this.username ? 'float-right' : 'float-left'
    }
  }
}
</script>