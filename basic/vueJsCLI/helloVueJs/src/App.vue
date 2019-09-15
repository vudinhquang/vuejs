<template>
  <div id="app">
    <!-- <CompHeader></CompHeader>
    <CompHeader /> -->
    <!-- <comp-header v-bind:titleHeader="title"/> -->
    <div class="container">
      <button v-on:click="title = 'Học lập trình Vuejs'">Thay đổi title từ Component App.vue</button>
      <comp-header 
        v-bind:listUser="listUser"
        v-bind:title="title"
        v-on:changeTitleEvent="handleChangeTitle"
      />
      <list-user 
        v-on:deleteUserEvent="handleDeleteUser"
        v-bind:listUser="listUser"/>
      <comp-footer v-bind:title="title"/>
      <demo-ref />
    </div>
    <!-- <comp-footer/> -->
  </div>
</template>

<script>
import ListUser from './components/ListUser.vue'
import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
import DemoRef from './components/DemoRef.vue'
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
    ListUser,
    DemoRef
  },
  methods: {
    handleChangeTitle(data) {
      // this.title = 'Học lập trình VueJs -> Do Header thay đổi';
      this.title = data.title;
      // console.log('handleChangeTitle được gọi sau khi kích hoạt thành công App.vue', data);
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((u, idx) => {
        // console.log(u.id, idx, data.id);
        if (u.id === data.id) {
          indexDelete = idx;
        }
      });

      if (indexDelete !== -1) {
        this.listUser.splice(indexDelete, 1);
      }
      // console.log('IndexDelete sau khi chạy vòng for', indexDelete);
      // console.log('handleDeleteUser trong App.vue', data);
    }
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
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px
}
</style>
