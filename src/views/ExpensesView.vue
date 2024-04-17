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
                        v-model="expense.title"
                        id="new-title"
                        placeholder="E.g. Wedding dress"
                    />
                    <label for="new-price">Price: </label>
                    <input
                        v-model.number="expense.price"
                        id="new-price"
                        placeholder="E.g. 300"
                        
                    />
                    <add-button type="submit">submit</add-button>
                </form>
                
                <ul>
                    <expense 
                    v-for="expense in expenses"

                    
                    :key="expense.title"
                    :title="expense.title"
                    :price="expense.price"
                    :paid="expense.paid"

                    v-on:delete="deleteExpense(expense.title)"
                    >
                    <!-- :checkboxIndex="index" -->
                    <!-- :checkboxPrice="expense.price" -->
  
                    
                    
                    </expense>
                </ul>
            </div>
            <main-button :buttonText="'Save'" @click="$router.push('Myplan'), calculateExpenses()" > </main-button>
        </div>
    </body>
</template>

<script>


import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'
import Expense from '@/components/Expense.vue'
import AddButton from '@/components/AddButton.vue'
import store from '@/store.js'
import { Expenses } from "@/services"

export default {
    name: 'DetailsView',
    components: {
        MainHeader,
        MainButton,
        AddButton,
        Expense,
    },
    async mounted() {
        this.expenses = await Expenses.fetchExpenses()
        console.log(this.expenses)
    },
    methods: {
        async addNewExpense() {
            await Expenses.addExpense(this.expense)
            this.expense = {}
            this.expenses = await Expenses.fetchExpenses()

            // let newExpense = {
            //     id: this.store.nextExpenseId,
            //     title: this.store.newExpenseTitle,
            //     price: this.store.newExpensePrice
            // }
            // this.store.expenses.push(newExpense)
            // this.store.newExpenseTitle = ''
            // this.store.newExpensePrice = ''
            // this.store.nextExpenseId++
        },
        async deleteExpense(titleToDelete) {
            this.titleToDelete = titleToDelete
            await Expenses.deleteExpense(titleToDelete)
            this.titleToDelete = ""
            this.expenses = await Expenses.fetchExpenses()

            // console.log(index),
            // this.store.expenses.splice(index, 1)
            // this.store.checkedExpenses.splice(index, 1)
        },
        async calculateExpenses () {
            await Expenses.calculateExpenses(this.expenses)
        },
        // calculatePaid(){           
        //     this.store.resultPaid= this.store.checkedExpenses.reduce((total, expense) => total + expense.checkboxPrice, 0)           
        // },
        // calculateTotal(){        
        //     this.store.resultTotal= this.store.expenses.reduce((total, expense) => total + expense.price, 0)          
        // },
        // calculateUnpaid(){            
        //     this.store.resultUnpaid = this.store.resultTotal - this.store.resultPaid            
        // }
        // PROBLEM ON DELETION
    },
    data() {
        return {
            store,
            expense: {},
            expenses: [],
            titleToDelete: ""
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