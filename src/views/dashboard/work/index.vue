<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-11-27 16:37:05
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-02 14:56:20
-->
<template>
  <div class="app_container">
    <div class="app_container_top">
      <div class="app_container_top_title">
        <span v-text="'工作台'" />
      </div>
      <div class="app_container_top_main">
        <TopLeftModel />
        <TopRightModel />
      </div>
    </div>
    <div class="app_container_content">
      <el-row :gutter="50">
        <el-col :span="16">
          <DivBox
            :title="'进行中项目'"
          >
            <ContentProjects />
          </DivBox>
          <DivBox
            :title="'图表'"
          >
            <NewECharts />
          </DivBox>
          <DivBox
            :title="'地图'"
          >
            <NewMapECharts />
          </DivBox>
          <!-- <DivBox
            :title="'地图2'"
          >
            <MapEcharts />
          </DivBox> -->
          <DivBox
            :title="'图片轮播'"
          >
            <CarouselImage />
          </DivBox>
        </el-col>
        <el-col :span="8">
          <DivBox
            :title="'词云'"
          >
            <WordCoud />
          </DivBox>
          <DivBox
            :title="'雷达图'"
          >
            <RadarChart />
          </DivBox>
          <DivBox
            :title="'漏斗图'"
          >
            <FunnelPlot />
          </DivBox>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import TopLeftModel from '@/views/dashboard/work/TopLeftModel'
import TopRightModel from '@/views/dashboard/work/TopRightModel'
import ContentProjects from '@/views/dashboard/work/ContentProjects'
import WordCoud from '@/views/dashboard/work/WordCoud'
import NewECharts from '@/views/dashboard/work/newECharts'
import NewMapECharts from '@/views/dashboard/work/newMapECharts'
import MapEcharts from '@/views/dashboard/work/MapEcharts'
import RadarChart from '@/views/dashboard/work/RadarChart'
import FunnelPlot from '@/views/dashboard/work/FunnelPlot'
import CarouselImage from '@/views/dashboard/work/CarouselImage'
export default {
  components: {
    TopLeftModel,
    TopRightModel,
    ContentProjects,
    WordCoud,
    NewECharts,
    NewMapECharts,
    MapEcharts,
    RadarChart,
    FunnelPlot,
    CarouselImage
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .app_container{
    @include defaultWH();
    .app_container_top{
      @include defaultWH(150px);
      @include bgWhite();
      padding: 20px;
      .app_container_top_title{
        font-weight: bold;
        @include defaultWH(40%);
      }
      .app_container_top_main{
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include defaultWH(60%);
      }
    }
    .app_container_content{
      @include defaultWH(calc(100% - 150px),94%);
      margin: 20px 40px 0 40px;
    }
  }
</style>
