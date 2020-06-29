<template>
  <div>
    <div v-for="(item, index) in arr" :key="index">
      <b-card no-body class="overflow-hidden mt-1">
        <b-row no-gutters>
          <b-col
            md="3"
            class="p-0 d-flex justify-content-center align-items-center"
          >
            <b-card-img
              class="profile-pic"
              :src="item.img"
              alt="Image"
            ></b-card-img>
          </b-col>
          <b-col md="9" class="m-0 p-0">
            <b-card-body>
              <h6>{{ item.username }}</h6>
              <b-card-text class="peek-msg">{{ item.msg }}</b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      arr: [
        {
          username: 'Jessa',
          img: require('../assets/img1.jpg'),
          msg: 'hi'
        },
        {
          username: 'Lana',
          img: require('../assets/img1.jpg'),
          msg: 'test'
        },
        {
          username: 'Olivia',
          img: require('../assets/img1.jpg'),
          msg: 'i love vue'
        }
      ]
    }
  }
}
</script>

<style scoped>
.profile-pic {
  width: 60px;
  height: 60px;
  padding: 1px;
  border: 1.5px solid #35495e;
  border-radius: 50%;
}

.card {
  max-height: 80px;
  color: #fff;
  border: 0px;
  border-radius: 0px;
  border-bottom: 1px solid #35495e;
  background-color: transparent;
}

.card :hover {
  cursor: pointer;
}

.card-body {
  padding: 0.8rem 0;
}

.peek-msg {
  font-size: 12px;
}
</style>
