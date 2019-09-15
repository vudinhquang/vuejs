<template>
  <div id="app">
    <!-- <CompHeader></CompHeader>
    <CompHeader /> -->
    <!-- <comp-header v-bind:titleHeader="title"/> -->
    <comp-header v-bind:title="title"/>
    <list-user v-bind:listUser="listUser"/>
    <comp-footer v-bind:title="title"/>
    <!-- <comp-footer/> -->
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
      title: 'Hello VueJs - Header world',
      listUser: [
        { id: 100, email: 'test1@gmail.com', active: true },
        { id: 101, email: 'test2@gmail.com', active: false },
        { id: 102, email: 'test3@gmail.com', active: true },
        { id: 103, email: 'test4@gmail.com', active: true },
        { id: 104, email: 'test5@gmail.com', active: false },
        { id: 105, email: 'test6@gmail.com', active: true },
        { id: 106, email: 'test7@gmail.com', active: true }
      ]
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
