<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-11-27 16:37:05
 * @LastEditors: gll
 * @LastEditTime: 2020-12-24 16:17:46
-->
<template>
  <div class="top_right_model">
    <div
      v-for="(item,index) in data"
      :key="item.name"
      :style="{borderRight:index===data.length-1?'none':' 1px solid gray'}"
      class="top_right_model_div"
    >
      <div class="top_right_model_inner_div">
        <span class="top_right_model_name" v-text="item.name" /><br>
        <span class="top_right_model_value" v-text="item.value" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TopRightModel',
  props: {
    data: {
      type: Array,
      default: () => [
        {
          name: '项目数',
          value: 56
        },
        {
          name: '项目排名',
          value: '8/24'
        },
        {
          name: '项目访问',
          value: '2,222'
        }
      ]
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
  .top_right_model{
    display: flex;
    .top_right_model_div{
      border-right: 1px solid gray;
      text-align: center;
      margin: 0 15px;
      .top_right_model_inner_div{
        position: relative;
        right: 10px;
      }
      .top_right_model_name{
        color:gray;
      }
      .top_right_model_value{

      }
    }
  }
</style>
