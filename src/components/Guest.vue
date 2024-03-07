<template>
    <li>
        {{ name }}

        <input type="checkbox" id="checkbox" :value="{checkboxIndex, checkboxName}" v-model="store.confirmedGuests"/>
        <label for="checkbox">Confirmed</label>

        <input type="checkbox" id="checkbox" :value="{checkboxIndex, checkboxName}" v-model="store.declinedGuests"/>
        <label for="checkbox">Declined</label>

        <delete-button @delete="this.$emit('delete')"></delete-button>
    </li>
</template>

<script>
import store from '@/store.js'
import DeleteButton from './DeleteButton.vue'


export default {
    name: 'Guest',
    props: {
        name: {
            type: String
        },
        checkboxIndex: {
            type: Number
        },
        checkboxName: {
            type: String
        },

    },
    methods: {
       
    },
    components: {
        DeleteButton
    },
    data() {
        return {
            store,
             
        }
    },
}


</script>

<style>

</style>