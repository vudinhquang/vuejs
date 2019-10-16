<template>
    <div>
        <img src="https://static-us.24h.com.vn//images/404img_092018.png" alt="">
        <!-- <button v-on:click="go_back_home" class="btn btn-info">Quay lại trang chủ</button> -->
        <router-link to="/" class="btn btn-info">Quay lại trang chủ</router-link>
    </div>
</template>
<script>
export default {
    name: 'not-found',
    methods: {
        go_back_home() {
            this.$router.push('/');
            console.log("he", this.$router);
        }
    }
}
</script>

<style>

</style>