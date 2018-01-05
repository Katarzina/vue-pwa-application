<template>
  <div class="container align-center">
    <h1 v-if="error.statusCode === 404">Page Not Found</h1>
    <h2 v-if="error.statusCode === 404">The page you are looking for does not exist or has changed</h2>
    <h1 v-else>Error</h1>
    <nuxt-link to="/">back to home page</nuxt-link>
   <div class="svg-nuxt"></div>
  </div>
</template>

<script>
export default {
  props: ['error'] 
}
</script>
<style lang="sass" scoped>
.align-center 
  text-align: center

.container .svg-nuxt 

  margin-left: auto
  margin-right: auto
  display: block
  margin-top: 1.5em
  width: 200px
  height: 200px
  background-image: url("/img/nuxt.svg")
  background-repeat: no-repeat
  
  
</style>