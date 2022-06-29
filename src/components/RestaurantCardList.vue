<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="restaurant in restaurants" :key="restaurant.id">
      <div class="card">
        <img :src="getPicture(restaurant)" class="card-img-top" :alt="restaurant.name">
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <p class="card-text">{{ restaurant.name }} ist eines der beliebtesten asiatischen Restaurants in Berlin. Es befindet sich
            in der {{ restaurant.adresse }} in der Hausnummer {{ restaurant.hausnummer }}. Es gehört zur Kategorie {{ restaurant.kategorie }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RestaurantCardList',
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  },
  methods: {
    getPicture (restaurant) {
      if (restaurant.name === 'Mr.Wu') {
        return require('../assets/MrWu.jpg')
      } else if (restaurant.name === 'Cocolo Ramen') {
        return require('../assets/CocoloRamen.jpg')
      }
    }
  }
}
</script>

<style scoped>

</style>
