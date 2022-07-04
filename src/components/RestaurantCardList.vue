<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="restaurant in restaurants" :key="restaurant.id">
      <restaurant-card :restaurant="restaurant"></restaurant-card>
    </div>
  </div>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard'

export default {
  name: 'RestaurantCardList',
  components: {
    RestaurantCard
  },
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
