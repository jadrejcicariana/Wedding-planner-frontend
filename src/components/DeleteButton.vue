<template>
    <button @click = "onClick">
        Delete
    </button>
</template>

<script>
export default {
  name: 'DeleteButton',
  methods: {
    onClick() {
        this.$emit('click');
    }
  }
}
</script>

<style scoped>

Button {
    position: relative;
    width: 64px;
    height: 40px;
    color: black;
    background-color: #ff0000;
    margin: 10px;
    border-radius: 16px;
}

</style>