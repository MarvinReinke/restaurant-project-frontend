<template>
  <button class="btn btn-primary sticky-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Kategorie hinzufügen</button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Kategorie hinzufügen</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="row g-3">
        <div class="col-12">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Favoriten" v-model="kategorienName" required>
        </div>
        <div class="col-12">
          <label for="Beschreibung" class="form-label">Beschreibung</label>
          <input type="text" class="form-control" id="Beschreibung" placeholder="Beschreibe die Kategorie" v-model="kategorienBeschreibung" >
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" @click="createKategorie">Hinzufügen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KategorieCreateForm',
  data () {
    return {
      kategorienName: '',
      kategorienBeschreibung: ''
    }
  },
  methods: {
    createKategorie () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/kategorien'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const kategorie = JSON.stringify({
        kategorienName: this.kategorienName,
        kategorienBeschreibung: this.kategorienBeschreibung
      })

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: kategorie,
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
