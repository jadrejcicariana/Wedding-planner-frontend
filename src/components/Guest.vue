<template>
<div>
    <li>
        <div class="name">{{ name }}</div>

        <input type="checkbox" :id="name"  v-model="confirmed" @change="updateConfirmedStatus" />
        <label for="checkbox">Confirmed</label>

        <input type="checkbox" :id="name"  v-model="declined" @change="updateDeclinedStatus" />
        <label for="checkbox">Declined</label>

        <delete-button @delete="this.$emit('delete')"></delete-button>
    </li>
</div>
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
       updateConfirmedStatus() {
        this.$emit('updateConfirmed', this.confirmed)
       },
       updateDeclinedStatus() {
        this.$emit('updateDeclined', this.declined)
       },
    },
    components: {
        DeleteButton
    },
    data() {
        return {
            confirmed: false,
            declined: false       
        }
    },
}
</script>

<style scoped>

input {
    margin-left: 20px;
}

.name {
    display: inline;
    margin-right: 100px;
    
}
</style>