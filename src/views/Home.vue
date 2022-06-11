<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Hello World"/>
  </div>
  <GroupButtons></GroupButtons>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GroupButtons from '@/components/GroupButtons'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    GroupButtons
  }
}
</script>
