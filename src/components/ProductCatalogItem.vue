<template>
  <div class="ProductCatalogItem">
    <div class="card_product">
      <div>
        <img src="@/components/i/markets/subway_logo.png" class="logo_market" />
      </div>
      <div class="product_icon_position">
        <div class="product_icon_back_img">
          <img :src=" require('@/components/' + product_data.image ) " class="pic_size" />
        </div>
      </div>
      <div class="name_product">{{product_data.name}}</div>
      <div class="ingredients">
        <a class="description_border">
          <Modal {{product_data.description}} />
        </a>
      </div>
      <div class="price_item">Цена: {{product_data.price}} руб</div>
      <QuantityProduct></QuantityProduct>
    </div>
  </div>
</template>
<script>
import QuantityProduct from "@/components/QuantityProduct";
import Store from "@/components/vuex/store";
import Modal from "@/components/Modal";

export default {
  components: {
    QuantityProduct,
    Store,
    Modal
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style>
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
  margin: 0px 10px 40px 10px;
}
.product_icon_position {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  vertical-align: top;
  z-index: 102;
}
.product_icon_back_img {
  width: 120px;
  height: 120px;
  border: 8px solid #fbbe18;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #fff;
}
.pic_size {
  width: 120px;
}
.logo_market {
  width: 110px;
}
.name_product {
  min-height: 25px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  padding-top: 5px;
}
.ingredients {
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  height: 60px;
}
</style>