<template>
    <header>
        <main-header :headerText="'My plan'"></main-header>
    </header>
    <body>
       <div class="myplan-background">
        <div class="details">
          <p class ="title"> Details
          </p>
          <p class ="names"> Mr. John Doe & Mrs. Jane Doe
          </p>
          <p class ="datetime"> DD/MM/YYYY HH:MM
          </p>
          <p class ="location"> St. John Church, Washington DC
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('Details')" > </main-button>
        </div>
        <div class ="expenses">
          <p class ="title"> Expenses
          </p>
          <p class ="subtitle1"> Paid 1300
          </p>
          <p class ="subtitle2"> Unpaid 1600
          </p>
          <p class ="result"> Total 2900
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('')" > </main-button>
        </div>
        <div class ="guests">
          <p class ="title"> Guests
          </p>
          <p class ="subtitle1"> Not attending 12
          </p>
          <p class ="subtitle2"> Awaiting response 18
          </p>
          <p class ="result"> Confirmed 97
          </p>
          <main-button :buttonText="'Edit'" @click="$router.push('')" > </main-button>
        </div>
       </div>
    </body>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'

export default {
  name: 'MyplanView',
  components: {
    MainHeader,
    MainButton
  },
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