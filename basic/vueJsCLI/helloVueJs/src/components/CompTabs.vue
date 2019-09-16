<template>
    <div class="comp-tabs">
        <div class="tabs-title">
            <span>{{ title }}</span>
            <ion-icon name="heart"></ion-icon>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comp-tabs',
    props: {
        title: String
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
    .tabs-title {
        border: 2px solid #000;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
    }
    .tabs-content {
        margin: 2px;
        padding: 2px;
        border: 2px solid blue;
    }
    .tabs-header {
        margin: 0px;
        padding: 0px;
        display: flex;
        list-style-type: none;
    }
    .tabs-header li {
        padding: 8px 15px;
        background-color: #ccc;
        transition: all .3s ease;
    }
    .tabs-header li:hover {
        color: #fff;
        background-color: #333;
    }
    .tab-content {
        padding: 15px;
        border: 2px solid green;
        text-align: left
    }
</style>
