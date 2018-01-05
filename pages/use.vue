<template lang="pug"> 
  .container
   .container__inner.post-section 
    .techno 
      h1.use MY TECHNIQUES
    .line-section  
      h2 Backend
      p PHP, yii2 
      h2 Frontend
      p JavaScript, JQuery, Vue, Nuxt
      h2 Version Control 
      p I use GitHub, Bitbucket  
      h2 Editors
      p Sublime text, PHPStorm.  
      h2 OS
      p Ubuntu for desktop, Debian or CentOS for servers
      h2 Graphics
      p Pixlr, Incscape
      h2 Cloud security and perfomance
      p Cloudflare
  </section>   
</template>

<script>
export default {
  
  head: {  

    title: 'Software use',
    meta: [
      { hid: 'description', name: 'description', content: 'Software use' }
    ]
  },
   transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      console.log('enter from describe')
      let tl = new TimelineMax({ onComplete: done }),          
          isChrome = !!window.chrome && !!window.chrome.webstore;

      TweenMax.set('h2', {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      })

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
      console.log('leave from describe')
      let tl = new TimelineMax({ onComplete: done }),
      isChrome = !!window.chrome && !!window.chrome.webstore;

      TweenMax.set('h2', {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      })

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

.techno
  margin: -10px 0 
  height: 100px  
  background-image: linear-gradient(141deg,#E43F3F,#EE63A5 85%,#F77DCA)

.use
  padding: 30px 0    

</style>
