<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <h3 class="m-0"><el-icon style="vertical-align: text-top" class="mr-3"><Document /></el-icon>文章推荐</h3>
        <el-button plain text><el-icon><DArrowRight /></el-icon>更多</el-button>
      </div>
    </template>
    <article-desc :articleDesc="test"></article-desc>
    <article-desc :articleDesc="test"></article-desc>
    <article-desc :articleDesc="test"></article-desc>
    <article-desc :articleDesc="test"></article-desc>
  </el-card>
</template>

<script>
  import ArticleDesc from "../ArticalDesc.vue"
  export default {
    components: {
      ArticleDesc
    },
    data() {
      return {
        test: {
          title: 'Javascript 手写new.',
          desc: 'Javascript 手写new.',
          tags: [],
          author: 'Otirik',
          publish_time: '2022-5-28',
          image: 'https://s3.bmp.ovh/imgs/2022/05/28/3ee36dacdf5a8896.jpg',
        }
      }
    },
  }
</script>

<style lang="less">
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 200%;
    }
  }
</style>