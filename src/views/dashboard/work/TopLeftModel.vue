<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-11-27 16:37:05
 * @LastEditors: gll
 * @LastEditTime: 2020-12-24 16:21:28
-->
<template>
  <div class="top_left_model">
    <div class="top_left_model_left">
      <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
    </div>
    <div class="top_left_model_right">
      <span class="welcome_text" v-text="`下午好,${name}先生`" /><br>
      <span v-text="`${job}|${section}`" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TopLeftModel',
  props: {
    name: {
      type: String,
      default: 'admin'
    },
    job: {
      type: String,
      default: '前端开发工程师'
    },
    section: {
      type: String,
      default: 'google-搜索事业部'
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  }
}
</script>
<style lang="scss" scoped>
  .top_left_model{
    display:flex;
    .top_left_model_left{
      img{
        @include defaultWH(50px,50px);
        border-radius: 50%;
      }
    }
    .top_left_model_right{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 30px;
      .welcome_text{
        font-weight: bold;
      }
    }
  }
</style>
