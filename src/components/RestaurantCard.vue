<template>
    <div class="card h-100" style="max-width: 800px">
      <div class="farbe">
      <img :src="getPicture(restaurant)" class="card-img-top" :alt="restaurant.name" style="width: 650px">
      <div class="card-body">
        <h5 class="card-title">{{ restaurant.name }}, Restaurant-Referenz-Nummer: {{ restaurant.id }}</h5>
        <p class="card-text">{{ restaurant.name }} ist ein Restaurant in Berlin. Es befindet sich
          in der folgenden Straße: {{ restaurant.adresse }} in der Hausnummer {{ restaurant.hausnummer }}. <br>
          Es gehört zur Kategorie {{ restaurant.kategorie.kategorienName }}
        </p>
      </div>
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
      if (restaurant.kategorie.kategorienName === 'Asiatisch') {
        return require('../assets/RestaurantAsiatisch.png')
      } else if (restaurant.kategorie.kategorienName === 'Indisch') {
        return require('../assets/RestaurantIndisch.png')
      } else if (restaurant.kategorie.kategorienName === 'Italienisch') {
        return require('../assets/RestaurantItalienisch.png')
      } else if (restaurant.kategorie.kategorienName === 'Mexikanisch') {
        return require('../assets/RestaurantMexikanisch.png')
      } else if (restaurant.kategorie.kategorienName === 'Orientalisch') {
        return require('../assets/RestaurantOrientalisch.png')
      } else if (restaurant.kategorie.kategorienName === 'Favoriten') {
        return require('../assets/RestaurantFavoriten.png')
      } else {
        return require('../assets/RestaurantEigeneKategorie.png')
      }
    }
  }
}

</script>

<style scoped>
.farbe{
  color: black;
}
</style>
