<template>
    <header>
        <main-header :headerText="'My plan'"></main-header>
    </header>
    <body>
       <div class="myplan-background">
        <div class="details">
          <p class ="title"> Details
          </p>
          <p class ="names"> Mr. {{store.gname}} & Mrs. {{store.bname}}
          </p>
          <p class ="datetime"> {{store.date}} {{store.time}}
          </p>
          <p class ="location"> {{store.location}}
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
}

.details {
  margin: auto;
  margin-top: 10px;
  width: 50%;
  background-color: #FFC2D1;
}

.expenses {
  margin: auto;
  margin-top: 10px;
  width: 50%;
  background-color: #FFC2D1;
}

.guests {
  margin: auto;
  margin-top: 10px;
  width: 50%;
  background-color: #FFC2D1;
}

.title {
  text-align: left;
  margin: 10px;
  color: #FB6F92;
  font-weight: bold;
}


</style>