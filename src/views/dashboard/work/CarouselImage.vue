<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-11-27 16:37:05
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-02 15:32:03
-->
<template>
  <SwiperBox>
    <SwiperSlide v-for="(item,index) in data" :key="index">
      <img :src="item.src">
    </SwiperSlide>
  </SwiperBox>
</template>
<script>
import { SwiperSlide, Swiper } from 'vue-awesome-swiper'
export default {
  name: 'CarouselImage',
  components: {
    SwiperSlide
  },
  props: {
    data: {
      type: Array,
      default: () => Array.from(({ length: 12 }), (_, index) => ({
        src: 'https://gitee.com/guangliangliang/images/raw/master/funny/哭.jpg'
      }))
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
