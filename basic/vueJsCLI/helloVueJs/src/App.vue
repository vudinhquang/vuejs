<template>
  <div id="app">
    <!-- <CompHeader></CompHeader>
    <CompHeader /> -->
    <comp-header />
    <list-user />
    <comp-footer />
  </div>
</template>

<script>
import ListUser from './components/ListUser.vue'
import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
