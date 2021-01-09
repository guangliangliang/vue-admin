<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-24 09:46:02
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 15:19:22
-->
<template>
  <div class="app-main">
    <div class="app_main_top">
      <Breadcrumb class="breadcrumb-container" />
      <TabHeader />
    </div>
    <div class="app_main_content">
      <PageToggleTransition
        :disabled="animate.disabled"
        :animate="animate.name"
        :direction="animate.direction"
      >
        <router-view :key="key" />
      </PageToggleTransition>
    </div>
  </div>
</template>
<script>
import TabHeader from '@/layout/components/TabHeader'
import Breadcrumb from '@/components/Breadcrumb'
import { mapState } from 'vuex'
export default {
  name: 'AppMain',
  components: {
    TabHeader,
    Breadcrumb
  },
  computed: {
    ...mapState('settings', ['animate']),
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
    .breadcrumb-container {
        // float: left;
    }
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
