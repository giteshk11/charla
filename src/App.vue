<template>
  <div id="app">
    <b-nav align="center" class="nav-bar">
      <b-nav-item>
        <b-img src="../src/assets/logo.png" height="20%"></b-img>
      </b-nav-item>
    </b-nav>

    <b-container fluid class="chat-box">
      <router-view />
    </b-container>
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

.nav-bar {
  border-bottom: 1px solid #42b883;
  height: 7%;
}

.chat-box {
  height: 85%;
}
</style>
