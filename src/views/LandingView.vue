<template>
  <div class="landing">
    <header>      
      <img class="logo" src="@/assets/weddingplannertext.png" alt="Logo">      
    </header>
    <body>
      <div class ="landing-background">
        <div class ="title">
          <p class ="title1">NO STRESS</p>
          <p class ="title2">Pick your wedding dress</p>
          <div class = "buttons">
            <main-button :buttonText="'LOGIN'" @click="$router.push('login')" > </main-button>
            <main-button :buttonText="'SIGN UP'" @click="$router.push('signup')"> </main-button>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import MainButton from '../components/MainButton.vue';

export default {
  name: 'LandingView',
  components: {
    MainButton
  },
};

</script>

<style scoped>

header {
  background-color: #FFC2D1;
  height: 80px;
}

.logo {
  height: 70px;
  margin-top: 5px;
}

body {
  position: absolute;
  top: 300;
  width: 100%;
  height: 100%;
}

.landing-background {
  position: absolute;
  top: 300;
  left: 50;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/hearts.png");
  background-color: #FFE5EC;
  background-size: cover;
  background-position: center;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  text-align: center;
  color: black;
}

.title1 {
  font-weight: bold;
}

.title2 {
  font-size: 48px;
  color: #FB6F92;
  font-family: cursive;
}

</style>