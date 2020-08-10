<template>
  <div>
    <!-- Количество товара -->
    <div class="input_group_quantity_goods">
      <div class="button_minus_style">
        <span class="button_minus">-</span>
      </div>
      <input class="quantity_product" type="text" value="1" size="5" />
      <div class="button_plus_style">
        <span class="button_plus">+</span>
      </div>
    </div>
    <button class="buy_basket">В КОРЗИНУ</button>
  </div>
</template>

<script>
export default {};
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
.input_group_quantity_goods {
  display: flex;
  justify-content: space-evenly;
}
.button_plus {
  font-size: 15px;
}
.button_minus {
  font-size: 15px;
}
.quantity_product {
  border: none;
  border-radius: 10px;
  height: 20px;
  text-align: center;
  width: 80px;
}
.button_plus_style {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 100%;
}
.button_minus_style {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 100%;
}
</style>