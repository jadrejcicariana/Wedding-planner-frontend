<template>
    <li>
        {{ name }}
        <delete-button @delete="this.$emit('delete')"></delete-button>
    </li>
</template>

<script>
import DeleteButton from './DeleteButton.vue'

export default {
    name: 'Guest',
    props: {
        name: {
            type: String
        },      
    },
    methods: {
       
    },
    components: {
        DeleteButton
    }
}


</script>

<style>

</style>