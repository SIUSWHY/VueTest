import vue from 'vue'
import vuex from 'vuex'
import menu from "@/components/cards";

vue.use(vuex);
const store = new vuex.Store({
    state: menu, // spread
    mutation: {},
    actions: {},
    getters: {
        cards: (state) => state.menu
    }
});
console.log(store.state.menu);


export default store;