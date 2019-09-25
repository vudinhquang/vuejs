<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>

<script>
export default {
    name: 'comp-counter',
    data() {
        return {
         
        }
    },
    computed: {
        count () {
            return this.$store.state.count
        }
    }
}
</script>

<style>

</style>
