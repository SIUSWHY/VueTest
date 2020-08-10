<template>
  <div class="cards_wrapper">
    <div class="card_product">
      <div>
        <img src="@/components/i/markets/subway_logo.png" class="logo_market" />
      </div>
      <div class="product_icon_position">
        <div class="product_icon_back_img">
          <img src="@/components/i/sandwiches/ovoshnoy.png" class="pic_size" />
        </div>
      </div>
      <div class="name_product" v-bind:name="items.name">{{items[2].name}}</div>
      <div class="ingredients">
        <a
          class="description_border"
          v-bind:description="items.description"
        >{{items[3].description}}</a>
      </div>
      <div class="price_item" v-bind:price="items.price">Цена: {{items[4].price}} руб</div>
      <QuantityProduct></QuantityProduct>
    </div>
  </div>
</template>

<script>
import QuantityProduct from "@/components/QuantityProduct";
export default {
  components: { QuantityProduct },
  data() {
    return {
      items: [
        { logo: "@/components/i/markets/subway_logo.png" },
        { image: "@/components/i/sandwiches/ovoshnoy.png" },
        { name: "Овощной" },
        { description: "Соус и овощи на выбор" },
        { price: "105" }
      ],
      activeCategory: "sandwiches"
    };
  }
};
</script>

<style scoped>
.price_item {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #e5194a;
  font-weight: 600;
  font-size: 10px;
}
.description_border {
  border-bottom: 1px dashed #000080;
  font-weight: 600;
  font-size: 10px;
  color: #000080;
  cursor: pointer;
}
.cards_wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-left: 180px;
}
.card_product {
  text-align: center;
  width: 150px;
  margin: 0px 10px 60px 10px;
}
.product_icon_position {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  vertical-align: top;
  z-index: 102;
}
.product_icon_back_img {
  width: 130px;
  height: 130px;
  border: 8px solid #fbbe18;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #fff;
}
.pic_size {
  width: 130px;
}
.logo_market {
  width: 110px;
}
.name_product {
  min-height: 25px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.ingredients {
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  height: 40px;
}
</style>