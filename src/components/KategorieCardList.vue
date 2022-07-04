<template>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="kategorie in kategorien" :key="kategorie.id">
      <kategorie-card :kategorie="kategorie"></kategorie-card>
    </div>
  </div>
</template>

<script>
import KategorieCard from '../components/KategorieCard'

export default {
  name: 'KategorieCardList',
  components: {
    KategorieCard
  },
  props: {
    kategorien: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
