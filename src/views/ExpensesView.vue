<template>
    <header>
        <main-header :headerText="'Expenses'"></main-header>
    </header>
    <body>
        <div class ="expenses">            
            <div class ="expenselist">
                <expense></expense><br>
                <add-button></add-button>
            </div>
            <main-button :buttonText="'Save'" @click="$router.push('Myplan')" > </main-button>
        </div>
    </body>
</template>

<script>

import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'
import Expense from '@/components/Expense.vue'
import AddButton from '@/components/AddButton.vue'


export default {
    name: 'DetailsView',
    components: {
        MainHeader,
        MainButton,
        AddButton,
        Expense
  },
}

</script>

<style scoped>

</style>