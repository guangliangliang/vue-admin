<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-05-11 10:34:23
 * @LastEditors: gll
 * @LastEditTime: 2020-05-11 15:53:20
 -->
<template>
  <div class="kong">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'NoData',
  props: {
    text: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style scoped lang="scss">
    .kong {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(40, 68, 106, 0.7);
        .text {
            position: absolute;
            top: 50%;
            left: 50%;
            padding: 0.1rem;
            color: #64BFEE;
            font-size: 30px;
            border: 0.02rem solid #64BFEE;
            transform: translate(-50%, -50%);
        }
    }
</style>
