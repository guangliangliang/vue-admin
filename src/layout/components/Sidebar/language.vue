<!--
 * @Description:
 * @Version: 1.0
 * @Autor: gll
 * @Date: 2020-12-05 15:07:16
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-08 16:08:58
-->
<template>
  <div>
    <el-dropdown trigger="click">
      <a href="javascript:void(0)">
        {{ title }}
        <Icon :size="18" type="md-arrow-dropdown" />
      </a>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(value, key) in localList" :key="`lang-${key}`" :name="key" @click.native="selectLang(key)">{{ value }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Language',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    lang: String
  },
  data() {
    return {
      langList: {
        'zh-CN': '语言',
        'en-US': 'Lang'
      },
      localList: {
        'zh-CN': '中文简体',
        'en-US': 'English'
      }
    }
  },
  computed: {
    title() {
      return this.langList[this.lang]
    }
  },
  watch: {
    lang(lang) {
      console.log(lang)
      this.$i18n.locale = lang
    }
  },
  methods: {
    selectLang(name) {
      this.$emit('on-lang-change', name)
    }
  }
}
</script>
