<template>
<div class="mainbutton">
    <button @click = "onClick">
        {{buttonText}}
    </button>
</div>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    buttonText: {
        type: String,
        required: true
    }
  },
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
    width: 140px;
    height: 40px;
    color: black;
    background-color: #FB6F92;
    margin: 10px;
    border-radius: 16px;
    font-weight: bold;
}

.mainbutton {
  display: inline;
}

</style>