<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="plus">Plus</button>
        <button v-on:click="minus">Minus</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'counter-three',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'count'
        ])
    },
    methods: {
        plus() {
            // console.log('$store plus = ', this.$store);
            console.log('Plus Method CounterThree.vue');
            this.$store.commit('increment', 10);
        },
        minus() {
            console.log('Minus Method CounterThree.vue');
            this.$store.commit('decrement', 10);
        }
    }
}
</script>

<style>

</style>
