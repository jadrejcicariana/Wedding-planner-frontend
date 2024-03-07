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
                    :checkboxIndex="index"
                    :checkboxName="guest.name"


                    v-on:delete="deleteGuest(index)"
                    > 
                    </guest>
                </ul>
                <!-- conf: {{store.confirmedGuests}}<br>
                decl: {{store.declinedGuests}}<br>
                total: {{store.resultTotalGuests}}<br>
                conf: {{store.resultConfirmed}}<br>
                decl: {{store.resultDeclined}}<br>
                awa: {{store.resultAwaiting}} -->
            </div>
            <main-button :buttonText="'Save'" @click="$router.push('Myplan'), calculateConfirmed(), calculateDeclined(), calculateTotal(), calculateAwaiting()" > </main-button>
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
            this.store.confirmedGuests.splice(index,1)
            this.store.declinedGuests.splice(index,1)
        },
        calculateConfirmed(){           
            this.store.resultConfirmed= this.store.confirmedGuests.length          
        },
        calculateTotal(){        
            this.store.resultTotalGuests= this.store.guests.length         
        },
        calculateDeclined(){            
            this.store.resultDeclined = this.store.declinedGuests.length           
        },
        calculateAwaiting(){
            this.store.resultAwaiting = this.store.resultTotalGuests - this.store.resultConfirmed - this.store.resultDeclined

        }
        // PROBLEM ON DELETION
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