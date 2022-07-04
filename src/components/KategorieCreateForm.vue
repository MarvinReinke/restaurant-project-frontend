<template>
  <button class="btn btn-primary sticky-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Kategorie hinzufügen</button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Kategorie hinzufügen</h5>
      <button type="button" id="close-offcanvas-kategorie" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="needs-validation" id="kategorie-create-form" novalidate>
        <div class="row g-3">
          <div class="col-12">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Favoriten" v-model="kategorienName" required>
          </div>
          <div class="col-12">
            <label for="Beschreibung" class="form-label">Beschreibung</label>
            <input type="text" class="form-control" id="Beschreibung" placeholder="Beschreibe die Kategorie" v-model="kategorienBeschreibung" required>
          </div>
          <div v-if="this.serverValidationMessages">
            <ul>
              <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
                {{ message }}
              </li>
            </ul>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" @click.prevent="createKategorie">Hinzufügen</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KategorieCreateForm',
  data () {
    return {
      kategorienName: '',
      kategorienBeschreibung: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createKategorie () {
      if (this.validate()) {
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

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occured')
      }
    },
    validate () {
      const form = document.getElementById('kategorie-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
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
