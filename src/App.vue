<template>
  <div id="app">
    <appHeader/>
    <Main/>
  </div>
</template>

<script>
import appHeader from './views/layouts/app-header.vue'
import Main from './views/main/index.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    Main
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
