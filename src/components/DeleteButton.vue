<template>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<div class="deletebutton">
    <button @click = "onClick">
        <i class="fa fa-trash-o"></i>
    </button>
</div>
</template>

<script>
export default {
  name: 'DeleteButton',
  methods: {
    onClick() {
        this.$emit('delete');
    }
  }
}
</script>

<style scoped>

.deletebutton {
  display: inline;
}

Button {
    position: relative;
    width: 40px;
    height: 40px;
   
    margin: 10px;
    border-radius: 16px;
}

.fa-trash-o {
    font-size: 22px;
    color: red;
}

</style>