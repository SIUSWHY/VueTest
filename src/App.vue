<template>
  <div id="app">
    <div class="menu_and_shopping_basket_layout">
      <ProductsMenu @chouseCategory="check(category)" />
      <ProductBasket />
    </div>
    <div class="position_of_product_card">
      <ProductCatalog></ProductCatalog>
    </div>
  </div>
</template>

<script>
import ProductCatalog from "@/components/ProductCatalog";
import ProductsMenu from "@/components/ProductsMenu";
import ProductBasket from "@/components/ProductBasket";
import store from "@/components/vuex/store";

export default {
  name: "App",
  components: {
    ProductsMenu,
    ProductBasket,
    ProductCatalog,
    store
  },
  methods: {
    check(category) {
      console.log(check);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.position_of_product_card {
  display: flex;
}
.menu_and_shopping_basket_layout {
  float: left;
  margin: 0px 15px 0px 0px;
  /* display: flex;
  flex-direction: column; */
  position: fixed;
}
</style>
