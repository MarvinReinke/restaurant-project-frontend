<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="kategorien in kategorien" :key="kategorien.id">
      <div class="card" style="width: 30rem;">
        <img :src="getPicture(kategorien)" style="padding-top: 30px; padding-left: 15px; padding-right: 15px" :alt="kategorien.name">
        <div class="card-body">
          <h5 class="card-title" style="padding-top: 10px">{{ kategorien.kategorienName }}</h5>
          <p class="card-text">{{ kategorien.kategorienBeschreibung}}</p>
          <router-link class="nav-link" to="/restaurants"><a href="" class="btn btn-primary">Zeig mir die Restaurants</a></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KategorieCardList',
  props: {
    kategorien: {
      type: Array,
      required: true
    }
  },
  methods: {
    getPicture (kategorien) {
      if (kategorien.kategorienName === 'Indisch') {
        return require('../assets/Indisch.png')
      } else if (kategorien.kategorienName === 'Italienisch') {
        return require('../assets/ItalienischKategorie.png')
      }
    }
  }
}

</script>

<style scoped>

</style>
