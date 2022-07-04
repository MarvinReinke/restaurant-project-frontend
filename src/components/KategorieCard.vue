<template>
    <div class="card h-100" style="width: 50rem; margin-left: 70px">
      <img :src="getPicture(kategorie)"  class="card-image-top" :alt="kategorie.kategorienName" style="padding-top: 30px; padding-left: 15px; padding-right: 15px" width="800">
      <div class="card-body">
        <h5 class="card-title" style="padding-top: 10px">{{ kategorie.kategorienName }}, Kategorie-Referenz-Nummer: {{ kategorie.id }}</h5>
        <p class="card-text">{{ kategorie.kategorienBeschreibung}}.
          Restaurants die zu dieser Kategorie gehören, haben die Referenz-Nummern: {{kategorien.restaurants}}</p>
<!--        <router-link class="nav-link" to="/restaurants"><a href="" class="btn btn-primary">Zeig mir die Restaurants</a></router-link>-->
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
}
</script>

<style scoped>

</style>
