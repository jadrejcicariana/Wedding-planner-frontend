<template>
    <header>
      <div class="title">
        <p>
            {{headerText}} 
        </p>
      </div>        
    </header>
</template>


<script>

export default {
  name: 'MainHeader',
  props: {
    headerText: {
        type: String,
        required: true
    }
  },
}

</script>


<style scoped>

header {
  background-color: #FFC2D1;
  height: 80px;
}

.title {
    font-size: 36px;
    color: #FB6F92;
    padding-top: 10px;
    font-family: cursive;  
}



</style>
