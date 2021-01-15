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
