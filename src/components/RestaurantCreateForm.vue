<template>
  <button class="btn btn-primary sticky-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Restaurant hinzufügen</button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Restaurant hinzufügen</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form>
        <div class="row g-3">
          <div class="col-12">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="India Palace" v-model="name" required>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Am Buchsbaumweg" v-model="adresse" required>
          </div>
          <div class="col-md-2">
            <label for="hausnummer" class="form-label">Hausnummer</label>
            <input type="text" class="form-control" id="hausnummer" v-model="hausnummer" required>
          </div>
          <div class="col-12">
            <label for="kategorie" class="form-label">Kategorie</label>
            <input type="text" class="form-control" id="kategorie" placeholder="1" v-model="kategorie" required>
          </div>
          <div class="mt-5">
            <button class="btn btn-primary m-3" type="submit" @click="createRestaurant">Hinzufügen</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantCreateForm',
  data () {
    return {
      name: '',
      adresse: '',
      hausnummer: '',
      kategorie: ''
    }
  },
  methods: {
    createRestaurant  () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/restaurants'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const restaurant = JSON.stringify({
        name: this.name,
        adresse: this.adresse,
        hausnummer: this.hausnummer,
        kategorieId: this.kategorie
      })

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: restaurant,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
