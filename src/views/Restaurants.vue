<template>
  <h1>Hier findest du alle verfügbaren Restaurants an einem Ort</h1>
   <div class="container-fluid">
    <restaurant-card-list :restaurants="this.restaurants"></restaurant-card-list>
   </div>
  <restaurant-create-form @created="addRestaurant"></restaurant-create-form>
</template>

<script>
import RestaurantCardList from '@/components/RestaurantCardList'
import RestaurantCreateForm from '@/components/RestaurantCreateForm'

export default {
  name: 'Restaurants',
  components: {
    RestaurantCardList,
    RestaurantCreateForm
  },
  data () {
    return {
      restaurants: []
    }
  },
  methods: {
    addRestaurant (restaurantLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + restaurantLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(restaurant => this.restaurants.push(restaurant))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/restaurants'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
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
