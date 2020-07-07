<template>
  <div>
    <b-card class="py-2" no-body>
      <b-row>
        <b-col sm="3">
          <b-avatar class="profile-pic" size="4rem" alt="Image"></b-avatar>
        </b-col>
        <b-col sm="9">
          <b-card-body>
            <h6>{{ username }}</h6>
            <!-- <b-card-text class="peek-msg">{{ user }}</b-card-text> -->
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    username: String
  },
  data() {
    return {}
  },
  methods: {}
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
