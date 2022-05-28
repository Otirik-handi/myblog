<template>
  <el-menu id="nav" default-active="home" mode="horizontal" background-color="#545c64" text-color="#fff"
    active-text-color="#ffd04b" unique-opened @select="handleSelect" router>
    <el-menu-item disabled class="logo">Otirik's Blog</el-menu-item>
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="about">关于我</el-menu-item>
    <el-menu-item>
      <el-form :inline="true" size="small" class="nav-form">
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
      </el-form>
    </el-menu-item>
  </el-menu>
</template>

<script>
  import {
    Search
  } from "@element-plus/icons-vue"
  export default {
    components: {
      Search
    },
    data() {
      return {
        keyword: '',
      }
    },
    methods: {
      onSubmit() {
        this.$router.push({
          path: '/search',
          query: {
            keyword: this.keyword
          }
        })
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath)
      }
    }
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
        margin: 0
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