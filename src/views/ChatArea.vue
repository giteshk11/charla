<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3"  class="p-0" style="border-right: 2px solid #41b883;">
        <Contacts />
      </b-col>
      <b-col cols="9">
        <ChatBox :username="username" :userData="userData" />
        <ChatInput
          :senderData="senderData"
          :username="username"
          :receiver="receiver"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ChatBox from '../components/ChatBox'
import ChatInput from '../components/ChatInput'
import Contacts from '../components/Contacts'

export default {
  name: 'ChatArea',
  components: {
    ChatBox,
    ChatInput,
    Contacts
  },
  data() {
    return {
      username: '',
      receiver: '',
      userData: {}
    }
  },
  mounted() {
    this.username = this.$route.params.userData.from
    this.$socket.emit('initializeUser', { username: this.username })
    this.receiver = this.$route.params.userData.to
  },
  methods: {
    senderData(data) {
      this.userData = data
    }
  }
}
</script>

<style scoped>
.container-fluid {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
}
.row {
  height: 100%;
}
</style>
