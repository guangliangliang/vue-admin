<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-02 12:46:14
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-02 14:06:57
-->
<template>
  <div ref="echarts" :class="className" :style="{ height:height,width:width }" />
</template>
<script>
import EchartsMyChacrt from '@/layout/mixin/EchartsMyChacrt'
export default {
  name: 'EchartsMyChart',
  mixins: [EchartsMyChacrt],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    options: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    getOption() {
      return this.options
    }
  }
}
</script>
<style lang='scss' scoped>
.chartsClass {
  padding-left: 1.2rem;
}
</style>
