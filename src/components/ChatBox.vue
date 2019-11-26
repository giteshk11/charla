<template>
  <div class="msg-display">
    <div :class="positionClass()">{{receiveData}}</div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    username: String
  },
  render: function(createElement) {
    let self = this
    return createElement('div', {
      attrs: {
        class: self.positionClass(),
        domProps: {
          innerHTML: this.receiveData
        }
      }
    })
  },
  data() {
    return {
      receiveData: ''
    }
  },
  methods: {
    positionClass() {
      console.log(this.receiveData.from)
      return this.receiveData.from === this.username
        ? 'float-right'
        : 'float-left'
    }
  },
  sockets: {
    receiveData(data) {
      this.receiveData = data
    }
  }
}
</script>

<style scoped>
.msg-display {
  height: 75vh;
}
</style>
