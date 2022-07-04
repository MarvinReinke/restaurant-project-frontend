<template>
  <div class="home">
    <img alt="FindYourSpotLogo" src="../assets/Logo.png" width="500">
    <Hello msg="Willkommen bei FindYourSpot!"/>
    <h2 style="margin-top: 20px">Hier findest du alle Restaurants, zu denen du, oder deine Freunde schon immer hingehen wollten!</h2>
    <h4>Klicke auf die Kategorien um dir die Restaurants anzusehen, oder erstelle deine eigene Kategorie mit eigenen Restaurants!</h4>
  <a class="btn btn-success" href="http://localhost:2002/kategorien" style="border-radius: 30px;padding-left: 50px;padding-right: 50px; margin-top: 30px" role="button"><b> Lass uns Anfangen! </b></a>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  components: {
    Hello
  }
}
</script>

<style>
 body {
  background-image: url('../assets/HintergrundLokal.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
 .home{
   padding-top: 20px;
   color: navajowhite;
 }
</style>
