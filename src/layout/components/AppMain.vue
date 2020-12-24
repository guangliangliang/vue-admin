<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-24 09:46:02
 * @LastEditors: gll
 * @LastEditTime: 2020-12-24 15:39:11
-->
<template>
  <div class="app-main">
    <div class="app_main_top">
      <TabHeader />
    </div>
    <div class="app_main_content">
      <transition
        class="animate__animated"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        :duration="{ enter: 200, leave: 400 }"
      >
        <router-view :key="key" />
      </transition>
    </div>
  </div>
</template>
<script>
import TabHeader from '@/layout/components/TabHeader'
export default {
  name: 'AppMain',
  components: {
    TabHeader
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
.app-main {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 50px);
    overflow: hidden;
    background: rgb(240, 242, 245);
    .app_main_top{
        @include defaultWH(10%);
        padding:20px 20px 0 20px;
    };
    .app_main_content{
        @include defaultWH(90%);
    }
}
.fixed-header+.app-main {
    padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
    .fixed-header {
        padding-right: 15px;
    }
}
</style>
