<template>
    <header>
        <main-header :headerText="'My plan'"></main-header>
    </header>
    <body>
       <div class="myplan-background">
        <div class="details">
          <p class ="title"> Details</p>
          <p class ="char"> Mr. </p>
          <p class ="name"> {{store.details.gname}} </p>
          <p class ="char"> & Mrs. </p> 
          <p class="name"> {{store.details.bname}} </p>
          <p class ="datetime"> {{store.details.date}} {{store.details.time}}
          </p>
          <p class ="location"> {{store.details.location}}
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('Details')" > </main-button>
        </div>
        <div class ="expenses">
          <p class ="title"> Expenses
          </p>
          <p class ="subtitle1"> Paid: {{store.resultPaid}}
          </p>
          <p class ="subtitle2"> Unpaid: {{store.resultUnpaid}}
          </p>
          <p class ="result"> Total: {{store.resultTotal}}
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('Expenses')" > </main-button>
        </div>
        <div class ="guests">
          <p class ="title"> Guests
          </p>
          <p class ="subtitle1"> Declined: {{store.resultDeclined}}
          </p>
          <p class ="subtitle2"> Awaiting response: {{store.resultAwaiting}}
          </p>
          <p class ="result"> Confirmed: {{store.resultConfirmed}}
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('Guests')" > </main-button>
        </div>
       </div>
    </body>
</template>

<script>
import store from '@/store.js'
import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'

export default {
  name: 'MyplanView',
  components: {
    MainHeader,
    MainButton
  },
  data () {
    return {
      store,
    }
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