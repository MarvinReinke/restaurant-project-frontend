<template>
  <h1>Hier ist asiatisches Essen</h1>
  <div class="asiatisch">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="restaurant in restaurants" :key="restaurant.id">
         <div class="card">
         <img :src="getPicture(restaurant)" class="card-img-top" :alt="restaurant.name">
          <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <p class="card-text">{{ restaurant.name }} ist eines der beliebtesten asiatischen Restaurants in Berlin. Es befindet sich
          in der {{ restaurant.adresse }} in der Hausnummer {{ restaurant.hausnummer }}</p>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Asiatisch',
  data () {
    return {
      restaurants: [
        /* {
          id: 1,
          name: 'Mr.Wu',
          adresse: 'neukoellner Straße',
          hausnummer: 89
        },
        {
          id: 2,
          name: 'Cocolo Ramen',
          adresse: 'kreuzberger Straße',
          hausnummer: 16
        } */
      ]
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
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('http://localhost:8080/api/v1/restaurants', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(restaurant => {
        this.restaurants.push(restaurant)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
