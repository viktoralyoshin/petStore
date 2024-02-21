<template>
  <div class="modal-container">
    <div class="modal-main-info">
      <div class="modal-head">
        <h1 class="category-id">Информация о товаре</h1>
        <span class="material-symbols-outlined" @click="$emit('close')">
          close
        </span>
      </div>
      <slot> </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";
defineEmits(["close"]);
</script>

<style lang="scss">
.modal-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0px;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(2px);
  overflow-y: initial;
  .modal-main-info {
    display: flex;
    flex-direction: column;
    width: 80%;
    @include respond-to(handhelds) {
      width: 90%;
    }
    background-color: $bg-color;
    box-shadow: 0 0 30px rgba(22, 22, 22, 0.4);
    border-radius: 15px;
    height: 80vh;
    overflow-y: scroll;
    .modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 40px 0px 40px;
      @include respond-to(handhelds) {
        padding: 10px 20px 0px 20px;
      }
      span {
        cursor: pointer;
      }
      h1 {
        @include respond-to(handhelds) {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
