<template>
    <li>
        {{ title }}, {{ price }} 
        <delete-button></delete-button>
    </li>
</template>

<script>
import DeleteButton from './DeleteButton.vue'

export default {
    name: 'Expense',
    props: {
        title: {
            type: String
        },
        price: {
            type: String
        }
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