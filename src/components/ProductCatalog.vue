<template>
  <div class="ProductCatalog">
    <ProductCatalogItem v-for="product in menu" :key="product.name" :product_data="product"></ProductCatalogItem>
  </div>
</template>
<script>
import ProductCatalogItem from "@/components/ProductCatalogItem";

export default {
  components: {
    ProductCatalogItem
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
          weight: 1,
          components: {
            size: {},
            bread: "whit-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Индейка",
          description: "Сэндвич с индейкой, соус и овощи на выбор",
          image: "i/sandwiches/ind.png",
          price: 130,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Ветчина",
          description: "Сэндвич с ветчиной, соус и овощи на выбор",
          image: "i/sandwiches/vetchina.png",
          price: 130,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Индейка и ветчина",
          description: "Сендвич с индейкой и ветчиной, соус и овощи на выбор",
          image: "i/sandwiches/indandvet.png",
          price: 130,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Морепродукты",
          description: "Сэндвич с крабовым мясом, соус и овощи на выбор",
          image: "i/sandwiches/moreprodukty.png",
          price: 130,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Тунец",
          description: "Сэндвич с филе тунца, соус и овощи на выбор",
          image: "i/sandwiches/tune.png",
          price: 150,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Острый итальянский",
          description: "Сэндвич с салями и пепперони, соус и овощи на выбор",
          image: "i/sandwiches/ostitaliansky.png",
          price: 150,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Б.М.Т.",
          description: "Ветчина, салями, пепперони, соус и овощи на выбор",
          image: "i/sandwiches/bmt.png",
          price: 150,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Куриная грудка",
          description: "Куриное филе, соус и овощи на выбор",
          image: "i/sandwiches/kurgrud.png",
          price: 150,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Ростбиф",
          description: "Сэндвич с говядиной, соус и овощи на выбор",
          image: "i/sandwiches/rostbif.png",
          price: 165,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Мелт",
          description: "Индейка, ветчина, бекон, соус и овощи на выбор",
          image: "i/sandwiches/malt.png",
          price: 165,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Курица бекон",
          description: "Куриное филе с беконом. Соус и овощи на выбор",
          image: "i/sandwiches/kurbeckon.png",
          price: 165,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Террияки",
          description:
            "Куриное филе в кисло-сладком соусе. Соус и овощи на выбор",
          image: "i/sandwiches/teriaki.png",
          price: 165,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {
            size: "1x",
            bread: "white-italian",
            vegetable: [],
            sauce: [],
            filling: []
          }
        },
        {
          name: "Биф Клаб",
          description: "С котлетой из курицы и говядины",
          image: "i/sandwiches/beef-club.png",
          price: 150,
          category: "sandwiches",
          market: "subway",
          type: "multiple",
          weight: 1,
          components: {}
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