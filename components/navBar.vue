<template>
  <div class="nav-bar-container">
    <NuxtLink to="/"><NuxtImg src="icon.png" sizes="75px"></NuxtImg></NuxtLink>
    <div class="nav-links-container">
      <a href="#">Новинки</a>
      <a href="#">Товары</a>
      <a href="#">О компании</a>
      <div class="sign-buttons">
        <a href="#" id="signin">Вход</a>
        <a href="#">Регистрация</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.nav-bar-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .nav-links-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    font: {
      size: 16px;
      weight: 600;
    }
    .sign-buttons{
      display: flex;
      gap: 10px;
      a{
        padding: 10px 20px 10px 20px;
        border: 2px solid $secondary-color;
        border-radius: 15px;
        color: $secondary-color;
        &:hover{
          border-color: #be6127;
          color: #be6127;  
        }
        transition: 300ms ease-in-out;
      }
      #signin{
        background-color: $secondary-color;
        color: white;
        &:hover{
          border-color: #be6127;
          background-color: #be6127;
;  
        }
      }
    }
  }
}
</style>
