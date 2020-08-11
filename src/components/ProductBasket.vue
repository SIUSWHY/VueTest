<template>
  <div>
    <div class="shopping_basket_style">
      <img src="@/components/i/shopping-basket.png" class="shopping_basket_pic_style" />
      <div class="category_name">
        <div class="category_name_style">Название</div>
        <div class="category_name_style">Количество</div>
      </div>
      <div class="order_price">Итого: 0 руб</div>
    </div>
    <div class="checkout_position">
      <button class="checkout_style">ОФОРМИТЬ ЗАКАЗ</button>
    </div>
  </div>
</template>

<style scoped>
.category_name {
  display: flex;
  justify-content: space-between;
  height: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.267);
  margin: 0px 10px 0px 10px;
  align-items: center;
}
.category_name_style {
  font-size: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 600;
}
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
  margin-top: -10px;
}
.checkout_style {
  background-color: #e5194a;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 9px;
  font-weight: 600;
  padding: 5px;
}
</style>