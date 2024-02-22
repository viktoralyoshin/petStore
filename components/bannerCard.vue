<template>
  <div class="banner-container">
    <div class="banner-content">
      <div class="banner-text">
        <h2>Animalerie</h2>
        <h1><span>#</span>Выгодно и точка</h1>
      </div>
      <NuxtImg id="banner-img" src="dog.png" width="550px"></NuxtImg>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.banner-container {
  box-shadow: 0 0 30px rgba(33, 33, 33, 0.2);
  border-radius: 40px;
  .banner-content {
    padding: 20px 30px 20px 30px;
    display: flex;
    gap: 30px;
    align-items: center;
    @include respond-to(wide-handhelds) {
      flex-direction: column;
      #banner-img{
        width: 300px;
      }
      align-items: center;
    }
    @include respond-to(tablets) {
      #banner-img{
        width: 400px;
      }
    }
    .banner-text {
      h1 {
        font-size: 60px;
      }
      h2 {
        font-size: 36px;
        color: $secondary-color;
      }
      span{
        color: $secondary-color;
      }
    }
  }
}
</style>
