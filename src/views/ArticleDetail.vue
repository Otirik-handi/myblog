<template>
  <el-container class="article-detail">
    <el-main>
      <el-card>
        <template #header>
          <div class="article-detail-header">
            <h1>{{ article.title }}</h1>
            <h3>{{ article.sub_title }}</h3>
            <p>
              <span class="mr-3"
                >作者：<strong>{{ article.author }}</strong></span
              >
              <span
                >发布时间：<strong>{{ article.publish_time }}</strong></span
              >
            </p>
          </div>
        </template>
        <div class="article-detail-body">
          <p><strong>This is content from server in html.</strong></p>
        </div>
        <el-row class="article-detail-footer"> </el-row>
      </el-card>
    </el-main>
    <el-aside width="320px" class="article-detail-aside">
      <el-card>
        <template #header>
          <div class="aside-header">aside</div>
        </template>
        <div class="aside-body">aside content</div>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      article: {},
    }
  },
  created() {
    const TestData = this.$store.state.TestDescData
    console.log(TestData)
    const aid = this.$route.query.aid
    this.article = TestData.find((item) => item.aid === aid)
  },
}
</script>

<style lang="less">
.article-detail {
  .article-detail-header {
  }
  .article-detail-aside {
    padding: 20px;
  }
}
</style>
