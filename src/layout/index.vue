<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2020-12-24 09:46:02
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-15 11:21:28
-->
<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <Sidebar v-if="ifVertical" class="sidebar-container" />
    <Setting />
    <div class="main-container" :style="{marginLeft:ifVertical?'210px':'0px !important'}">
      <div :class="{'fixed-header':fixedHeader}" :style="{width:widthVal}">
        <Navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, Setting } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Setting
  },
  mixins: [ResizeMixin],
  computed: {
    ifVertical() {
      return this.mode === 'vertical'
    },
    widthVal() {
      const result = '100%'
      const { fixedHeader, sidebar, mode } = this
      if (mode === 'horizontal') {
        return result
      }
      if (!fixedHeader) {
        return result
      }
      return sidebar.opened ? 'calc(100% - 210px)' : ' calc(100% - 54px)'
    },
    ...mapGetters('settings', [
      'mode', 'fixedHeader'
    ]),
    ...mapGetters('app', [
      'sidebar', 'device'
    ]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  mounted() {
    // this.changeSetting({ key: 'mode', value: 'horizontal' })
  },
  methods: {
    ...mapActions('settings', ['changeSetting']),
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container{
      .fixed-header {
          position: fixed;
          height: 50px;
          width: 100%;
          z-index: 100;
    }
}
</style>
