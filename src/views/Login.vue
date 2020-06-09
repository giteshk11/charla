<template>
  <div class="wrapper center">
    <div class="mb-2">
      <b-img src="../assets/rocket.svg" />
    </div>
    <div class="form-wrapper">
      <b-form class="text-white" @submit.prevent="onSubmit">
        <b-form-group>
          <b-input
            id="input-1"
            v-model="form.username"
            type="text"
            placeholder="Enter Username"
          ></b-input>
          <label>Username</label>
        </b-form-group>

        <b-form-group>
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
          ></b-form-input>
          <label>Password</label>
        </b-form-group>

        <b-button type="submit" class="btn">Login</b-button>
      </b-form>
    </div>
  </div>
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
  top: 50%;
  height: 100%;
  background-color: #35495e;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 100%;
  border: 2px solid #41b883;
  border-radius: 10em;
  background: none;
  transition: all 0.2s;
}

.btn:hover {
  background: #41b883;
}

.btn:focus {
  box-shadow: none;
}

.form-wrapper {
  width: 25%;
}

.form-group {
  position: relative;
}

.form-group > div {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.form-group > div > input,
.form-group > div > label {
  height: 3.125rem;
  padding: 0.75rem;
}

.form-group > div > label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #41b883;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

input[type='text'],
input[type='password'] {
  background: none;
  border: none;
  border-bottom: solid 2px #41b883;
  color: #41b883;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

input[type='text'],
input[type='password']:focus {
  box-shadow: none;
}

.form-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-group input:-ms-input-placeholder {
  color: transparent;
}

.form-group input::-ms-input-placeholder {
  color: transparent;
}

.form-group input::-moz-placeholder {
  color: transparent;
}

.form-group input::placeholder {
  color: transparent;
}

.form-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}

.form-group input:not(:placeholder-shown) ~ label {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 12px;
  color: #fff;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-group > div > label {
    display: none;
  }
  .form-group input::-ms-input-placeholder {
    color: #777;
  }
}
</style>
