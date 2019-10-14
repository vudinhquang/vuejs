<template>
  <div id="app">
    <comp-menu />
    <slider />
    <router-view></router-view>
  </div>
</template>

<script>
import CompMenu from './components/CompMenu'
import Slider from './components/Slider'
export default {
  name: "app",
  components: {
    CompMenu,
    Slider
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
