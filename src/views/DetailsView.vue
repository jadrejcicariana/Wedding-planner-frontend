<template>
     <header>
        <main-header :headerText="'Details'"></main-header>
    </header>
    <body>
        <div class ="details">
            <form>
                <label for="gname">Groom name:</label><br>
                <input type="text" id="gname" name="gname" v-model ="details.gname"><br>
                <label for="bname">Bride name:</label><br>
                <input type="text" id="bname" name="bname" v-model ="details.bname"><br>
                <label for="date">Date:</label><br>
                <input type="date" id="date" name="date" v-model ="details.date"><br>
                <label for="time">Time:</label><br>
                <input type="time" id="time" name="time" v-model ="details.time"><br>
                <label for="location">Location:</label><br>
                <input type="text" id="location" name="location" v-model ="details.location"><br>
            </form>
            <main-button :buttonText="'Save'" @click="updateDetails()" > </main-button>
        </div>
    </body>
</template>

<script>
import store from '@/store.js'
import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'
import { Details } from "@/services"

export default {

    name: 'DetailsView',
    components: {
        MainHeader,
        MainButton
    },
    async mounted() {
        this.details = await Details.fetchDetails()
    },
    data() {
        return {
            store,
            details: {}
        }
    },
    methods: {
        async updateDetails (){
            await Details.updateDetails(this.details)
            this.$router.push('Myplan')

        }
    }

}
</script>

<style scoped>

.details {
    margin-top: 16px;
}

label {
    font-weight: bold;
    text-align: left;
}

input {
    background-color: #FFC2D1;
    margin-bottom: 16px;
    border-radius: 16px;

}

</style>