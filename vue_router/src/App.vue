<template>
  <div id="app">
    <comp-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import CompMenu from './components/CompMenu'
export default {
  name: "app",
  components: {
    CompMenu
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
