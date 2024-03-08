<template>
  <header>
    <main-header :headerText="'Sign up'"></main-header>
  </header>
  <body>
    <div class= "signup-background">
        <div class = "signup-form">
            <main-button :buttonText="'SIGN UP'" @click="$router.push('Myplan')" > </main-button>
        </div>
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
import MainButton from '@/components/MainButton.vue'


export default {
  name: 'SignupView',
  components: {
    MainHeader,
    MainButton
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
  font-weight: bold;
}

.text2:hover {
  cursor: pointer
}

</style>