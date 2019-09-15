<template>
    <footer><h1>{{ title }}</h1></footer>
</template>

<script>
export default {
    name: 'comp-footer',
    props: {
        // title: String
        title: {
            type: String,
            default: 'Giá trị mặc định'
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style>

</style>
