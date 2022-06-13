<template>
  <header class="p-0">
    <navigation></navigation>
  </header>
  <main class="p-0" style="height: 100%">
    <router-view> </router-view>
  </main>
  <footer class="p-0">
    <my-footer></my-footer>
  </footer>
</template>

<script>
import Navigation from './views/Navigation.vue'
import MyFooter from './views/Footer.vue'
export default {
  data: function () {
    return {}
  },
  components: {
    Navigation,
    MyFooter,
  },

  created() {
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(JSON.parse(sessionStorage.getItem('store')))
    }
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
}
</script>

<style lang="less">
@import './assets/less/space.css';

#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

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
</style>
