<template>
  <header>
    <main-header :headerText="'Sign up'"></main-header>
  </header>
  <body>
    <div class= "signup-background">
        <div class = "signup-form">
          <form v-on:submit.prevent="register">
              <label for="username">Username:</label><br>
              <input type="text" id="username" name="username" v-model="username"><br>
              <label for="password">Password:</label><br>
              <input type="password" id="password" name="password" v-model="password"><br>
              <label for="rptpassword">Repeat password:</label><br>
              <input type="password" id="rptpassword" name="rptpassword"><br>
              <main-button type="submit" :buttonText="'SIGN UP'"> </main-button>
          </form>
          
        </div>
        <div class= "text">
            <p class= "text1">
                Already have an account?
            </p>
            <p class = "text2" @click = "$router.push('login')">
                Login
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
  name: 'SignupView',
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
    async register() {
      let success = await Auth.register(this.username, this.password)
      console.log("Register result", success)

      if (success = true) {
        await Auth.login(this.username, this.password)
        this.$router.push('myplan')
      }
    },
  }
}
</script>

<style scoped>

.signup-background {
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

.signup-form {
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