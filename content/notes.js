export default [
    {
    type: "talk",
    img: "/img/pwa.svg",
    topic: "My first PWA application",
    theme: "Frontend JavaScript Nuxtjs Vuejs",
    author: "Kateryna Parfenova",
    social: [
      {
        "twitter": "https://twitter.com/BraveUkraine"
      }
    ],
    authorInfo: "Web programmer",
    description: "This site is built with Nuxt.js and Vue.js. Nuxt.js at its core is a framework for building Universal Vue.js Apps but can also be used as to create static sites which is how I am using it for this site.\n In addition to being a static site, this site is a PWA (Progressive Web App) as well.\n\n I've spent enough time working to improve performance for this site. One of the more helpful tools in this process has been Google's Lighthouse tool. I used command line extension.\n\n When I use a Google font via CDN received a performance warning when testing with Lighthouse. To eliminate the warning by preloading the font in nuxt.config.js. \n Example: `nuxt.config.js` module.exports = {  head: { link: [ { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto' } ] }} \n\n ",
    image: "/img/report.png",
    date: "10-09-2017"
  },
  {
    type: "talk",
    img: "/img/cloudflare.svg",
    topic: "Frontend Perfomance and Security. CDN with Cloudflare in project. How to...",
    theme: "Frontend Performance and Security",
    author: "Kateryna Parfenova",
    social: [
      {
        "facebook": "https://www.facebook.com/profile.php?id=100009595230257",
        "twitter": "https://twitter.com/BraveUkraine"
      }
    ],
    authorInfo: "Consultant. Vue.js Core Team Member",
    description: "Web space fights for page speed load first and web security second. Am I right? Angular, React, Vue are technologies who think about the speed of provision of information. This nuxt project use pure html and js files. What can be simplest and easiest? Page speed test should be one of the demands when we build our site. As and security test. So, friendly little family are https, http2 and hsts. \n\n Http2 include by default if you use https, free let's encrypt sertificate SSL/TSL you can order on any webhosting. Performance will encrease on 30%.\n\nHTTP Strict-Transport-Security (HSTS) header is a security technique that enforces the browser to rewrite HTTP request into HTTPS requests. With a simple technique, we eliminate man-in-the-middle attacks over a nonsecure connection and reducing the number of redirects, which help to improve page load times. \n\n My little experience with my Android. Tor Vpn on my mobile Android device. Turn on. I try with Chrome browser visit my cloudflare defenced sites. 'Please complete the the security check to access' - Google reCaptha, I'm not robot.",
    date: "20-09-2017"
  },
  {
    type: "talk",
    img: "/img/hsts.svg",
    topic: "HSTS check",
    theme: "Frontend Performance and Security",
    author: "Kateryna Parfenova",
    social: [
      {
        "twitter": "https://twitter.com/BraveUkraine"
      }
    ],
    authorInfo: "Consultant. Vue.js Core Team Member",
    description: "HSTS check my pkrf.eu \n\n https://www.namecheap.com/support/knowledgebase/article.aspx/9711//how-to-check-if-hsts-is-enabled. \n\n www.ssllabs.com my report \n\n Checking HSTS header via SSH client using cURL curl -s -D- https://example.com/ | grep -i Strict \n\n ",
    image: "/img/screen.png", 
    date: "04-10-2017"
  }    
  
]
