<template lang="pug"> 
  .container
   .container__inner.line-section     
      event(
        v-for="event of notes",
        :event="event",
        key="index"
      )     
</template>

<script>
import Event from '../components/Event'
import notes from '../content/notes'

export default {

 components: { Event },
 data () {
    return {
      notes     
    }
 },
  
  head: {  

    title: 'Blog',
    meta: [
      { hid: 'description', name: 'description', content: 'Blog' }
    ]
  },
   transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {      
      let tl = new TimelineMax({ onComplete: done }),          
          isChrome = !!window.chrome && !!window.chrome.webstore;     

      tl.add('start')
      tl.from(el, 0.8, {
        scale: 0.9,
        transformOrigin: '50% 50%',
        ease: Sine.easeOut
      }, 'start')
      tl.staggerFrom('.photo-area', 1, {
        opacity: 0,
        ease: Sine.easeOut
      }, 0.25, 'start+=0.25')
      
    },
    leave (el, done) {    
      let tl = new TimelineMax({ onComplete: done }),
      isChrome = !!window.chrome && !!window.chrome.webstore;
     
      tl.add('leave')
      tl.to(el, 0.8, {
        scale: 0.9,
        opacity: 0,
        transformOrigin: '50% 50%',
        ease: Sine.easeIn
      }, 'leave')     
      tl.timeScale(1.5)
    } 
  },
}
</script>
<style lang="sass" scope>

@import ~assets/css/style


</style>
