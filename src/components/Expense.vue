<template>
<div>
    <li>
        {{ title }}, {{ price }}

        <input type="checkbox" :id="title" v-model="paid" false-value=false true-value=true/>
        <label for="checkbox">Paid</label>
        
        <delete-button class="deletebutton" @delete="this.$emit('delete')"></delete-button>
        
    </li>
</div>
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

        // checkboxIndex: {
        //     type: Number
        // },
        // checkboxPrice: {
        //     type: Number
        // }
        
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

<style scoped>

input {
    margin-left: 60px;
}

</style>