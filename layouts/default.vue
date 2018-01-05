<template>
  <section>
  <navbar/>  
  <nuxt/> 
  <foot/>           
  </section>    
</template>
<script>

import Navbar from '~/components/Navbar'
import foot from '~/components/footer'

export default {
  components: {
    foot,
    Navbar
  }
}
</script>
<style lang="sass" scope>

@import ~assets/css/style

.android-content
 margin-top: 48px
 padding-top: 10px


</style>

