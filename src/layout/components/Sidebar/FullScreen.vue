<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-24 15:01:00
 * @LastEditors: gll
 * @LastEditTime: 2020-12-24 15:08:50
-->
<template>
  <i class="el-icon-full-screen" @click="toggleFullscreen" />
</template>

<script>
import screenfull from 'screenfull'
export default {
  data() {
    return {
      isFullscreen: false // false非全屏状态、true全屏状态
    }
  },
  created() {
    // 监听事件
    window.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    // 取消监听事件
    window.removeEventListener('keydown', this.keydown)
  },
  methods: {
    // 切换是否全屏
    toggleFullscreen() {
      screenfull.toggle()
    },
    // 阻止F11默认事件
    keydown(event) {
      if (event.keyCode === 122) {
        event.preventDefault()
        event.returnValue = false
      }
    }
  }
}
</script>
