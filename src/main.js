import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

// import Store from './vuex/store'
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
