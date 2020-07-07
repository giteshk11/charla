<template>
  <b-container fluid>
    <b-row>
      <div class="p-0 d-sm-none d-md-block contact-area">
        <div
          v-for="user in filteredUsers"
          :key="user.username"
          @click="openChatArea(user)"
        >
          <Contacts :username="user.username" />
        </div>
      </div>
      <b-col ref="chatbox" style="background-color:rgba(53, 73, 94, 1)">
        <keep-alive>
          <component
            :is="currentTab.component"
            :key="currentTab.username"
          ></component>
        </keep-alive>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Contacts from '@/components/Contacts'
import ChatBox from '@/components/ChatBox'

export default {
  name: 'ChatArea',
  components: {
    Contacts,
    ChatBox
  },
  data() {
    return {
      username: '',
      currentTab: {}
    }
  },
  computed: {
    ...mapState(['activeUsers']),
    ...mapGetters(['getChatBox']),
    filteredUsers: function() {
      let onlUsers = this.activeUsers
      return onlUsers.filter(el => el.username !== this.username)
    }
  },
  mounted: function() {
    this.username = this.$route.params.username
    this.$socket.emit('requestOnlineUsers', this.username)
  },
  sockets: {
    onlineUsers: function(data) {
      this.initActiveUsers({ data: data, component: ChatBox })
      console.log(this.activeUsers)
    }
  },
  methods: {
    ...mapMutations(['INIT_ACTIVE_USERS']),
    ...mapActions(['initActiveUsers']),
    openChatArea: function(data) {
      this.currentTab = this.activeUsers.find(
        el => el.username === data.username
      )
      console.log(this.currentTab)
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
