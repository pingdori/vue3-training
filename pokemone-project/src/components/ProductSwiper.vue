<template>
  <div class="d-none d-sm-none d-md-block">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide
        ><img
          src="https://tw.portal-pokemon.com/assets_c/2019/03/PS_asia_web_PC-thumb-1280x458-13234.png"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://tw.portal-pokemon.com/assets_c/2017/12/banner22_6-thumb-1280x458-12049.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://tw.portal-pokemon.com/assets_c/2020/06/PC_w1280h458-thumb-1280x458-14673.jpg"
          alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import "../../src/style.css";

// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
