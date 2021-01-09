<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2020-12-24 09:46:02
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 16:03:32
-->
<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <Sidebar v-if="ifVertical" class="sidebar-container" />
    <div class="main-container" :style="{marginLeft:ifVertical?'210px':'0px !important'}">
      <div :class="{'fixed-header':fixedHeader}">
        <Navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  mounted() {
    // this.changeSetting({ key: 'mode', value: 'horizontal' })
  },
  computed: {
    ifVertical() {
      return this.mode === 'vertical'
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
  methods: {
    ...mapActions('settings', ['changeSetting']),
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

