<template>
    <header>
        <p class="title">
            {{headerText}} 
        </p>
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
  height: 100px;
}

.title {
    font-size: 36px;
    color: #FB6F92;
}



</style>
