<template>
  <div>
    <el-dropdown trigger="click" >
      <a href="javascript:void(0)">
        {{ title }}
        <Icon :size="18" type="md-arrow-dropdown" />
      </a>
      <el-dropdown-menu >
        <el-dropdown-item   @click.native="selectLang(key)"  v-for="(value, key) in localList" :name="key" :key="`lang-${key}`">{{ value }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Language',
  props: {
    lang: String,
  },
  data () {
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
  watch: {
    lang (lang) {
      console.log(lang)
      this.$i18n.locale = lang
    }
  },
  computed: {
    title () {
      return this.langList[this.lang]
    }
  },
  methods: {
    selectLang (name) {
      this.$emit('on-lang-change', name)
    }
  }
}
</script>
