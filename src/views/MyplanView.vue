<template>
    <header>
        <main-header :headerText="'My plan'"></main-header>
    </header>
    <body>
       <div class="myplan-background">
        <div class="details">
          <p class ="title"> Details</p>
          <p class ="char"> Mr. </p>
          <p class ="name"> {{details.gname}} </p>
          <p class ="char"> & Mrs. </p> 
          <p class="name"> {{details.bname}} </p>
          <p class ="datetime"> {{details.date}} {{details.time}}
          </p>
          <p class ="location"> {{details.location}}
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('Details')" > </main-button>
        </div>
        <div class ="expenses">
          <p class ="title"> Expenses
          </p>
          <p class ="subtitle1"> Paid: {{details.expensespaid}}
          </p>
          <p class ="subtitle2"> Unpaid: {{details.expensesunpaid}}
          </p>
          <p class ="result"> Total: {{details.expensestotal}}
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('Expenses')" > </main-button>
        </div>
        <div class ="guests">
          <p class ="title"> Guests
          </p>
          <p class ="subtitle1"> Declined: {{details.guestsdeclined}}
          </p>
          <p class ="subtitle2"> Awaiting response: {{details.guestsawaiting}}
          </p>
          <p class ="result"> Confirmed: {{details.guestsconfirmed}}
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('Guests')" > </main-button>
        </div>
       </div>
    </body>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'
import { Details } from "@/services"

export default {
  name: 'MyplanView',
  data () {
    return {
      details: {}
    }
  },
  async mounted() {
    this.details = await Details.fetchDetails()
  },
  components: {
    MainHeader,
    MainButton
  },
  methods: {
  }
}
</script>


<style scoped>

.myplan-background {
  position: absolute;
  top: 300;
  left: 50;
  width: 100%;
  height: 100%;
  background-color: #FFE5EC;
  background-size: cover;
  background-position: center;
  font-weight: bold;
}

.details {
  margin: auto;
  margin-top: 16px;
  width: 50%;
  background-color: #FFC2D1;
  border-radius: 16px;
}

.expenses {
  margin: auto;
  margin-top: 10px;
  width: 50%;
  background-color: #FFC2D1;
  border-radius: 16px;
}

.guests {
  margin: auto;
  margin-top: 10px;
  width: 50%;
  background-color: #FFC2D1;
  border-radius: 16px;
}

.title {
  padding-top: 16px;
  padding-left: 16px;
  text-align: left;
  color: #FB6F92;
  font-weight: bold;
}

.char, .name {
  display: inline;
}

.name {
  font-family: cursive;
  font-size: 36px;
}

.result {
  font-size: 24px
}

</style>