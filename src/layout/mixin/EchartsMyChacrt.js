/*
 * @Description:  需要使用myCharts.setOption的时候引入当前minix
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-02 13:50:36
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-03 17:34:35
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
    },
    closeChart() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    }
  },
  watch: {
    options: {
      handler: (newOptions) => {
        console.log(this.chart)
        if (newOptions && Object.keys(newOptions).length > 0) {
          if (this.chart) {
            this.chart.setOption(newOptions, true)
          } else {
            this.initChart()
          }
        }
      },
      depp: true,
      immediate: true
    }
  },
  beforeDestroy() {
    this.closeChart()
  }
}
