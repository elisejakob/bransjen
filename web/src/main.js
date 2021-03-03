// Import main css
import '~/assets/style/main.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'

import Vuex from 'vuex'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

  // Do stuff before next page load
  router.beforeEach((to, from, next) => {
    if (from.path.includes('div') && to.path.includes('div')) {
      localStorage.setItem('scrollPos', window.pageYOffset);
    }
    next()
  })

  router.afterEach((to, from) => {
    if (from.path.includes('div') && to.path.includes('div')) {
      var y = parseInt(localStorage.getItem('scrollPos'));
      setTimeout(() => window.scrollTo(0, y), 0)
    }
  })

  // overwrite the scrollBehavior function with custom one
  router.options.scrollBehavior = function(to, from , savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (from.path.includes('div') && to.path.includes('div')) {
      let scrollPos = parseInt(localStorage.getItem('scrollPos'))
      return {x: 0, y: scrollPos}
    }
    return {x: 0, y: 0}
  }
}
