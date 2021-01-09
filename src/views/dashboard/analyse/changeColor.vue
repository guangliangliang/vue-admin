<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-09 11:53:45
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 20:48:46
-->
<template>
  <el-color-picker v-model="mainColor" size="small" @change="changeColor" />
</template>

<script>
import { changeThemeColor, curColor } from '@/utils/themeColorClient'

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
