<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>

<script>
export default {
    name: 'counter-two',
    data() {
        return {

        }
    },
    computed: {
        count: {
            get () {
                return this.$store.state.count
            },
            set (newCount) {
                // Thay đổi state(count trong store)
                this.$store.state.count = newCount;
            }
        } 
    }
}
</script>

<style>

</style>
