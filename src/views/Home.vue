<template>
  <el-container id="home">
    <el-header class="p-0">
      <div class="banner">
        <h1 class="title">Welcome to Otirik's Blog.</h1>
        <h2>欢迎来到Otirik的博客</h2>
        <h3 class="sub-title">
          Stay Hungry, Stay Foolish.<br />
          —— Steve Jobs
        </h3>
      </div>
      <el-image class="hero" :src="hero.src">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </el-header>
    <el-main class="p-0">
      <el-container>
        <el-main class="p-3">
          <sharing class="mb-5" />
          <blog-list />
        </el-main>
        <el-aside class="pr-3 pt-3 pl-0" width="400px">
          <el-affix position="top" :offset="20">
            <el-card header="搜索框" class="mb-3">
              <el-form :inline="true" size="default">
                <el-form-item style="margin-right: 0.75em">
                  <el-input
                    v-model="keyword"
                    placeholder="请输入关键词"
                    clearable
                  >
                    <template #prefix>
                      <el-icon class="el-input__icon" size="1.25em">
                        <search />
                      </el-icon> </template
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-form-item>
              </el-form>
            </el-card>
            <el-card header="标签云" class="mb-3">
              <el-tag class="mr-2 my-2">javascript</el-tag>
              <el-tag class="mr-2 my-2">css</el-tag>
              <el-tag class="mr-2 my-2">python</el-tag>
              <el-tag class="mr-2 my-2">windows</el-tag>
              <el-tag class="mr-2 my-2">html</el-tag>
              <el-tag class="mr-2 my-2">linux</el-tag>
              <el-tag class="mr-2 my-2">java</el-tag>
            </el-card>
            <el-card header="最近更新" class="mb-3" style="height: 200px">
              <div class="item mb-3">
                <el-button text plain>Javascript之手写Promise</el-button>
              </div>
              <div class="item mb-3">
                <el-button text plain>Javascript之手写new</el-button>
              </div>
            </el-card>
            <el-card header="推荐" style="height: 200px">
              <div class="item mb-3">
                <el-button text plain>Javascript之手写Promise</el-button>
              </div>
              <div class="item mb-3">
                <el-button text plain>Javascript之手写new</el-button>
              </div>
            </el-card>
          </el-affix>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import Sharing from '@/components/Home/Sharing.vue'
import BlogList from '@/components/Home/BlogList.vue'
import Tag from '@/components/Tag.vue'
export default {
  name: 'Home',
  components: {
    Sharing,
    BlogList,
    Tag,
  },
  data() {
    return {
      keyword: '',
      hero: {
        src: 'https://s3.bmp.ovh/imgs/2022/05/28/3ee36dacdf5a8896.jpg',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({
        path: '/search',
        query: {
          keyword: this.keyword,
        },
      })
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
  },
}
</script>

<style scoped lang="less">
#home {
  height: 100%;

  .h300 {
    height: 300px;
  }

  .el-header {
    width: 100%;
    height: 100%;
    position: relative;

    .banner {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4000;
      color: #fff;

      .title {
        font-size: 400%;
        margin-bottom: 0;
      }

      .sub-title {
        font-size: 150%;
        opacity: 0.75;
      }
    }
  }

  .hero {
    width: 100%;
    height: 80vh;

    .image-slot {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: var(--el-fill-color-light);
      color: var(--el-text-color-secondary);
      font-size: 30px;
    }
  }

  .item {
    width: 100%;

    button {
      width: 100%;
      justify-content: start;
    }
  }
}
</style>
