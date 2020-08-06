<template>
  <div class="cards_wrapper">
    <div class="card_product">
      <div>
        <img src="@/i/markets/subway_logo.png" class="logo_market" />
      </div>
      <div class="product_icon_position">
        <div class="product_icon_back_img">
          <img src="@/i/sandwiches/ovoshnoy.png" class="pic_size" />
        </div>
      </div>
      <div class="name_product">Овощной</div>
      <div class="ingredients">
        <a class="description_border">Соус и овощи на выбор</a>
      </div>
      <div class="price_item">Цена: 105 руб</div>
      <button class="buy_basket">В КОРЗИНУ</button>
    </div>

    <div class="card_product">
      <div>
        <img src="@/i/markets/subway_logo.png" class="logo_market" />
      </div>
      <div class="product_icon_position">
        <div class="product_icon_back_img">
          <img src="@/i/sandwiches/ovoshnoy.png" class="pic_size" />
        </div>
      </div>
      <div class="name_product">Овощной</div>
      <div class="ingredients">
        <a class="description_border">Соус и овощи на выбор</a>
      </div>
      <div class="price_item">Цена: 105 руб</div>
      <button class="buy_basket">В КОРЗИНУ</button>
    </div>

    <div class="card_product">
      <div>
        <img src="@/i/markets/subway_logo.png" class="logo_market" />
      </div>
      <div class="product_icon_position">
        <div class="product_icon_back_img">
          <img src="@/i/sandwiches/ovoshnoy.png" class="pic_size" />
        </div>
      </div>
      <div class="name_product">Овощной</div>
      <div class="ingredients">
        <a class="description_border">Соус и овощи на выбор</a>
      </div>
      <div class="price_item">Цена: 105 руб</div>
      <button class="buy_basket">В КОРЗИНУ</button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.buy_basket {
  background-color: #fbbe18;
  border-radius: 50px;
  font-size: 10px;
  border: none;
  padding: 5px;
  width: 75px;
  margin-top: 10px;
}
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
}
.card_product {
  text-align: center;
  width: 150px;
  margin: 10px 10px 60px 10px;
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
  padding: 10px;
}
</style>