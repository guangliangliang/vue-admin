<template>
  <div class="navbar">
    <Hamburger v-if="!ifHorizontal" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <template v-if="ifHorizontal">
      <div class="left-menu">
        <Logo />
        <Menu />
      </div>
    </template>
    <div class="right-menu">
      <FullScreen class="right-menu-margin" />
      <Language class="right-menu-margin" :lang="local" @on-lang-change="setLocal" />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Language from '@/layout/components/Sidebar/language'
import FullScreen from '@/layout/components/Sidebar/FullScreen'
import Menu from '@/layout/components/Sidebar/Menu'
import Logo from '@/layout/components/Sidebar/Logo'

export default {
  components: {
    Hamburger,
    Language,
    FullScreen,
    Menu,
    Logo
  },
  computed: {
    ifHorizontal() {
      return this.mode === 'horizontal'
    },
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    ...mapGetters('app', [
      'local'
    ]),
    ...mapGetters('settings', [
      'mode'
    ])
  },
  // eslint-disable-next-line vue/order-in-components
  data() {
    return {
      isFullscreen: false // false非全屏状态、true全屏状态
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setLocal(this.local)
    })
  },
  methods: {
    ...mapMutations('app', [
      'setLocal'
    ]),
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
    position: relative;
    height: 50px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);

    .hamburger-container {
        float: left;
        height: 100%;
        line-height: 46px;
        cursor: pointer;
        transition: background .3s;
        -webkit-tap-highlight-color:transparent;

        &:hover {
            background: rgba(0, 0, 0, .025)
        }
    }
    .left-menu{
      display: flex;
      width: 50%;
      float: left;
    }
    .right-menu {
        display:flex;
        float: right;
        height: 100%;
        line-height: 50px;
        justify-content: center;
        align-items: center;
        &:focus {
            outline: none;
        }
        .right-menu-margin{
          margin:0 5px;
        }

        .right-menu-item {
            display: inline-block;
            height: 100%;
            padding: 0 8px;
            color: #5a5e66;
            font-size: 18px;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background .3s;

                &:hover {
                    background: rgba(0, 0, 0, .025)
                }
            }
        }

        .avatar-container {
            .avatar-wrapper {
                position: relative;
                @include defaultFlex();

                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .el-icon-caret-bottom {
                    font-size: 12px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
<style lang="scss">
  .navbar{
    .el-dropdown{
       margin-right: 5px;
    }
    .sidebar-logo-container{
      width: 150px;
    }
  }

</style>
