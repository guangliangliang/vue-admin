<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-11-27 16:37:05
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-02 11:38:55
-->
<template>
  <div class="content_projects">
    <el-row :gutter="24">
      <el-col v-for="twoIndex in [1,2,3]" :key="twoIndex" :span="8">
        <div class="content_projects_single">
          <div class="projects_single_top">
            <img :scr="data[twoIndex].img">
            <span v-text="data[twoIndex].name" />
          </div>
          <div class="projects_single_content">
            <p>{{ data[twoIndex].content }}</p>
          </div>
          <div class="projects_single_bottom">
            <span v-text="data[twoIndex].author" />
            <span v-text="data[twoIndex].time" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ContentProjects',
  props: {
    data: {
      type: Array,
      default: () => Array.from(({ length: 6 }), (_, index) => ({
        img: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
        name: 'vue-admin' + index,
        content: '这个一个vue脚手架,帮助你快速开发vue项目',
        author: 'gll',
        time: '1小时前'
      }))
    }
  }
}
</script>
<style lang="scss" scoped>
  @mixin commonHeight(){
    height:calc(100% / 3);
  }
  .content_projects{
    .content_projects_single{
          margin: 10px;
          padding: 10px;
          border:1px solid rgb(240, 240, 240);
         &:hover{
           box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
         }
         .projects_single_top{
           @include commonHeight()
        }
        .projects_single_content{
          @include commonHeight()
        }
        .projects_single_bottom{
          @include commonHeight()
        }
    }
  }
</style>
