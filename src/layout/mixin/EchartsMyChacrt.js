/*
 * @Description:  需要使用myCharts.setOption的时候引入当前minix
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-02 13:50:36
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-02 14:53:43
 */
const echarts = require('echarts')
export default {
  data() {
    return {
      chart: null,
      option: {}
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.echarts)
      this.option = this.getOption()
      this.chart.setOption(this.option)
      window.addEventListener('resize', () => {
        // 自动渲染echarts
        this.chart.resize()
      })
    }
  },
  watch: {
    options: {
      handler: (newOptions) => {
        // this.chart.setOption(newOptions)
      },
      depp: true
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  }
}
