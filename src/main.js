import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import Vuex from 'vuex'

// import Store from './vuex/store'
Vue.use(Vuex)
=======
import store from ' ./vuex/store.js'

>>>>>>> 114700f43b4bb86413dde41afdffa0ce082dc969

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
