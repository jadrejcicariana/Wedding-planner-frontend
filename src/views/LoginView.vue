<template>
  <header>
    <main-header :headerText="'Login'"></main-header>
  </header>
  <body>
    <div class= "login-background">
      <div class = "login-form">
          <main-button :buttonText="'LOGIN'" @click="$router.push('Myplan')" > </main-button>
      </div>
      <div class= "text">
        <p class= "text1">
          Don't have an account?
        </p>
        <p class = "text2" @click = "$router.push('Signup')">
          Sign up
        </p>
      </div>
    </div>
  </body>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'

export default {
  name: 'LoginView',
  components: {
    MainHeader,
    MainButton
  },
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
}

</style>