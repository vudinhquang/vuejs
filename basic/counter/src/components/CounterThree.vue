<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="plus">Plus</button>
        <button v-on:click="minus">Minus</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
        // ...mapActions([
        //     'increment',
        //     'decrement'
        // ]),
        ...mapActions({
            'abc': 'increment',
            'def': 'decrement'
        }),
        plus() {
            // console.log('$store plus = ', this.$store);
            console.log('Plus Method CounterThree.vue');
            // this.$store.commit('increment', 10);
            let obj = {  
                number: 10
            }; 
            // this.$store.dispatch('increment', obj);
            // this.increment(obj);
            this.abc(obj);
        },
        minus() {
            console.log('Minus Method CounterThree.vue');
            // this.$store.commit('decrement', 10);
            let obj = {  
                number: 10
            }; 
            // this.$store.dispatch('decrement', obj);
            // this.decrement(obj);
            this.def(obj);
        }
    }
}
</script>

<style>

</style>
