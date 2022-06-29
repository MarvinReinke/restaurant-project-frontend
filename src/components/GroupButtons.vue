<template>
  <nav>
    <div class="d-grid- gap-2">
     <button class="btn btn-primary" type="button">{{ buttonText }} </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GroupButtons',
  props: {
    buttonText: {
      type: String,
      default: () => 'Label'
    }
  }
}

</script>

<style>
/*.style {
  background: white;
  color: blueviolet;
  border-color: black;
  border-radius: 10px;
}*/
</style>
