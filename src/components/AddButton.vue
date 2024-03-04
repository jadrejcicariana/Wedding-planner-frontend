<template>
    <button @click = "onClick">
        + Add
    </button>
</template>

<script>
export default {
  name: 'AddButton',
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
    background-color: #0dff00;
    margin: 10px;
    border-radius: 16px;
}

</style>