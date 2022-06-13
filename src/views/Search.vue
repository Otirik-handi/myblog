<template>
  <el-container id="search-page">
    <el-main>
      <el-space fill>
        <el-card class="search-bar-container mb-5">
          <el-input
            class="search-bar"
            v-model="keyword"
            placeholder="Please input"
            clearable
            size="large"
          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <ISearch />
              </el-icon>
            </template>
            <template #suffix>
              <el-input
                v-if="inputVisible"
                ref="InputRef"
                v-model="tagValue"
                class="ml-1 w-20"
                size="small"
                @keyup.enter="handleInputConfirm"
                @blur="handleInputConfirm"
              />
              <el-button
                v-else
                class="button-new-tag ml-1"
                size="small"
                @click="showInput"
              >
                + New Tag
              </el-button>
            </template>
            <template #append>
              <el-button size="large" @click="handleClick">Search</el-button>
            </template>
          </el-input>
          <el-row class="mt-2">
            <el-tag
              v-for="tag in keytags"
              :key="tag"
              class="mr-2"
              closable
              @close="handleClose(tag)"
              >{{ tag }}</el-tag
            >
          </el-row>
        </el-card>

        <el-card>
          <el-empty
            description="没有找到相关文章..."
            v-show="results.length === 0"
          />
          <article-desc-card
            v-for="a in results"
            :key="a.aid"
            :articleDesc="a"
          ></article-desc-card>
        </el-card>
      </el-space>
    </el-main>
    <el-aside width="360px">
      <rank header="点击排行" :items="rankItems.slice(0, slice)" />
    </el-aside>
  </el-container>
</template>

<script>
import ArticleDescCard from '@/components/ArticleDescCard.vue'
import Rank from '@/components/Rank/Rank.vue'
import { Search } from '@element-plus/icons-vue'
import { nextTick } from 'vue'

const ISearch = Search
export default {
  components: {
    ISearch,
    ArticleDescCard,
    Rank,
  },
  data() {
    return {
      keyword: '',
      keytags: [],
      results: [],
      rankItems: this.$store.state.TestRankData,
      slice: 10,
      inputVisible: false,
      tagValue: '',
    }
  },
  methods: {
    handleInputConfirm() {
      if (this.tagValue) {
        this.keytags.push(this.tagValue)
      }
      this.inputVisible = false
      this.tagValue = ''
    },
    showInput() {
      this.inputVisible = true
      nextTick(() => {
        this.$refs.InputRef.focus()
      })
    },
    handleClose(tag) {
      this.keytags.splice(this.keytags.indexOf(tag), 1)
    },
    handleClick() {
      this.searchResults()
      this.keytags = []
      this.keyword = ''
    },
    searchResults() {
      if (this.keyword === '') {
        // todo: 提醒用户
        return
      }
      const articles = this.$store.state.TestDescData
      const tags = this.keytags
      let patten = this.keyword.toLowerCase()
      let reg = new RegExp(patten, 'gi')
      this.results = articles.filter(function (item) {
        return (
          reg.test(item.title) ||
          reg.test(item.desc) ||
          item.tags.some((tag) => tags.indexOf(tag) !== -1)
        )
      })
    },
  },
  created() {
    this.keyword = this.$route.query.keyword || ''
    this.searchResults()
  },
}
</script>

<style lang="less">
#search-page {
  background-color: #f2f3f5;
  height: 100vh;

  .el-aside {
    --el-main-padding: 20px;
    padding: var(--el-main-padding);
  }

  .search-bar-container {
    // width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .search-bar {
      width: 50vw;
    }
  }
}
</style>
