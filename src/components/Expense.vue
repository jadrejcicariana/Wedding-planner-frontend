<template>
<div>
    <li>
        {{ title }}, {{ price }}

        <input type="checkbox" :id="title" v-model="compPaid" />
        <label :for="title">Paid</label>
        
        <delete-button class="deletebutton" @delete="this.$emit('delete')"></delete-button>      
    </li>
</div>
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
            type: Number
        },
        paid: {
            type: Boolean
        }       
    },
    computed: {
        compPaid: {
            get() {
                return this.paid
            },
            set(val) {
                this.$emit("updatePaid", val)
            }
        }
    },
    data() {
        return {
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