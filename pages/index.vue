<template>
  <div class="main-container">
    <navBar />
    <bannerCard />
    <div class="items-list-container">
      <h1 class="category-id" id="new">Новинки</h1>
      <div class="list-cards">
        <Carousel :items-to-show="5" :wrap-around="false">
          <Slide v-for="slide in data.slice(0, 10)" :key="slide.id">
            <div class="carousel__item"><itemCard :item="slide" /></div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="items-list-container" id="items">
      <div class="items-filter">
        <h1 class="category-id" id="new">Товары</h1>
      </div>
      <div class="items-list-cards">
        <itemCard v-for="item in data" :key="item.id" :item="item" />
      </div>
    </div>
    <div class="company-container">
      <h1 class="category-id" id="company">О компании</h1>
      <div class="about-text">
        <p>
          На данный момент в едином формате действует 13 розничных магазинов в
          Иркутске и 3 в Ангарске. Мы совмещаем лучшее от интернет-магазинов и
          обычных зоомагазинов и прилагаем все усилия, чтобы всегда оставаться
          лучшими для вас!
        </p>
        <video loop muted autoplay>
          <source src="~/public/video.mp4" />
        </video>
      </div>
      <div class="about-company">
        <yandex-map
          v-model="map"
          :settings="{
            location: {
              center: [104.293021, 52.281181],
              zoom: 16,
            },
          }"
          height="400px"
        >
          <yandex-map-default-scheme-layer />
          <yandex-map-default-features-layer />

          <yandex-map-marker
            v-for="marker in markers"
            :key="marker.iconSrc"
            :settings="{ coordinates: marker.coordinates }"
            position="top-center left-center"
          >
            <img class="pin" alt="" :src="marker.iconSrc" />
          </yandex-map-marker>
        </yandex-map>
        <div class="contacts">
          <h1>Контакты</h1>
          <p>
            <span class="material-symbols-outlined"> call </span> +7 (950)
            547-48-91
          </p>
          <p>
            <span class="material-symbols-outlined"> location_on </span> ул.
            Литвинова, 18
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <NuxtImg id="footer-img" src="icon.png" sizes="75px" @click="scrollToTop"></NuxtImg>
  </div>
</template>
<style lang="scss">
.main-container {
  max-width: 1200px;
  margin: 0 auto 0 auto;
  @include respond-to(wide-tablets) {
    margin: 0 10px 0 10px;
  }
  display: flex;
  flex-direction: column;
  gap: 50px;
  .carousel__prev {
    margin-left: -15px;
  }
  .carousel__next {
    margin-right: -15px;
  }
  .items-list-container {
    .items-list-cards {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 220px);
      max-width: 1200px;
      margin: auto;
      justify-content: center;
    }
  }
  .company-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @include respond-to(wide-handhelds) {
      gap: 10px;
    }
    .about-text {
      display: flex;
      @include respond-to(wide-handhelds) {
        flex-direction: column;
      }
      gap: 20px;
      align-items: center;
      video {
        border-radius: 20px;
        width: 50%;
        @include respond-to(wide-handhelds) {
          width: 100%;
        }
      }
      p {
        font-size: 22px;
      }
    }
    canvas {
      border-radius: 30px;
    }
    .about-company {
      display: flex;
      gap: 40px;
      flex-direction: column;
      .contacts {
        p {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 20px;
          font-weight: 400;
        }
      }
    }
  }
  .pin {
    cursor: pointer;
    height: 50px;
    width: 50px;
  }
}
.footer {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-img{
    cursor: pointer;
  }
}
</style>

<script setup lang="ts">
import data from "~/public/data.json";
import { shallowRef } from "vue";
import type { YMap } from "@yandex/ymaps3-types";
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from "vue-yandex-maps";
import type { LngLat } from "@yandex/ymaps3-types";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const markers = [
  {
    coordinates: [104.293021, 52.281181] as LngLat,
    iconSrc: "pin.png",
  },
];

//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null);

const scrollToTop = () => {
    window.scrollTo(0, 0);
}
</script>
