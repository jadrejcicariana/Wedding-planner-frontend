<template>
<div>
    <li>
        <div class="name">{{ name }}</div>

        <input type="checkbox" :id="name"  v-model="compConfirmed" />
        <label :for="name">Confirmed</label>

        <input type="checkbox" :id="name"  v-model="compDeclined" />
        <label :for="name">Declined</label>

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
        confirmed: {
            type: Boolean
        },
        declined: {
            type: Boolean
        }
    },
    methods: {
       updateConfirmedStatus() {
        this.$emit('updateConfirmed', this.confirmed)
       },
       updateDeclinedStatus() {
        this.$emit('updateDeclined', this.declined)
       },
    },
    computed: {
        compConfirmed: {
            get() {
                return this.confirmed
            },
            set(val) {
                this.$emit("updateConfirmed", val)
                if (val) {
                    this.$emit("updateDeclined", !val)
                } 
            }
        },
        compDeclined: {
            get() {
                return this.declined
            },
            set(val) {
                this.$emit("updateDeclined", val)
                if (val) {
                    this.$emit("updateConfirmed", !val)  
                }
            }
        }
    },
    components: {
        DeleteButton
    },
    data() {
        return {     
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