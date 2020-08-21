// make sure to call Vue.use(Vuex) if using a module system

import Vue from 'vue'
import Vuex from 'vuex'

export default {};

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})

new Vue({
    el: '#quant',
    computed: {
        count() {
            return store.state.count
        }
    },
    methods: {
        increment() {
            store.commit('increment')
        },
        decrement() {
            store.commit('decrement')
        }
    }
})