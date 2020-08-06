<template>
  <div class="menu_style">
    <ul class="list_menu">
      <li class="target">
        <a class="list_menu_item">Сендвичи</a>
      </li>
      <li class="target">
        <a class="list_menu_item">Шаурма</a>
      </li>
      <li class="target">
        <a class="list_menu_item">Бургеры</a>
      </li>
      <li class="target">
        <a class="list_menu_item">Бургеры & Картофель</a>
      </li>
      <li class="target">
        <a class="list_menu_item">Тортилья & Салаты</a>
      </li>
      <li class="target">
        <a class="list_menu_item">Напитки & Дисерты</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  color: #fbbe18;
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
  color: black;
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
.target {
  margin: 6px 0px 6px 0px;
}
</style>
