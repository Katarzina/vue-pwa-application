module.exports = {
  build: {
    filenames: {
      // TMP: Increment this each time when doing a release to bust the cache
      app: 'app.' + Date.now() + '.js'
    }
  },
  generate: {
  routes: ['404']
  },
  head: {
    titleTemplate: '%s | Portfolio web programmer, front-end developer, back-end developer',
    htmlAttrs: {
      lang: 'en-US',
    }, 
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },
      { hid: 'description', name: 'description', content: 'Meta description' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileiMAGE', content: '/apple-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-config', content: '/IEconfig.xml' },
    ],   
    link: [      
      { rel: 'apple-touch-icon', href: '/img/icon/apple-57x57.png'},
      { rel: 'apple-touch-icon', href: '/img/icon/apple-60x60.png'},
      { rel: 'apple-touch-icon', href: '/img/icon/apple-72x72.png'},
      { rel: 'apple-touch-icon', href: '/img/icon/apple-76x76.png'},
      { rel: 'apple-touch-icon', href: '/img/icon/apple-114x114.png'},
      { rel: 'apple-touch-icon', href: '/img/icon/apple-120x120.png'},
      { rel: 'apple-touch-icon', href: '/img/icon/apple-144x144.png'},
      { rel: 'apple-touch-icon', href: '/img/icon/apple-152x152.png'},
      { rel: 'apple-touch-icon', href: '/img/icon/apple-180x180.png'},
      { rel: 'icon', type: 'image/png', href: '/img/icon/favicon-16x16.png'},  
      { rel: 'icon', type: 'image/png', href: '/img/icon/favicon-32x32.png'}, 
      { rel: 'icon', type: 'image/png', href: '/img/icon/favicon-96x96.png'},
      { rel: 'icon', type: 'image/png', href: '/img/icon/favicon-192x192.png'},          
      { rel: 'manifest', href: '/manifest.json'},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto'},      
    ],
    script: [
      { type: 'text/javascript', src: '/sw.js' }
    ]
  },
   cache: true,

  loading: { color: '#ff0000' }, 

   plugins: [
    { src: '~plugins/offline.js', ssr: false }
  ]
  
}