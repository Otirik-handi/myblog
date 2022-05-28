<template>
  <span class="tag px-2 mx-2">{{text}}</span>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: '标签'
      }
    }
  }
</script>

<style scope="Tag" lang="less">
  .tag {
    display: inline-block;
    height: 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border: 1px solid #409EFF;
    color: #409EFF;
    cursor: pointer;
    border-radius: 0.75rem;

    &:hover {
      background-color: #409EFF;
      color: #fff
    }
  }
</style>