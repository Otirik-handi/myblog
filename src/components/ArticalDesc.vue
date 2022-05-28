<template>
  <el-card class="mb-3">
    <el-container direction="vertical">

      <el-container>
        <!-- aside image -->
        <el-aside class="card-aside">
          <el-image class="card-image" :src="articleDesc.image">
            <template #placeholder>
              <div class="image-slot">Loading<span class="dot">...</span></div>
            </template>
          </el-image>
        </el-aside>

        <!-- titile desc -->
        <el-main class="card-body">
          <el-row class="card-title">
            <h3 class="mt-0" style="text-align: center; flex: 1">{{articleDesc.title}}</h3>
          </el-row>
          <el-row class="card-desc">简介: {{articleDesc.desc}}</el-row>
        </el-main>
      </el-container>

      <!-- author publish_time -->
      <el-footer class="card-foot p-0" height="30px">
        <el-row style="justify-content: space-between">
          <p style="text-align: left; opacity: 0.75; font-weight: bold;">
            <span class="mr-3">作者: {{articleDesc.author}}</span>
            <span>发布于: {{articleDesc.publish_time}}</span>
          </p>
          <el-button type="primary" plain round>查看详情</el-button>
        </el-row>

      </el-footer>
    </el-container>
  </el-card>
</template>

<script>
  export default {
    props: {
      articleDesc: {
        type: Object
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      this.$nextTick(function () {
        this.$props.articleDesc = {
          title: '',
          desc: '',
          tags: [],
          author: '',
          publish_time: '',
          image: '',
          ...this.articleDesc
        }
      })
    }
  }
</script>

<style lang="less">
  .card-aside {
    width: 200px !important;
    height: 150px !important;
    overflow: hidden !important;

    .card-image {
      width: 200px;
      height: 150px;
    }
  }

  .card-desc {
    justify-content: flex-start;
    flex-wrap: nowrap !important;
    height: 60px;
    overflow: hidden;
  }

  .card-foot {}
</style>