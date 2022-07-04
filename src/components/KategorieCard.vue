<template>
    <div class="card h-100" style="width: 50rem; margin-left: 70px">
      <img :src="getKategoriePicture(kategorie)"  class="card-image-top" style="padding-top: 30px; padding-left: 15px; padding-right: 15px" width="800" :alt="kategorie.kategorienName">
      <div class="card-body">
        <h5 class="card-title" style="padding-top: 10px">{{ kategorien.kategorienName }}, Kategorie-Referenz-Nummer: {{ kategorien.id }}</h5>
        <p class="card-text">{{ kategorien.kategorienBeschreibung}}.
          Restaurants die zu dieser Kategorie gehören, haben die Referenz-Nummern: {{kategorien.restaurants}}</p>
        <router-link class="nav-link" to="/restaurants"><a href="" class="btn btn-primary">Zeig mir die Restaurants</a></router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'KategorieCard',
  props: {
    kategorie: {
      type: Object,
      required: true
    }
  },
  methods: {
    getKategoriePicture (kategorie) {
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
  }
}
</script>

<style scoped>

</style>
