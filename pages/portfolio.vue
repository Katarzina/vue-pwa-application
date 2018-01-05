<template lang="pug"> 
  <section>
  .container
   .container__inner.post-section 
    .line-section    
     h3 I have worked on over 20 sites over the years. Many of them are long gone or have been replaced. Here are a few that are still standing. 
     .portfolio
      .portfolio__inner
       h2.porfolio__h2 Building company 
        a(href='https://etek.cz')
         img.card(src="/img/etek.png" alt="Etek" title="Etek")
       ul
        each val in ["PHP , jQuery, Ajax, Bootstrap, SASS", "speed page optimization 2.4 sec", "security - hsts, cloudflare", "responsive design"]
          li= val
      .portfolio__inner        
       h2.porfolio__h2 Studio 
        a(href='http://studio.vlozkynamiru.com')
         img.card(src="/img/studio.png" alt="Etek" title="Etek")
       ul
        each val in ["Landing page style" , "Javascript, Vuejs, nuxtjs, Ajax, Pug, SASS, Firebase", "SVG animation", "Responsive design"]
          li= val
      .portfolio__inner
       h2.porfolio__h2 Blog 
        a(href='https://blog.pkrf.eu/category/langs')
         img.card(src="/img/blog.png" alt="Blog" title="Blog")
       ul
        each val in ["PHP, yii2 framework, frontend, backend" , "jQuery, JavaScript", "Mysql, design database" , "Web project under construction yet"]
          li= val
  </section>    
</template>

<script>

export default {
  
  head: {  

    title: 'Portfolio web programmer',
    meta: [
      { hid: 'description', name: 'description', content: 'Portfolio web programmer' }
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

.portfolio
  justify-content: space-around
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;

.portfolio__inner
  margin: 5px
  padding-top: 5px

  @media #{$small-only} 
    padding: 2px

.porfolio__h2
   margin: 5px  

.card
  width: 95%  
  height: 95%
  margin-top: 10px


</style>


