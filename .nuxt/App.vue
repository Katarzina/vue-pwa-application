<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

export default {
  head: {"titleTemplate":"%s | Portfolio web programmer, front-end developer, back-end developer","htmlAttrs":{"lang":"en-US"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"robots","content":"noindex"},{"hid":"description","name":"description","content":"Meta description"},{"name":"msapplication-TileColor","content":"#ffffff"},{"name":"msapplication-TileiMAGE","content":"/apple-144x144.png"},{"name":"theme-color","content":"#ffffff"},{"name":"msapplication-config","content":"/IEconfig.xml"}],"link":[{"rel":"apple-touch-icon","href":"/img/icon/apple-57x57.png"},{"rel":"apple-touch-icon","href":"/img/icon/apple-60x60.png"},{"rel":"apple-touch-icon","href":"/img/icon/apple-72x72.png"},{"rel":"apple-touch-icon","href":"/img/icon/apple-76x76.png"},{"rel":"apple-touch-icon","href":"/img/icon/apple-114x114.png"},{"rel":"apple-touch-icon","href":"/img/icon/apple-120x120.png"},{"rel":"apple-touch-icon","href":"/img/icon/apple-144x144.png"},{"rel":"apple-touch-icon","href":"/img/icon/apple-152x152.png"},{"rel":"apple-touch-icon","href":"/img/icon/apple-180x180.png"},{"rel":"icon","type":"image/png","href":"/img/icon/favicon-16x16.png"},{"rel":"icon","type":"image/png","href":"/img/icon/favicon-32x32.png"},{"rel":"icon","type":"image/png","href":"/img/icon/favicon-96x96.png"},{"rel":"icon","type":"image/png","href":"/img/icon/favicon-192x192.png"},{"rel":"manifest","href":"/manifest.json"},{"rel":"stylesheet","href":"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},{"rel":"preload","as":"style","href":"https://fonts.googleapis.com/css?family=Roboto"}],"script":[{"type":"text/javascript","src":"/sw.js"}],"style":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

