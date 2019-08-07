// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueUniqIds from 'vue-uniq-ids'

const options = {
    scope: true,
    /*
   * attrs: {array} — a list of attributes for which directives will be created
   * By default it is ['id', 'for', 'form', 'aria-activedescendant', 'aria-controls', 'aria-describedby', 'aria-flowto', 'aria-labelledby', 'aria-owns']
   */
    attrs: ['id', 'for', 'form', 'aria-activedescendant', 'aria-controls', 'aria-describedby', 'aria-flowto', 'aria-labelledby', 'aria-owns', 'data-parent', 'href'],
}



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueUniqIds, options)
}
