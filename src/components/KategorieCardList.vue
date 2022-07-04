<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="kategorie in kategorien" :key="kategorie.id">
      <kategorie-card :kategorie="kategorie"></kategorie-card>
<!--     <div class="card" style="width: 50rem; margin-left: 70px">
      <img :src="getPicture(kategorie)"  class="card-image-top" :alt="kategorie.kategorienName" style="padding-top: 30px; padding-left: 15px; padding-right: 15px" width="800">
      <div class="card-body">
        <h5 class="card-title" style="padding-top: 10px">{{ kategorie.kategorienName }}, Kategorie-Referenz-Nummer: {{ kategorie.id }}</h5>
        <p class="card-text">{{ kategorie.kategorienBeschreibung}}.
          Restaurants die zu dieser Kategorie gehören, haben die Referenz-Nummern: {{kategorie.restaurants}}</p>
          <router-link class="nav-link" to="/restaurants"><a href="" class="btn btn-primary">Zeig mir die Restaurants</a></router-link>
      </div>
     </div>-->
    </div>
  </div>
</template>

<script>
import KategorieCard from './KategorieCard'
export default {
  name: 'KategorieCardList',
  components: { KategorieCard },
  props: {
    kategorien: {
      type: Array,
      required: true
    }
  } /*,
  methods: {
    getPicture (kategorie) {
      if (kategorie.kategorienName === 'Indisch') {
        return require('../assets/Indisch.png')
      } else if (kategorie.kategorienName === 'Italienisch') {
        return require('../assets/ItalienischKategorie.png')
      } else if (kategorie.kategorienName === 'Mexikanisch') {
        return require('../assets/Mexikanisch.png')
      } else if (kategorie.kategorienName === 'Asiatisch') {
        return require('../assets/Asiatisch.png')
      }
    }
  } */
}
</script>

<style scoped>

</style>
