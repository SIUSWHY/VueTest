<template>
  <div class="shopping_basket_style">
    <img src="@/i/shopping-basket.png" class="shopping_basket_pic_style" />
    <div class="order_price">Итого: 0 руб</div>
    <div class="checkout_position">
      <button class="checkout_style">ОФОРМИТЬ ЗАКАЗ</button>
    </div>
  </div>
</template>

<style scoped>
.shopping_basket_style {
  background-color: #fbbe18d7;
  width: 180px;
  border-radius: 10px;
  margin-top: 20px;
}
.shopping_basket_pic_style {
  width: 180px;
  border-radius: 10px 10px 0px 0px;
}
.order_price {
  display: flex;
  justify-content: center;
  padding: 40px;
  font-weight: 600;
  font-size: 10px;
}
.checkout_position {
  display: flex;
  justify-content: center;
}
.checkout_style {
  background-color: #e5194a;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 8px;
  font-weight: 600;
  padding: 5px;
}
</style>