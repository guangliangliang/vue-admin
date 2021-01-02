<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-02 11:46:44
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-02 12:23:24
-->
<template>
  <ECharts
    :options="options"
    :autoresize="true"
    @click="disasterClick"
  />
</template>

<script>
require('echarts')
import ECharts from 'vue-echarts'
export default {
  name: 'EchartsBox',
  components: {
    ECharts
  },
  props: {
    options: {
      type: Object,
      default: () => {

      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    disasterClick(obj) {
      console.log(obj)
    }
  }
}
</script>

<style lang="scss">
  .echarts{
    width: 100%;
  }
</style>
