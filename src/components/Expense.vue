<template>
    <input type="text" id="title" name="title" placeholder="Title" v-model="store.title">
    <input type="number" id="price" name="price" placeholder="Price" v-model="store.price">
    <!-- <input type="checkbox" id="ispaid" name="ispaid"> -->
    <!-- <label for="ispaid"> Paid</label> -->
</template>

<script>
import store from '@/store.js'

export default {
    name: 'expense',
    data () {
        return {
            store
        }
    }
}
</script>

<style>

input {
    margin-top: 16px;
    margin-left: 16px; 
}

</style>