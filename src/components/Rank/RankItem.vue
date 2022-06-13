<template>
  <el-row class="rank-item mb-3">
    <el-col :span="4"><span class="sequence-icon" :class="index <= 3 ? 'bg-danger' : ''">{{index+1}}</span></el-col>
    <el-col :span="12">
      <el-link type="info">{{item.title}}</el-link>
    </el-col>
    <el-col :span="8">点击量：{{item.like}}</el-col>

  </el-row>
</template>

<script>
  export default {
    props: {
      item: Object,
      index: Number
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="less">
  .rank-item {
    text-align: left;
    width: 100%;

    .sequence-icon {
      display: block;
      width: 1.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: center;
      background-color: #909399;
      color: #fff;
    }

    .bg-danger {
      background-color: #F56C6C;
    }
  }
</style>