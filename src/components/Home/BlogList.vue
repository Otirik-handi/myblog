<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <h3 class="m-0">
          <el-icon style="vertical-align: text-top" class="mr-3">
            <Document /> </el-icon
          >文章推荐
        </h3>
        <el-button plain text>
          <el-icon> <DArrowRight /> </el-icon>更多
        </el-button>
      </div>
    </template>
    <article-desc-card
      v-for="a in lastUpdated"
      :key="a.id"
      :articleDesc="a"
    ></article-desc-card>
  </el-card>
</template>

<script>
import ArticleDescCard from '../ArticleDescCard.vue'
export default {
  components: {
    ArticleDescCard,
  },
  data() {
    return {}
  },
  computed: {
    lastUpdated() {
      const test = this.$store.state.TestDescData
      return test
    },
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
