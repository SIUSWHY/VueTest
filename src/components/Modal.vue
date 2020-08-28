<script>
import IngredientsMenu from "@/components/IngredientsMenu";

export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  },
  components: {
    IngredientsMenu
  }
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="style_dialog_box">
          <div class="style_dialog_head_text">
            <div class="style_head_text">Выберите размер сендвича</div>
            <button class="btn-green" type="button" @click="close">
              <i class="fas fa-times-circle fa-3x"></i>
            </button>
          </div>
        </div>
        <IngredientsMenu />
        <div>
          <button class="button_back_style">
            <font-awesome-icon icon="chevron-right" />НАЗАД
          </button>
          <button class="button_next_style" id="trash">
            ВПЕРЕД
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
        <div class="card_product_style"></div>
        <div class="price_text_style">
          Итого:
          <div class="total_price">0</div>руб.
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.ingredient_target {
  color: black;
}
.style_dialog_box {
  background-color: #fbbe18;
  height: 30px;
  border-radius: 15px 15px 0px 0px;
}
.style_dialog_head_text {
  font-size: 20px;
  padding-top: 5px;
  color: white;
}
.style_head_text {
  display: flex;
  justify-content: center;
}
.closeButton {
  margin-top: -35px;
  height: 25px;
  color: white;
  border: none;
  background-color: #fbbe18;
  float: right;
}
.justify_content_text_menu {
  display: flex;
  justify-content: space-around;
  margin: 5px;
}
.style_dialog_text_menu {
  background-color: white;
  border-radius: 15px;
}
.style_menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  max-width: 1240px;
}
.style_text_menu {
  display: block;
  text-align: center;
  padding: 10px 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
}
.button_back_style {
  border: none;
  float: left;
  background-color: #e94a54;
  font-size: 15px;
  color: white;
  border-radius: 5px;
  margin-left: 15px;
  height: 20px;
  font-weight: 600;
}
.button_next_style {
  border: none;
  float: right;
  background-color: #e94a54;
  font-size: 15px;
  color: white;
  border-radius: 5px;
  margin-right: 15px;
  height: 20px;
  font-weight: 600;
}
.card_product_style {
  margin: 50px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.price_text_style {
  font-size: 15px;
  height: 25px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #e94a54;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  width: 600px;
  height: 400px;
  flex-direction: column;
  color: black;
  border-radius: 15px 15px 0px 0px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #c72222;
  border: 1px solid #ff0022;
  border-radius: 2px;
  height: 20px;
  float: right;
  margin-top: -20px;
}
</style>