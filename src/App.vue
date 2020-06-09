<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      username: '',
      receiver: '',
      userData: {}
    }
  },
  // mounted() {
  //   this.username = prompt('Enter a username')
  //   this.$socket.emit('initializeUser', { username: this.username })
  //   this.receiver = prompt('Enter receiever name')
  // },
  methods: {
    senderData(data) {
      this.userData = data
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #35495e;
  color: #2c3e50;
  height: 100%;
}
</style>
