import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
// import Store from './vuex/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTimes, faTimesCircle, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faUserSecret, faAngleRight, faAngleLeft, faTimesCircle]);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
