<template>
  <el-card :header="header">
    <template #header>
      <slot name="title"></slot>
    </template>
    <rank-item v-for="item,index in items" :key="item.id" :item="item" :index="index"></rank-item>
  </el-card>
</template>

<script>
  import RankItem from "./RankItem.vue"
  export default {
    components: {
      RankItem
    },
    props: {
      items: {
        type: Array,
        require: true
      },
      header: {
        type: String
      }
    },
    data() {
      return {
        sorted: []
      }
    },
    created() {
      this.items.sort(function(itemA, itemB) {
        return itemB.like - itemA.like
      })
    }
  }
</script>

<style lang="less">
</style>