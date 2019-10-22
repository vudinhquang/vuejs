<template>
  <div id="app">
    <comp-menu />
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
  /* .v-enter-active, .v-leave-active {
    transition: all .3s ease;
  } */
  /* Component bắt đầu vào */
  /* .v-enter {
    opacity: 0;
    transform: scale(1.1)
  } */
  /* .v-enter-to {
    opacity: 1;
    transform: scale(1)
  } */
  /* Component bị remove khỏi cấu trúc DOM */
  /* .v-leave {
    opacity: 1;
    transform: scale(1)
  }
  .v-leave-to {
    opacity: 0;
    transform: scale(1.1)
  } */

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
