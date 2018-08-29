<template lang="pug">
  main.main
    Goods
    GoodsOfTheWeek
    About
    Reviews
    Contacts
</template>
<style lang="scss">
</style>
<script>
import Goods from '../Home/Goods.vue'
import GoodsOfTheWeek from '../Home/GoodsOfTheWeek.vue'
import About from '../Home/About.vue'
import Reviews from '../Home/Reviews.vue'
import Contacts from '../Home/Contacts.vue'

export default {
  components: {
    Goods,
    GoodsOfTheWeek,
    About,
    Reviews,
    Contacts
  }
}
</script>
