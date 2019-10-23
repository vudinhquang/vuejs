<template>
    <div class="ass1-section__item">
        <div class="ass1-section">
            <post-item-head />
            
            <post-item-content />
            
            <post-item-footer />
        </div>
    </div>
</template>

<script>
import PostItemHead from './PostItemHead';
import PostItemContent from './PostItemContent';
import PostItemFooter from './PostItemFooter';
export default {
    name: 'post-item',
    components: {
        PostItemHead,
        PostItemContent,
        PostItemFooter
    },
}
</script>

<style>

</style>