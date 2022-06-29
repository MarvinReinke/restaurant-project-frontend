<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <Hello msg="Willkommen bei FindYourSpot!"/>
    <h2 style="margin-top: 20px">Hier findest du alle Restaurants, zu denen du, oder deine Freunde schon immer hingehen wollten!</h2>
    <h4>Klicke auf die Kategorien um dir die Restaurants anzusehen, oder erstelle deine eigene Kategorie mit eigenen Restaurants!</h4>
    <router-link :to="'/asiatisch'"><groupButtons style="margin-top: 50px" buttonText = 'Asiatisch'/></router-link>
    <router-link :to="'/indisch'"><groupButtons style="margin-top: 10px" buttonText = 'Indisch'/></router-link>
    <router-link :to="'/italienisch'"><groupButtons style="margin-top: 10px" buttonText = 'Italienisch'/></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import GroupButtons from '@/components/GroupButtons'

export default {
  name: 'Home',
  components: {
    Hello,
    GroupButtons
  }
}
</script>

<style>
</style>
