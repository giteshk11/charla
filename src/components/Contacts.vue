<template>
  <div>
    <div v-for="(item, index) in arr" :key="index">
      <b-card no-body class="overflow-hidden mt-1">
        <b-row no-gutters>
          <b-col md="3">
            <b-card-img
              class="profile-pic"
              :src="item.img"
              alt="Image"
            ></b-card-img>
          </b-col>
          <b-col md="9" class="m-0 p-0">
            <b-card-body>
              <h6>{{ item.username }}</h6>
              <b-card-text></b-card-text>
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
          img: require('../assets/img1.jpg')
        },
        {
          username: 'Lana',
          img: require('../assets/img1.jpg')
        },
        {
          username: 'Olivia',
          img: require('../assets/img1.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.profile-pic {
  border-radius: 50%;
}

.card {
  background-color: #ccc;
}
.card-body {
  padding: 0.5rem;
}
</style>
