<template>
    <header>
        <main-header :headerText="'Expenses'"></main-header>
    </header>
    <body>
        <div class ="expenses">
            <main-button :buttonText="'Save'" @click="$router.push('Myplan')" > </main-button>
        </div>
    </body>
</template>

<script>

import MainHeader from '@/components/MainHeader.vue'
import MainButton from '@/components/MainButton.vue'

export default {
    name: 'DetailsView',
    components: {
        MainHeader,
        MainButton
  },
}

</script>

<style scoped>

</style>