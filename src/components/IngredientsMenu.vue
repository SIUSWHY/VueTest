<template>
  <div>
    <div class="justify_content_text_menu">
      <div class="style_dialog_text_menu">
        <nav>
          <ul class="style_menu">
            <li
              class="ingredient_target"
              v-for="item in menu"
              :key="item.title"
              @click="chouseCategory(item.category)"
              :class="[activeCategory === item.category ? 'active_type_menu' : '']"
            >
              <a class="style_text_menu">{{item.title}}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: "Размер", category: "sizes" },
        { title: "Хлеб", category: "bread" },
        { title: "Овощи", category: "vegetable" },
        { title: "Соусы", category: "sauce" },
        { title: "Начинка", category: "filling" },
        { title: "Готово!", category: "complite" }
      ],
      activeCategory: "sizes"
    };
  },
  methods: {
    chouseCategory(category) {
      this.activeCategory = category;
    }
  },
  components: {}
};
</script>

<style scoped>
.active_type_menu {
  background-color: #e94a54;
  border-radius: 5px;
  color: white;
}
.justify_content_text_menu {
  display: flex;
  justify-content: space-around;
  margin: 5px;
}
.style_dialog_text_menu {
  background-color: white;
  border-radius: 5px;
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
  padding: 5px 15px 5px 15px;
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
</style>
