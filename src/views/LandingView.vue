<template>
  <div class="landing">
    <header>
      <div class="logo">
        <img src="@/assets/weddingplannertext.png" alt="Logo">
      </div>
    </header>
    <body>
      <div class ="landing-background">
        <div class ="title">
          <p class ="title1">NO STRESS</p>
          <p class ="title2">Pick your wedding dress</p>
        </div>
      </div>
    </body>
  </div>
</template>

<script>


export default {
  name: 'LandingView',
  components: {
    
  },
};

</script>

<style scoped>

header {
  background-color: #FFC2D1;
}

body {
  position: relative;
}

.landing-background {
  position: absolute;
  top: 300;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/hearts.png");
  background-color: #FFE5EC;
  background-size: cover;
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
}
</style>