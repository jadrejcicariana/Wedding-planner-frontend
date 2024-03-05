<template>
    <header>
        <main-header :headerText="'Guests'"></main-header>
    </header>
    <body>
        <div class ="guests">            
            <div class ="guestlist">
                <form v-on:submit.prevent="addNewGuest">
                    <label for="new-name">Name: </label>
                    <input
                        v-model="store.newGuestName"
                        id="new-name"
                        placeholder="E.g. John Doe"
                    />
                    <add-button type="submit">submit</add-button>
                </form>
                
                <ul>
                    <guest 
                    v-for="(guest, index) in store.guests"
                    :key="guest.id"
                    :name="guest.name"
                    v-on:delete="deleteGuest(index)"
                    > 
                    </guest>
                </ul>
            </div>
            <main-button :buttonText="'Save'" @click="$router.push('Myplan')" > </main-button>
        </div>
    </body>
</template>

<script>


import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'
import Guest from '@/components/Guest.vue'
import AddButton from '@/components/AddButton.vue'
import store from '@/store.js'

export default {
    name: 'DetailsView',
    components: {
        MainHeader,
        MainButton,
        AddButton,
        Guest,
    },
    methods: {
         addNewGuest() {
            let newGuest = {
                id: this.store.nextGuestId,
                name: this.store.newGuestName,
            }
            this.store.guests.push(newGuest)
            this.store.newGuestName = ''
            this.store.nextGuestId++
        },
        deleteGuest(index) {
            console.log(index),
            this.store.guests.splice(index, 1)
        }
    },
    data() {
        return {
            store,
             
        }
    }
}


</script>

<style scoped>

</style>