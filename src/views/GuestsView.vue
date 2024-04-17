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
                        v-model="guest.name"
                        id="new-name"
                        placeholder="E.g. John Doe"
                    />
                    <add-button type="submit">submit</add-button>
                </form>
                
                <ul>
                    <guest 
                    v-for="guest in guests"

                    :key="guest.name"
                    :name="guest.name"
                    :confirmed="guest.confirmed"
                    :declined="guest.declined"

                    @updateConfirmed="updateConfirmedStatus($event, guest)"
                    @updateDeclined="updateDeclinedStatus($event, guest)"
                    
                    v-on:delete="deleteGuest(guest.name)" 
                    >
                     
                    </guest>
                </ul>
            </div>
            <main-button :buttonText="'Save'" @click="onSave(), $router.push('Myplan')" > </main-button>
        </div>
    </body>
</template>

<script>


import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'
import Guest from '@/components/Guest.vue'
import AddButton from '@/components/AddButton.vue'
import store from '@/store.js'
import { Guests } from '@/services'

export default {
    name: 'DetailsView',
    components: {
        MainHeader,
        MainButton,
        AddButton,
        Guest,
    },
    async mounted() {
        this.guests = await Guests.fetchGuests()
        console.log(this.guests)
    },
    methods: {
        async addNewGuest() {
            await Guests.addGuest(this.guest)
            this.guest = {}
            this.guests = await Guests.fetchGuests()

            // let newGuest = {
            //     id: this.store.nextGuestId,
            //     name: this.store.newGuestName,
            // }
            // this.store.guests.push(newGuest)
            // this.store.newGuestName = ''
            // this.store.nextGuestId++
        },
        async deleteGuest(nameToDelete) {
            this.nameToDelete = nameToDelete
            await Guests.deleteGuest(nameToDelete)
            this.nameToDelete = ""
            this.guests = await Guests.fetchGuests()


            // console.log(index),
            // this.store.guests.splice(index, 1)
            // this.store.confirmedGuests.splice(index,1)
            // this.store.declinedGuests.splice(index,1)
        },
        async onSave () {
            await Guests.updateGuests(this.guests)
            await Guests.calculateGuests(this.guests)
        },
        updateConfirmedStatus(newConfirmedStatus, guest) {
            guest.confirmed = newConfirmedStatus
        },
        updateDeclinedStatus(newDeclinedStatus, guest) {
            guest.declined = newDeclinedStatus
        },
        // calculateConfirmed(){           
        //     this.store.resultConfirmed= this.store.confirmedGuests.length          
        // },
        // calculateTotal(){        
        //     this.store.resultTotalGuests= this.store.guests.length         
        // },
        // calculateDeclined(){            
        //     this.store.resultDeclined = this.store.declinedGuests.length           
        // },
        // calculateAwaiting(){
        //     this.store.resultAwaiting = this.store.resultTotalGuests - this.store.resultConfirmed - this.store.resultDeclined

        // }
        // PROBLEM ON DELETION
    },
    data() {
        return {
            store,
            guest: {},
            guests: [],
            nameToDelete: ""
             
        }
    }
}


</script>

<style scoped>

label {
    font-weight: bold;
    margin-left: 16px;
}

input {
    background-color: #FFC2D1;
    margin-bottom: 16px;
    border-radius: 16px;

}

</style>