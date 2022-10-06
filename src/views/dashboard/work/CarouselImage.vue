<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-11-27 16:37:05
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-15 11:23:41
-->
<template>
  <SwiperBox>
    <SwiperSlide v-for="(item,index) in data" :key="index">
      <img :src="item.src">
    </SwiperSlide>
  </SwiperBox>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { SwiperSlide, Swiper } from 'vue-awesome-swiper'
import swiperSrc from '@/assets/swiper.jpg'
export default {
  name: 'CarouselImage',
  components: {
    SwiperSlide
  },
  props: {
    data: {
      type: Array,
      default: () => Array.from(({ length: 12 }), (_, index) => ({
        src: swiperSrc
      }))
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
