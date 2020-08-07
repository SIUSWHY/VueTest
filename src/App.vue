<template>
  <div id="app">
    <div class="menu_and_shopping_basket_layout">
      <ProductsMenu />
      <ProductBasket />
    </div>
    <div>
      <ProductItem />
    </div>
  </div>
</template>

<script>
import ProductsMenu from "@/components/ProductsMenu";
import ProductBasket from "@/components/ProductBasket";
import ProductItem from "@/components/ProductItem";
export default {
  name: "App",
  components: {
    ProductsMenu,
    ProductBasket,
    ProductItem
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.menu_and_shopping_basket_layout {
  float: left;
  margin: 5px 15px 0px 0px;
  display: flex;
  flex-direction: column;
}
</style>
