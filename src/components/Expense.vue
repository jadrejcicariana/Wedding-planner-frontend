<template>
    <li>
        {{ title }}, {{ price }}

        <input type="checkbox" id="checkbox" :value="{checkboxIndex, checkboxPrice}" v-model="store.checkedExpenses"/>
        <label for="checkbox">Paid</label>
        
        <delete-button @delete="this.$emit('delete')"></delete-button>
        
    </li>
</template>

<script>
import DeleteButton from './DeleteButton.vue'
import store from '@/store.js'

export default {
    name: 'Expense',
    props: {
        title: {
            type: String
        },
        price: {
            type: Number
        },
        checkboxIndex: {
            type: Number
        },
        checkboxPrice: {
            type: Number
        }
        
    },
    methods: {
       
       
    },
    data() {
        return {
            store,
             
        }
    },
    components: {
        DeleteButton
    }
}


</script>

<style>

</style>