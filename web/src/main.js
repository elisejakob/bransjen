// Import main css
import '~/assets/style/main.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage

  // overwrite the scrollBehavior function with custom one
  router.options.scrollBehavior = function(to, from , savedPosition) {
    if (savedPosition) {
      return  savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    if ((from.name == 'div' && to.name == 'div') || ((from.name == 'div' && to.name == 'div'))) {
      return window.scrollHeight
    }
    return {x: 0, y: 0}
  }
}
