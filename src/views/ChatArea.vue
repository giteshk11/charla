<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0 d-sm-none d-md-block contact-area">
        <Contacts :username="username" @openUserChatArea="openChatArea" />
      </b-col>
      <b-col ref="chatbox" style="background-color:rgba(53, 73, 94, 1)">
        <component
          :is="currentTab.component"
          :sender="currentTab.sender"
          :receiver="currentTab.receiver"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Contacts from '@/components/Contacts'

export default {
  name: 'ChatArea',
  components: {
    Contacts
  },
  data() {
    return {
      username: '',
      tabs: this.activeChats,
      currentTab: {}
    }
  },
  computed: {
    ...mapState(['activeChats']),
    ...mapGetters(['getChatBox'])
  },
  mounted() {
    this.username = this.username = this.$route.params.username
  },
  methods: {
    openChatArea(receiver) {
      console.log(receiver)
      this.currentTab = this.getChatBox
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
