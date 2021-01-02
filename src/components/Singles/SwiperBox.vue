<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-02 11:46:44
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-02 15:56:59
-->
<template>
  <div ref="swiper_parent" class="swiper_parent">
    <Swiper ref="swiper" :options="option">
      <slot />
      <div v-if="paginationFlag" slot="pagination" class="swiper-pagination" />
    </Swiper>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import { Swiper } from 'vue-awesome-swiper'
export default {
  name: 'SwiperBox',
  components: {
    Swiper
  },
  props: {
    paginationFlag: {
      type: Boolean,
      defualt: false
    }
  },
  data() {
    return {
      option: {
        loop: true,
        slidesPerView: 3,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        speed: 500,
        on: {
          slideChange: function() {
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this?.$refs?.swiper?.$swiper
    }
  }
}
</script>

<style lang="scss">
.swiper-slide{
  text-align: center;
}
</style>
