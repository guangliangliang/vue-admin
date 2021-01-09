<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-08 21:31:46
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-08 22:13:00
-->
<template>
  <div class="settings">
    <drawer v-if="!hideSetting" v-model="drawerOpen" placement="right">
      <div slot="handler" class="setting">
        <el-button slot="handler" type="primary" style="margin-left: 16px;" @click="drawerOpen = !drawerOpen">
          <span v-text="drawerOpen?'开':'关'" />
        </el-button>
      </div>
      <span>ssss</span>
    </drawer>
  </div>
</template>
<script>
import Drawer from '@/components/Tools/Drawer'
export default {
  components: {
    Drawer
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
        top:40%;
        right:0;
    }
</style>
