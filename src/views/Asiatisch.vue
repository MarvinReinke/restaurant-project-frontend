<template>
  <h1>Hier ist asiatisches Essen</h1>
  <div class="asiatisch">
    <restaurant-card-list :restaurants="this.restaurants"></restaurant-card-list>
  </div>
  <restaurant-create-form></restaurant-create-form>
</template>

<script>
import RestaurantCardList from '../components/RestaurantCardList'
import RestaurantCreateForm from '../components/RestaurantCreateForm'
export default {
  name: 'Asiatisch',
  components: {
    RestaurantCardList,
    RestaurantCreateForm
  },
  data () {
    return {
      restaurants: []
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
