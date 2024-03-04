<template>
    <li>
        {{ title }}, {{ price }}
    </li>
</template>

<script>

export default {
    name: 'Expense',
    props: {
        title: {
            type: String
        },
        price: {
            type: String
        }
    },
    methods: {
       
    }
}


</script>

<style>

</style>