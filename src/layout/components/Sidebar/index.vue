<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-11-27 16:37:05
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-08 21:18:48
-->
<template>
  <div :class="{'has-logo':sidebarLogo}">
    <Logo />
    <Menu />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import Menu from './Menu'

export default {
  components: {
    Menu,
    Logo
  },
  computed: {
    ...mapGetters('settings', [
      'sidebarLogo'
    ])
  }
}
</script>
