<template>
  <div>
    <p class="title">
      {{headerText}} 
    </p>
    <span v-if="authenticated">
      <main-button class = "logout" :buttonText="'LOGOUT'" @click="logout"></main-button> 
    </span>             
  </div>
</template>


<script>
import MainButton from '@/components/MainButton.vue'
import { Auth } from '@/services'


export default {
  name: 'MainHeader',
  props: {
    headerText: {
        type: String,
        required: true
    }
  },
  methods: {
    logout() {
      Auth.logout();
      this.$router.go()
    }
  },
  components: {
    MainButton
  },
  data () {
    return {
      ...Auth.state
    }
  }
}
</script>


<style scoped>

div {
  position: relative;
  background-color: #FFC2D1;
  height: 80px;
}

.title {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  text-align : center;
  font-size: 36px;
  color: #FB6F92;
  width: 50%;
  font-family: cursive; 
    
}

.logout {
  position: absolute;
  right: 0;
}
</style>
