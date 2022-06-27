<template>
  <nav>
    <router-link :to="'/asiatisch'"><button type="button" class="btn btn-primary">Asiatisch</button></router-link>
    <router-link :to="'/indisch'"><button type="button" class="btn btn-primary">Indisch</button></router-link>
    <button type="button" class="btn btn-primary">Italienisch</button>
  </nav>
</template>

<script>
export default {
  name: 'GroupButtons'
}
</script>

<style scoped>

</style>
