<template>
  <header>
    <main-header :headerText="'Sign up'"></main-header>
  </header>
  <body>
    <div class= "signup-background">
      <div class= "text">
        <p class= "text1">
          Already have an account?
        </p>
        <p class = "text2" @click = "$router.push('Login')">
          Login
        </p>
      </div>
    </div>
  </body>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'SignupView',
  components: {
    MainHeader
  },
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
}

</style>