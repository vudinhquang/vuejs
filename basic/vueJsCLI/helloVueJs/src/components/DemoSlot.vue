<template>
    <div class="demo-slot">
        <!-- <h1>Demo Slot</h1>
        <div class="test">
            <slot></slot>
        </div>
        <h1>Demo Slot</h1> -->

        <comp-tabs v-bind:title="title">
            <ul class="tabs-header">
                <li 
                    v-for="(item, index) in tabsHeader" 
                    v-bind:key="index"
                    v-on:click="setActiveTab(index)"
                    v-bind:class="{ active: tabActive === index }"
                    >{{ item.text }}</li>
            </ul>
            <div class="tab-content tab1" v-if="tabActive === 0">
                <p>Tab1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugiat! Soluta cum molestiae recusandae? 
                    Aliquid, rerum cupiditate. Exercitationem excepturi eum doloremque molestiae accusamus in vero illo 
                    libero at quisquam! Dicta.</p>
            </div>
            <div class="tab-content tab2" v-else-if="tabActive === 1">
                <p>Tab2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugiat! Soluta cum molestiae recusandae? 
                    Aliquid, rerum cupiditate. Exercitationem excepturi eum doloremque molestiae accusamus in vero illo 
                    libero at quisquam! Dicta.</p>
            </div>
            <div class="tab-content tab3" v-else>
                <p>Tab3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugiat! Soluta cum molestiae recusandae? 
                    Aliquid, rerum cupiditate. Exercitationem excepturi eum doloremque molestiae accusamus in vero illo 
                    libero at quisquam! Dicta.</p>
            </div>
        </comp-tabs>
    </div>
</template>

<script>
import CompTabs from './CompTabs.vue';
export default {
    name: 'demo-slot',
    components: {
        CompTabs
    },
    data () {
        return {
            title: 'Tiêu đề của Tab',
            tabsHeader: [
                { text: 'Tab1' },
                { text: 'Tab2' },
                { text: 'Tab3' }
            ],
            tabActive : 1
        }
    },
    methods: {
        setActiveTab(index) {
            console.log('setActiveTab: ', index);
            this.tabActive = index;
        }
    }
}
</script>

<style>
    .demo-slot {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000
    }
</style>
