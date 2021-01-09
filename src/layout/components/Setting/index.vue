<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-08 21:31:46
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 17:35:43
-->
<template>
  <div class="settings">
    <drawer v-model="drawerOpen" placement="right">
      <div slot="handler" class="setting">
        <i :class="`el-icon-${drawerOpen?'close':'setting'} setting-icon`" />
      </div>
      <Setting />
    </drawer>
  </div>
</template>
<script>
import Drawer from '@/components/Tools/Drawer'
import Setting from '@/layout/components/Setting/setting'
export default {
  components: {
    Drawer,
    Setting
  },
  data() {
    return {
      drawerOpen: false
    }
  }
}
</script>
<style lang="scss" scoped>
    .settings{
        position:absolute;
        right:0;
    }
    .setting-icon{
        font-size: 40px;
        color: blue;
    }
</style>
