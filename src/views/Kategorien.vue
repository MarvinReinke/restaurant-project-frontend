<template>
    <h1>Hier findest du alle Kategorien</h1>
    <div class="container-fluid">
     <kategorie-card-list :kategorien="this.kategorien"></kategorie-card-list>
    </div>
   <kategorie-create-form @created="addKategorie"></kategorie-create-form>
</template>

<script>
import KategorieCardList from '../components/KategorieCardList'
import KategorieCreateForm from '../components/KategorieCreateForm'

export default {
  name: 'Kategorien',
  components: {
    KategorieCardList,
    KategorieCreateForm
  },
  data () {
    return {
      kategorien: []
    }
  },
  methods: {
    addKategorie (kategorieLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + kategorieLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(kategorie => this.kategorien.push(kategorie))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/kategorien'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(kategorie => { this.kategorien.push(kategorie) }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
