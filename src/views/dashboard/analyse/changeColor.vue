<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-09 11:53:45
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 12:01:29
-->
<template>
  <el-color-picker v-model="mainColor" size="small" @change="changeColor" />
</template>

<script>
import Vue from 'vue'
import { ColorPicker } from 'element-ui'
import { changeThemeColor, curColor } from '@/utils/themeColorClient'

Vue.use(ColorPicker)

export default {
  data() {
    return {
      mainColor: curColor
    }
  },
  methods: {
    changeColor(newColor) {
      changeThemeColor(newColor)
        .then(t => console.log('主题色切换成功~'))
    }
  }
}
</script>
