<template>
  <el-menu
    id="nav"
    :default-active="activeMenu"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
    @select="handleSelect"
    router
  >
    <el-menu-item disabled class="logo">Otirik's Blog</el-menu-item>
    <!-- <el-menu-item index="home" :route="{path: '/home'}">首页</el-menu-item>
    <el-menu-item index="about" :route="{path: '/about'}">关于我</el-menu-item>
    <el-menu-item index="search" :route="{path: '/search'}">搜索文章</el-menu-item> -->
    <el-menu-item
      v-for="menu in menus"
      :key="menu.index"
      :index="menu.index"
      :route="menu.route"
      >{{ menu.text }}</el-menu-item
    >
  </el-menu>
  <!-- <el-form :inline="true" size="small" class="nav-form">
        <el-form-item style="margin-right: 0.75em">
          <el-input v-model="keyword" placeholder="请输入关键词" clearable>
            <template #prefix>
              <el-icon class="el-input__icon" size="1.25em">
                <search />
              </el-icon>
            </template></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form> -->
</template>

<script>
import { Search } from '@element-plus/icons-vue'
export default {
  components: {
    Search,
  },
  data() {
    return {
      activeMenu: 'home',
      menus: [
        {
          index: 'home',
          route: { path: '/home' },
          text: '首页',
        },
        {
          index: 'about',
          route: { path: '/about' },
          text: '关于我',
        },
        {
          index: 'search',
          route: { path: '/search' },
          text: '搜索文章',
        },
      ],
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeMenu = key
    },
  },
  created() {
    this.activeMenu = sessionStorage.getItem('activeMenu') || 'home'
  },
  beforeUnmount() {
    sessionStorage.setItem('activeMenu', this.activeMenu)
    console.log(sessionStorage)
  },
}
</script>

<style lang="less">
#nav {
  .logo {
    opacity: 1;
    font-size: 125%;
    font-weight: bold;
    cursor: unset;
  }

  .nav-form {
    label {
      color: #fff;
      font-size: var(--el-menu-item-font-size);
    }

    * {
      margin: 0;
    }

    .el-input__icon {
      height: inherit;
      line-height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all var(--el-transition-duration);
    }
  }
}
</style>
