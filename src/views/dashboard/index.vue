<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-05 10:11:28
 * @LastEditors: gll
 * @LastEditTime: 2020-12-13 11:25:55
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}

</style>
