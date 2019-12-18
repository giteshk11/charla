<template>
  <b-jumbotron class="wrapper d-flex align-items-center">
    <div class="container">
      <div class="w-50 mx-auto">
        <b-form class="text-white" @submit.prevent="onSubmit">
          <b-form-group id="input-group-1" label="Username:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.username"
              type="text"
              placeholder="Enter Username"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      userData: {}
    }
  },
  methods: {
    onSubmit() {
      let payload = {
        username: this.form.username,
        password: this.form.password
      }
      axios
        .post('http://localhost:3000/users/login', payload, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => {
          this.error = false
          this.userData['from'] = response.data.data.self
          this.userData['to'] = response.data.data.to
          if (response.data.statusCode === 200) {
            this.$router.push({
              name: 'ChatArea',
              params: { userData: this.userData }
            })
          } else {
            this.$bvToast.toast('Something went wrong,please try again later', {
              title: `Error`,
              variant: 'danger',
              solid: true
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 85%;
  background-color: #35495e;
}
</style>
