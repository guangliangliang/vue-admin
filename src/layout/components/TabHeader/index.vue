<template>
  <div class="tab_header">
    <Contextmenu
      :item-list="menuItemList"
      :visible.sync="menuVisible"
      @select="onMenuSelect"
    />
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @contextmenu.prevent.native="menuVisible = true"
      @tab-click="clickTab"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="(item,index) in editableTabs"
        :key="item.name"
        :closable="index!==1"
        :label="$t(item.title)"
        :name="item.name"
      />
    </el-tabs>
  </div>
</template>
<script>
import Contextmenu from '@/components/menu/Contextmenu'
export default {
  name: 'TabHeader',
  components: {
    Contextmenu
  },
  props: {
    text: {
      type: String,
      default: '暂无数据'
    }
  },
  data() {
    return {
      editableTabsValue: '',
      editableTabs: [],
      menuVisible: false
    }
  },
  computed: {
    menuItemList() {
      return [
        { key: '1', icon: 'el-icon-d-arrow-left', text: 'closeLeft' },
        { key: '2', icon: 'el-icon-d-arrow-right', text: 'closeRight' },
        { key: '3', icon: 'el-icon-close', text: 'closeOthers' },
        { key: '4', icon: 'el-icon-refresh', text: 'refresh' }
      ]
    }
  },
  watch: {
    '$router.options.routes': function(val) {
      console.log(val)
    },
    '$route': {
      immediate: true,
      handler: function(newRoute) {
        const { name: title, fullPath: name } = newRoute
        const currentRoute = this.editableTabs.filter(item => item.name === name)[0]
        let currentName = ''
        if (currentRoute) {
          currentName = currentRoute.name
        } else {
          this.editableTabs.push({ title, name })
          currentName = name
        }
        debugger
        this.editableTabsValue = currentName
      },
      deep: true
    }
  },
  methods: {
    onMenuSelect(key, target, pageKey) {
      debugger
      console.log(key)
      switch (key) {
        case '1': this.closeLeft(pageKey); break
        case '2': this.closeRight(pageKey); break
        case '3': this.closeOthers(pageKey); break
        case '4': this.refresh(pageKey); break
        default: break
      }
    },
    closeLeft(pageKey) {
      const { editableTabsValue: name, editableTabs } = this
      const currentIndex = editableTabs.findIndex(item => item.name === name)
      console.log(currentIndex)
      if (currentIndex !== -1) {
        this.editableTabs = editableTabs.slice(currentIndex)
        console.log(editableTabs.slice(currentIndex))
      }
    },
    closeRight(pageKey) {
      const { editableTabsValue: name, editableTabs } = this
      const currentIndex = editableTabs.findIndex(item => item.name === name)
      if (currentIndex !== -1) {
        this.editableTabs = editableTabs.slice(0, currentIndex + 1)
      }
    },
    closeOthers(pageKey) {
      const { editableTabsValue: name, editableTabs } = this
      const currentIndex = editableTabs.findIndex(item => item.name === name)
      if (currentIndex !== -1) {
        this.editableTabs = editableTabs.slice(currentIndex, currentIndex + 1)
      }
    },
    refresh() {
      this.$router.push(this.editableTabsValue)
    },
    removeTab(targetName) {
      const tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    clickTab(targetName) {
      this.$router.push(this.editableTabsValue)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">
  .tab_header{
     .el-tabs__nav{
      @include bgWhite();
    }
    .el-tabs__header{
      margin:0;
    }
  }
</style>
