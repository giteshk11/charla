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
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

#app {
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
