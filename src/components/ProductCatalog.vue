<template>
  <div class="ProductCatalog">
    <ProductCatalogItem v-for="product in menu" :key="product.name" :product_data="product"></ProductCatalogItem>
  </div>
</template>
<script>
import ProductCatalogItem from "@/components/ProductCatalogItem";
import Store from "@/components/vuex/store";

export default {
  components: {
    ProductCatalogItem,
    Store
  },
  props: {},
  data() {
    return {
      menu: [
        {
          name: "Овощной",
          description: "Соус и овощи на выбор",
          image: "i/sandwiches/ovoshnoy.png",
          price: 105,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1
        },
        {
          name: "Индейка",
          description: "Сэндвич с индейкой, соус и овощи на выбор",
          image: "i/sandwiches/ind.png",
          price: 130,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1
        },
        {
          name: "Ветчина",
          description: "Сэндвич с ветчиной, соус и овощи на выбор",
          image: "i/sandwiches/vetchina.png",
          price: 130,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1
        },
        {
          name: "Индейка и ветчина",
          description: "Сендвич с индейкой и ветчиной, соус и овощи на выбор",
          image: "i/sandwiches/indandvet.png",
          price: 130,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1
        },
        {
          name: "Морепродукты",
          description: "Сэндвич с крабовым мясом, соус и овощи на выбор",
          image: "i/sandwiches/moreprodukty.png",
          price: 130,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1
        },
        {
          name: "Тунец",
          description: "Сэндвич с филе тунца, соус и овощи на выбор",
          image: "i/sandwiches/tune.png",
          price: 150,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1
        },
        {
          name: "Острый итальянский",
          description: "Сэндвич с салями и пепперони, соус и овощи на выбор",
          image: "i/sandwiches/ostitaliansky.png",
          price: 150,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1
        }
      ],
      activeCategory: "sandwiches"
    };
  },
  computed: {}
};
</script>

<style>
.ProductCatalog {
  display: flex;
  flex-wrap: wrap;
  margin-left: 180px;
}
</style>