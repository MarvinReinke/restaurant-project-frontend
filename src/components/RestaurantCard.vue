<template>
    <div class="card h-100">
      <img :src="getPicture(restaurant)" class="card-img-top" :alt="restaurant.name">
      <div class="card-body">
        <h5 class="card-title">{{ restaurant.name }}, Restaurant-Referenz-Nummer: {{ restaurant.id }}</h5>
        <p class="card-text">{{ restaurant.name }} ist eines der beliebtesten asiatischen Restaurants in Berlin. Es befindet sich
          in der {{ restaurant.adresse }} in der Hausnummer {{ restaurant.hausnummer }}. Es gehört zur Kategorie {{ restaurant.kategorie.kategorienName }}
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RestaurantCard',
  props: {
    restaurant: {
      type: Object,
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
