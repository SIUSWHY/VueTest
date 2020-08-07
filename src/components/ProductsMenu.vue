<template>
  <div class="menu_style">
    <ul class="list_menu">
      <li
        class="target"
        v-for="item in menu"
        :key="item.title"
        @click="chouseCategory(item.category)"
        :class="[activeCategory === item.category ? 'active' : '']"
      >
        <a class="list_menu_item">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: "Сендвичи", category: "sandwiches" },
        { title: "Шаурма", category: "shaurma" },
        { title: "Бургеры", category: "burgers" },
        { title: "Курица & Картофель", category: "chicken" },
        { title: "Тортилья & Салаты", category: "salads" },
        { title: "Напитки & Десерты", category: "drinks" }
      ],
      activeCategory: "sandwiches"
    };
  },
  methods: {
    chouseCategory(category) {
      this.activeCategory = category;
    }
  }
};
</script>

<style scoped>
.active {
  background-color: #fbbe18;
  border-radius: 5px;
}
.target {
  height: 25px;
  padding-top: 5px;
}
.menu_style {
  border-radius: 10px;
  background-color: white;
  width: 180px;
}
.list_menu_item {
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
}
.list_menu {
  list-style-type: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px;
  text-align: center;
  margin: 0px;
}
</style>
