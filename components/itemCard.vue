<template>
  <teleport to="body">
    <transition>
      <modalWindow v-if="isModalShow" @close="isModalShow = false">
        <div class="modal-info">
          <div class="item-info">
            <div>
              <h1 class="category-id">{{ item.name }}</h1>
              <p>{{ item.description }}</p>
            </div>
            <div>
              <h1 class="category-id">Характеристики:</h1>
              <ul>
                <li>Тип Животного — {{ item.pet }}</li>
                <li>Категория корма — {{ item.category }}</li>
                <li>Вид корма — {{ item.type }}</li>
                <li>Класс корма — {{ item.class }}</li>
                <li>Возраст животного — {{ item.old }}</li>
              </ul>
            </div>
          </div>
          <div class="item-action">
            <NuxtImg
              id="item-img"
              :src="item.image"
              width="240px"
              height="390px"
            ></NuxtImg>
            <div class="item-action-info">
              <p id="price">
                <b>{{ item.price }} ₽</b>
              </p>
              <p>
                <span class="material-symbols-outlined"> adjust </span
                ><b>В наличии</b>
              </p>
            </div>
            <button class="cart-button">
              <span class="material-symbols-outlined"> shopping_cart </span>В
              корзину
            </button>
          </div>
        </div>
      </modalWindow>
    </transition>
  </teleport>
  <div class="item-card-container">
    <p class="item-card-tag">#{{ item.pet }}</p>
    <NuxtImg :src="item.image" width="160px" height="260px"></NuxtImg>
    <p id="name" @click="isModalShow = true">{{ item.name }}</p>
    <div class="item-card-price">
      <p>
        <b>{{ item.price }} ₽</b>
      </p>
      <button class="buy-button">Купить</button>
    </div>
  </div>
</template>
<style lang="scss">
.item-card-container {
  width: 200px;
  padding: 20px 20px 0 20px;
  border-radius: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  transition: 300ms ease-in;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  #name {
    cursor: pointer;
    transition: 300ms ease-in;
    &:hover {
      color: $secondary-color;
    }
  }
  .item-card-price {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 24px;
    }
    .buy-button {
      cursor: pointer;
      background-color: $secondary-color;
      color: white;
      font-size: 16px;
      padding: 15px 20px 15px 20px;
      border-radius: 15px;
      transition: 200ms ease-in;
      &:hover {
        background-color: #be6127;
      }
    }
  }
}
.item-card-tag {
  position: absolute;
  background-color: $bg-color;
  margin-right: 100px;
  box-shadow: 0 0 30px rgba(33, 33, 33, 0.2);
  padding: 5px 10px 5px 10px;
  border-radius: 30px;
}
.modal-info {
  display: flex;
  padding: 30px 60px 30px 50px;
  @include respond-to(handhelds) {
    padding: 30px 20px 30px 20px;
  }
  gap: 50px;
  justify-content: space-between;
  @include respond-to(wide-handhelds) {
    flex-direction: column;
  }
  .item-action {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
    #item-img {
      @include respond-to(wide-handhelds) {
        align-self: center;
      }
      @include respond-to(tablets) {
        width: 200px;
        height: 325px;
      }
    }
    .item-action-info {
      display: flex;
      justify-content: space-between;
      #price {
        font-size: 26px;
        margin: 0;
      }
      p {
        display: flex;
        gap: 5px;
        font-size: 18px;
        align-items: center;
        span {
          color: green;
        }
      }
    }
    .cart-button {
      cursor: pointer;
      padding: 15px 0 15px 0;
      font-size: 18px;
      font-weight: 500;
      border: 2px solid $secondary-color;
      border-radius: 15px;
      color: $secondary-color;
      background-color: $bg-color;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      &:hover {
        border-color: #be6127;
        color: #be6127;
      }
      transition: 300ms ease-in-out;
    }
  }
  .item-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    h1 {
      margin: 0;
      font-size: 26px;
    }
    p {
      font-size: 20px;
      @include respond-to(tablets) {
        font-size: 18px;
      }
    }
    ul {
      font-size: 20px;
      @include respond-to(tablets) {
        font-size: 18px;
      }
      margin: 0;
    }
  }
}
</style>
<script lang="ts">
export default {
  data() {
    return { isModalShow: false };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
