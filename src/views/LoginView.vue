<template>
  <header>
    <main-header :headerText="'Login'"></main-header>
  </header>
  <body>
    <div class= "login-background">
      <div class = "login-form">
        <form v-on:submit.prevent="login">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" v-model="username"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" v-model="password"><br>
            <main-button type="submit" :buttonText="'LOGIN'"> </main-button>
        </form>
        
      </div>
      <div class= "text">
        <p class= "text1">
          Don't have an account?
        </p>
        <p class = "text2" @click = "$router.push('signup')">
          Sign up
        </p>
      </div>
    </div>
  </body>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'
import { Auth } from "@/services"

export default {
  name: 'LoginView',
  components: {
    MainHeader,
    MainButton
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      let success = await Auth.login(this.username, this.password)
      console.log("Login result", success)

      if (success = true) {
        this.$router.push('myplan')
      }
    },
  }
}

</script>

<style scoped>

.login-background {
  position: absolute;
  top: 300;
  left: 50;
  width: 100%;
  height: 100%;
  background-color: #FFE5EC;
  background-size: cover;
  background-position: center;
}

.text1, .text2 {
  display: inline;
}

.text2 {
  color: #FB6F92;
  font-weight: bold;
}

.text2:hover {
  cursor: pointer
}

.login-form {
    margin-top: 16px;
}

label {
    font-weight: bold;
    text-align: left;
}

input {
    background-color: #FFC2D1;
    margin-bottom: 16px;
    border-radius: 16px;

}
</style>