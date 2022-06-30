<template>
  <h1>Hier findest du alle Kategorien</h1>
   <div class="kategorien">
    <kategorie-card-list :kategorien="this.kategorien"></kategorie-card-list>
   </div>
   <kategorie-create-form></kategorie-create-form>
</template>

<script>
import KategorieCardList from '../components/KategorieCardList'
import KategorieCreateForm from '../components/KategorieCreateForm'

export default {
  name: 'Kategorien',
  components: { KategorieCreateForm, KategorieCardList },
  data () {
    return {
      kategorien: []
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
