<template>
  <el-card>

  </el-card>
</template>

<script>
  export default {
    props: {
      "article-detail": {
        type: Object
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      this.$nextTick(function () {
        this['article-detail'] = {
          titile: '',
          sub_titile: '',
          desc: '',
          content: {},
          tags: [],
          author: '',
          publish_time: '',
          images: '',
          like: 0,
          point: 0,
          saying: '',
          ...this['article-detail']
        }
      })
    }
  }
</script>

<style lang="less">
</style>