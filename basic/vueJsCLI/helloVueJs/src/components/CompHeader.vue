<template>
    <header>
        <ul>
            <li v-for="user in listUser" v-bind:key="user.id">{{ user.email }}</li>
        </ul>
        <h1>{{ title }} <br>
            <button v-on:click="changeTitleHeader">Thay đổi title từ CompHeader.vue</button>
        </h1>
    </header>
</template>

<script>
export default {
    name: 'comp-header',
    props: {
        title: String,
        listUser: {
            type: Array,
            default: []
        }
    },
    data () {
        return {

        }
    },
    methods: {
        changeTitleHeader(e) {
            // Không được phép thay đổi trực tiếp props từ component cha
            // -> Truyền sự kiện thông báo ra bên ngoài
            // -> Kích hoạt sự kiện 'changeTitleEvent' ở trong CompHeader.vue
            // -> Khi kích hoạt thì function bên ngoài App.vue sẽ chạy
            // -> Khi function đó được chạy -> thay đổi dữ liệu

            console.log('Trước khi kích hoạt sự kiện changeTitleEvent trong CompHeader.Vue');
            var data = {
                title: 'test -> data truyền thông qua biến event'
            };
            this.$emit('changeTitleEvent', data);
            console.log('Sau khi kích hoạt sự kiện changeTitleEvent trong CompHeader.Vue');

            // this.title = 'Học lập trình Front End';
            // console.log(this);
        }
    }
}
</script>

<style>
    ul li {
        list-style-type: none;
    }
</style>
