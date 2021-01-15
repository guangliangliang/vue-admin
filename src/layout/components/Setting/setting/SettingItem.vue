<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-09 16:42:50
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-15 11:19:06
-->
<template>
  <div class="setting-item">
    <h3 v-if="title" class="title">{{ title }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SettingItem',
  // eslint-disable-next-line vue/require-prop-types
  props: ['title']
}
</script>

<style lang="scss" scoped>
  .setting-item{
    margin-bottom: 24px;
    .title{
      font-size: 14px;
      color: 'white';
      line-height: 22px;
      margin-bottom: 12px;
    }
  }
</style>
