import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _8320a892 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _f90a55a8 = () => import('../pages/use.vue' /* webpackChunkName: "pages/use" */).then(m => m.default || m)
const _772d86d0 = () => import('../pages/resume.vue' /* webpackChunkName: "pages/resume" */).then(m => m.default || m)
const _501e4b66 = () => import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */).then(m => m.default || m)
const _3352eead = () => import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */).then(m => m.default || m)
const _2a6a88be = () => import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _8320a892,
			name: "index"
		},
		{
			path: "/use",
			component: _f90a55a8,
			name: "use"
		},
		{
			path: "/resume",
			component: _772d86d0,
			name: "resume"
		},
		{
			path: "/blog",
			component: _501e4b66,
			name: "blog"
		},
		{
			path: "/portfolio",
			component: _3352eead,
			name: "portfolio"
		},
		{
			path: "/shop",
			component: _2a6a88be,
			name: "shop"
		}
    ],
    fallback: false
  })
}
