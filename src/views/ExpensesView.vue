<template>
    <header>
        <main-header :headerText="'Expenses'"></main-header>
    </header>
    <body>
        <div class ="expenses">            
            <div class ="expenselist">
                <form v-on:submit.prevent="addNewExpense">
                    <label for="new-title">Title: </label>
                    <input
                        v-model="store.newExpenseTitle"
                        id="new-title"
                        placeholder="E.g. Wedding dress"
                    />
                    <label for="new-price">Price: </label>
                    <input
                        v-model="store.newExpensePrice"
                        id="new-price"
                        placeholder="E.g. 300"
                    />
                    <add-button type="submit">submit</add-button>
                </form>
                
                <ul>
                    <expense 
                    v-for="expense in store.expenses"
                    :key="expense.id"
                    :title="expense.title"
                    :price="expense.price"
                    > 
                    </expense>
                </ul>
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
import store from '@/store.js'

export default {
    name: 'DetailsView',
    components: {
        MainHeader,
        MainButton,
        AddButton,
        Expense,
    },
    methods: {
         addNewExpense() {
            let newExpense = {
                id: this.store.nextExpenseId,
                title: this.store.newExpenseTitle,
                price: this.store.newExpensePrice
            }
            this.store.expenses.push(newExpense)
            this.store.newExpenseTitle = ''
            this.store.newExpensePrice = ''
            this.store.nextExpenseId++
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