<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-09 16:42:49
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-09 22:01:32
-->
<template>
  <div class="side-setting">
    <setting-item>
      <el-button type="primary" icon="save" @click="saveSetting">{{ $t('save') }}</el-button>
      <el-button type="dashed" icon="redo" style="float: right" @click="resetSetting">{{ $t('reset') }}</el-button>
    </setting-item>
    <setting-item :title="$t('theme.color')">
      <ChangeColor />
    </setting-item>
    <setting-item :title="$t('navigate.title')">
      <img-checkbox-group
        :default-values="[mode]"
        @change="values => setMode(values[0])"
      >
        <img-checkbox :title="$t('theme.dark')" img="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" value="vertical" />
        <img-checkbox :title="$t('theme.light')" img="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" value="horizontal" />
      </img-checkbox-group>
      <div class="setting-item-single">
        {{ $t('navigate.fixedHeader') }}
        <el-switch v-model="fixedHeader" size="small" @change="val => setFixedHeader(val)" />
      </div>
    </setting-item>
    <setting-item :title="$t('animate.title')">
      <div class="setting-item-single">
        {{ $t('animate.disable') }}
        <el-switch v-model="animate.disabled" size="small" @change="val => setAnimate({...animate, disabled: val})" />
      </div>
      <div class="setting-item-single">
        {{ $t('animate.title') }}
        <el-select
          v-model="animate.name"
          class="select-item"
          size="small"
          @change="val => setAnimate({...animate, name: val})"
        >
          <el-option
            v-for="(item, index) in animates"
            :key="index"
            :label="item.alias"
            :value="item.name"
          />
        </el-select>
      </div>
      <div class="setting-item-single">
        {{ $t('animate.direction') }}
        <el-select
          v-model="animate.direction"
          class="select-item"
          size="small"
          @change="val => setAnimate({...animate, direction: val})"
        >
          <el-option v-for="(item, index) in directions" :key="index" :value="item">{{ item }}</el-option>
        </el-select>
      </div>
    </setting-item>
  </div>
</template>

<script>
import SettingItem from './SettingItem'
import { mapState, mapMutations } from 'vuex'
import ChangeColor from '@/views/dashboard/analyse/changeColor'
import { ImgCheckbox } from '@/components/Checkbox'
import { settings } from '@/config'
import { changeThemeColor } from '@/utils/themeColorClient'
const { Group: ImgCheckboxGroup } = ImgCheckbox
export default {
  name: 'Setting',
  i18n: require('./i18n'),
  components: { SettingItem, ChangeColor, ImgCheckbox, ImgCheckboxGroup },
  data() {
    return {
      copyConfig: 'Sorry, you have copied nothing O(∩_∩)O~',
      isDev: process.env.NODE_ENV === 'development'
    }
  },
  computed: {
    directions() {
      return this.animates.find(item => item.name == this.animate.name).directions
    },
    ...mapState('settings', ['animate', 'animates', 'mode', 'fixedHeader'])
  },
  watch: {
    'animate.name': function(val) {
      this.setAnimate({ name: val, direction: this.directions[0] })
    }
  },
  mounted() {
    console.log(this.animates)
  },
  methods: {
    getPopupContainer() {
      return this.$el.parentNode
    },
    saveSetting() {
      const closeMessage = this.$message.loading('正在保存到本地，请稍后...', 0)
      const config = {}// this.extractConfig(true)
      localStorage.setItem(process.env.VUE_APP_SETTING_KEY, JSON.stringify(config))
      setTimeout(closeMessage, 800)
    },
    resetData() {
      const { animate, mode, themeColor, fixedHeader } = settings
      this.setAnimate(animate)
      this.setMode(mode)
      this.setFixedHeader(fixedHeader)
      // changeThemeColor(themeColor)
      //   .then(t => console.log('主题色切换成功~'))
    },
    resetSetting() {
      const { resetData } = this
      this.$confirm('重置主题会刷新页面，当前页面内容不会保留，确认重置？', '确认信息', {
        distinguishCancelAndClose: true,
        cancelButtonText: '取消',
        confirmButtonText: '确定'
      }).then(() => {
        // resetData()
        localStorage.removeItem(process.env.VUE_APP_SETTING_KEY)
        window.location.reload()
        this.$message({
          type: 'success',
          message: '重置成功'
        })
      }).catch(action => {
        this.$message({
          type: 'info',
          message: '取消重置'
        })
      })
    },
    ...mapMutations('settings', ['setAnimate', 'setMode', 'setFixedHeader'])
  }
}
</script>

<style lang="scss" scoped>
  .side-setting{
    min-height: 100%;
    background-color: white;
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    position: relative;
    .flex{
      display: flex;
    }
    .select-item{
      width: 80px;
    }
    .setting-item-single{
      height: 40px;
      @include defaultFlex(space-between)
    }
  }
</style>
