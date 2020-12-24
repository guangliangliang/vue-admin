<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-23 16:31:55
 * @LastEditors: gll
 * @LastEditTime: 2020-12-24 14:34:02
-->
<template>
  <el-menu
    v-show="visible"
    class="contextmenu"
    :style="style"
    :menu-trigger="'click'"
    @select="handleClick"
  >
    <el-menu-item v-for="item in itemList" :key="item.key" :index="item.key">
      <i v-if="item.icon" :class="item.icon" />
      <span>{{ $t(item.text) }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Contextmenu',
  props: {
    visible: {
      type: Boolean,
      required: false,
      default: false
    },
    itemList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      left: 0,
      top: 0,
      target: null,
      meta: null,
      selectedKeys: []
    }
  },
  computed: {
    style() {
      return {
        left: this.left + 'px',
        top: this.top + 'px'
      }
    }
  },
  created() {
    window.addEventListener('click', this.closeMenu)
    window.addEventListener('contextmenu', this.setPosition)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.closeMenu)
    window.removeEventListener('contextmenu', this.setPosition)
  },
  methods: {
    closeMenu() {
      this.$emit('update:visible', false)
    },
    setPosition(e) {
      this.left = e.clientX
      this.top = e.clientY
      this.target = e.target
      this.meta = e.meta
    },
    handleClick(key, keyPath) {
      this.$emit('select', key, this.target, this.meta)
      this.closeMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
  .contextmenu{
    position: fixed;
    z-index: 1000;
    border-radius: 4px;
    box-shadow: -4px 4px 16px 1px rgba(0, 0, 0, 0.15) !important;
  }
  .ant-menu-item {
    margin: 0 !important // 菜单项之间的缝隙会影响点击
  }
</style>
