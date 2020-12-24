<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-05-11 10:34:23
 * @LastEditors: gll
 * @LastEditTime: 2020-12-24 17:38:14
 -->
<template>
  <div class="div_box_parent">
    <div class="div_box_parent_top">
      <span v-text="title" />
    </div>
    <div class="div_box_parent_content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DivBox',
  props: {
    title: {
      type: String,
      default: '名称'
    }
  }
}
</script>

<style scoped lang="scss">
.div_box_parent {
    @include defaultWH();
    @include bgWhite();
    .div_box_parent_top {
      @include defaultWH(70px);
      @include defaultFlex(flex-start);
      border-bottom:1px solid rgb(240, 240, 240);
      span{
        position: relative;
        left: 30px;
        font-weight:bold;
      }
    }
    .div_box_parent_content {
      @include defaultWH(calc(100 - 70px));
    }
}
</style>
