<template>
  <div>
    <b-card
      v-for="(user, index) in filteredUsers"
      :key="index"
      class="py-2"
      no-body
      @click="openUserChat(user.username)"
    >
      <b-row :socket-id="value">
        <b-col sm="3">
          <b-avatar class="profile-pic" size="4rem" alt="Image"></b-avatar>
        </b-col>
        <b-col sm="9">
          <b-card-body>
            <h6>{{ user.username }}</h6>
            <!-- <b-card-text class="peek-msg">{{ user }}</b-card-text> -->
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
// import ChatBox from '@/components/ChatBox'

export default {
  props: {
    username: {
      type: String,
      default: 'u1'
    }
  },
  data() {
    return {
      user: {}
    }
  },
  computed: {
    ...mapState(['activeChats']),
    filteredUsers: function() {
      let onlUsers = this.activeChats
      return onlUsers.filter(el => el.username !== this.username)
    }
  },
  mounted() {
    this.$socket.emit('requestOnlineUsers', this.username)
  },
  sockets: {
    onlineUsers(data) {
      this.initActiveUsers(data)
    }
  },
  methods: {
    ...mapMutations(['INIT_ACTIVE_USERS']),
    ...mapActions(['initActiveUsers']),
    openUserChat(username) {
      this.$emit('openUserChatArea', username)
    }
  }
}
</script>

<style scoped>
.profile-pic {
  border: 1.5px solid #41b883;
}

.card {
  max-height: 80px;
  color: #fff;
  border: 0px;
  border-radius: 0px;
  border-bottom: 1.35px solid #41b883;
  background-color: #171a1d;
}

.card:hover {
  cursor: pointer;
  background-color: rgba(225, 225, 225, 0.1);
  transition: all linear 0.2s;
}

.card-body {
  padding: 0.8rem 0;
}

.peek-msg {
  font-size: 12px;
}
</style>
