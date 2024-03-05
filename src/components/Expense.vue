<template>
    <li>
        {{ title }}, {{ price }}

        <!-- <input type="checkbox" id="checkbox"/>
        <label for="checkbox">Paid</label> -->
        
        <delete-button @delete="this.$emit('delete')"></delete-button>
        
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