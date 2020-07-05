<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0 d-sm-none d-md-block contact-area">
        <Contacts
          :users="users"
          @openUserChatArea="openChatArea"
          :username="username"
        />
      </b-col>
      <b-col style="background-color:rgba(53, 73, 94, 1)">
        <ChatBox :sender="username" :receiver="receiver" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ChatBox from '../components/ChatBox'
import Contacts from '../components/Contacts'

export default {
  name: 'ChatArea',
  components: {
    ChatBox,
    Contacts
  },
  data() {
    return {
      username: '',
      receiver: '',
      users: {}
    }
  },
  mounted() {
    this.username = this.$route.params.username
    this.$socket.emit('requestOnlineUsers', this.username)
  },
  sockets: {
    onlineUsers(data) {
      this.users = data
    }
  },
  methods: {
    openChatArea(username) {
      this.receiver = username
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

.contact-area {
  -ms-flex: 0 0 20rem;
  flex: 0 0 20rem;
  background-color: #171a1d;
}
</style>
