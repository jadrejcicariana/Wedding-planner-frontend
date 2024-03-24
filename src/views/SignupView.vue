<template>
  <header>
    <main-header :headerText="'Sign up'"></main-header>
  </header>
  <body>
    <div class= "signup-background">
        <div class = "signup-form">
          <form>
              <label for="username">Username:</label><br>
              <input type="text" id="username" name="username"><br>
              <label for="password">Password:</label><br>
              <input type="password" id="password" name="password"><br>
              <label for="rptpassword">Repeat password:</label><br>
              <input type="password" id="rptpassword" name="rptpassword"><br>
          </form>
          <main-button :buttonText="'SIGN UP'" @click="$router.push('myplan')" > </main-button>
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