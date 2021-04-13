<template>
  <h1 class="home-h1">{{userInfo.name}}</h1>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'
export default {
  name: 'Home',
  setup() {
    const store = useStore();
    const fetch = () => {
      // console.log('服务端渲染2');
      store.dispatch('demo/setData', {
        name: 'ssss',
        address: 99
      })
    }
    const userInfo = computed(() => store.getters['demo/getDate'])
    return {
      userInfo,
      fetch
    }
  },
  async serverPrefetch() {
    // console.log('服务端渲染');
    await this.fetch();
  }
}
</script>

<style scoped>
  .home-h1 {
    color: red;
  }
</style>