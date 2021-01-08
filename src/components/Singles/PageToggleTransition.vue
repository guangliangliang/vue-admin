<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-08 14:38:54
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-08 16:10:20
-->
<template>
  <transition
    v-if="!disabled"
    class="animate__animated"
    :enter-active-class="`animate__animated animate__${enterAnimate}`"
    :leave-active-class="`animate__animated animate__${leaveAnimate}`"
    :duration="{ enter: 200, leave: 400 }"
  >
    <slot />
  </transition>
  <div v-else><slot /></div>
</template>

<script>
import { preset as animates } from '@/config/default/animate.config'

export default {
  name: 'PageToggleTransition',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    animate: {
      type: String,
      validator(value) {
        return animates.findIndex(item => item.name === value) !== -1
      },
      default: 'bounce'
    },
    // eslint-disable-next-line vue/require-default-prop
    direction: {
      type: String,
      validator(value) {
        return ['x', 'y', 'left', 'right', 'up', 'down', 'downLeft', 'upRight', 'downRight', 'upLeft', 'downBig',
          'upBig', 'downLeft', 'downRight', 'topRight', 'bottomLeft', 'topLeft', 'bottomRight', 'default'].indexOf(value) > -1
      }
    },
    reverse: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    enterAnimate() {
      return this.activeClass(false)
    },
    leaveAnimate() {
      return this.activeClass(true)
    }
  },
  methods: {
    activeClass(isLeave) {
      const animate = animates.find(item => this.animate === item.name)
      if (animate === undefined) {
        return ''
      }
      let direction = ''
      if (this.direction === undefined) {
        direction = animate.directions[0]
      } else {
        direction = animate.directions.find(item => item === this.direction)
      }
      direction = (direction === undefined || direction === 'default') ? '' : direction
      if (direction !== '') {
        direction = isLeave && this.reverse ? this.reversePosition(direction, animate.directions) : direction
        direction = direction[0].toUpperCase() + direction.substring(1)
      }
      const t = isLeave ? 'Out' : 'In'
      return animate.name + t + direction
    },
    reversePosition(direction, directions) {
      if (direction.length === 0 || direction === 'x' || direction === 'y') {
        return direction
      }
      let index = directions.indexOf(direction)
      index = (index % 2 === 1) ? index - 1 : index + 1
      return directions[index]
    }
  }
}
</script>

<style lang="less">
</style>
