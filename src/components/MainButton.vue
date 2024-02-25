<template>
    <button>
        {{buttonText}}
    </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    buttonText: {
        type: String,
        required: true
    }
  }
}
</script>

<style scoped>

Button {
    position: relative;
    width: 100px;
    height: 50px;
    color: rgb(255, 0, 0);
}

</style>