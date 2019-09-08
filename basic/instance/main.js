var vueInstance = new Vue({
  el: '#app',
  data: {
    title: 'Dien thoai Samsung'
  },
  methods: {
    say: function(text){
      return 'Hello' + text;
    }
  }
});
// Hệ thống phản ứng. Reactivity
console.log(vueInstance);

setTimeout(() => {
  vueInstance.title = 'Dien thoai Apple'
},3000);