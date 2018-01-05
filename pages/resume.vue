<template lang="pug"> 
 <section>
  .container
   .container__inner.post-section
     .hero 
      h1.resume WEB PROGRAMMER RESUME      
     .line-section
      h1 I've seen some things. 
      ul
        each val in ["I'm a Full Stack Developer who has worked on over 20 sites in the past 10 years. But last time I prefer front-end tasks", "I am Linux admin also", "I've been working remotely (mostly or all of the time) for the past 10 years.", "I have worked on over 20 sites over the years. Many of them are long gone or have been replaced. Here are a few that are still standing."]
          li= val   
     
      h1 Skills as programmer

      p Database: MySQL, Firebird.
      p Front-end: I had one projects on Angular 1, but then have moved on to Vue.js. jQuery is forever yet of choice.
      p Back-end: PHP, yii2, OOP, MVC. I had expirience with PHP CMS: WordPress, Joomla, Prestashop, Joomshop, OpenCart but I don't like work with any of them.
      p Database: MySQL, Firebird.
      p Web servers: Nginx or Apache.
      p Scripting: Bash scripting.
      p Version control: Git forever.
      p As well as: Composer, PHPUnit, Vagrant, Inscape/Pixlr, npm, node.js    

      h1 Skills as administrator

      p ISPConfig, svn, git, nagios, MySql, VPS, MySQL master-slave, replication, bash scripting.
      p consulting and tuning Cpanel ( Hosting control panel ) for client.
      p turning LAMP, postfix, PHP, MySQL, Oracle instalation, transfer web project from shared hosting to VPS, analyze reasons slow page loading.
      p installing Centos 6.x, X windows, Nomachine NX. ssh, socks, dante.
      p Apache Tomcat, Java, Jboss, ssl, OpenVZ, virtualisation, ftp, ssh, jenkins, backups, redmine, MediaWiki.

      h1 Education

      p Donetsk Polytechnic University, Ukraine - system engineer
      p Donetsk National University of Economy and Trade, Ukraine - finance, ‬bachelor

      h1 Langs
      p Ukrainian, Russian - native
      p English may be Intermediate
      p Czech - B1-B2
      p Polish - A1

  </section>     
</template>

<script>

export default {
   
  head: {  

    title: 'Resume ',
    meta: [
      { hid: 'description', name: 'description', content: 'Resume programmer' }
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

.hero 
  margin: -10px 0 
  height: 100px  
  background-image: linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)

.resume
  padding: 30px 0  

</style>

