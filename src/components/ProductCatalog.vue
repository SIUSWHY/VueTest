<template>
  <div class="ProductCatalog">
    <ProductCatalogItem
      v-for="product in $store.getters.cards"
      :key="product.name"
      :product_data="product"
    ></ProductCatalogItem>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProductCatalogItem from "@/components/ProductCatalogItem";

export default {
  components: {
    ProductCatalogItem
  },
  props: {},
  data() {
    return {
      // menu: this.cards,
      activeCategory: "sandwiches"
    };
  },
  computed: {
    ...mapGetters({
      cards: "cards"
    })
  }
};
</script>

<style>
.ProductCatalog {
  display: flex;
  flex-wrap: wrap;
  margin-left: 180px;
}
</style>