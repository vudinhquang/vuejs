<template>
    <div class="ass1-section__content" v-if="post">
        <p>{{ post.post_content }}</p>
        <div class="ass1-section__image">
            <router-link v-bind:to="{ name: 'post-detail', params: { id: post.PID } }">
                <img v-bind:src="post.url_image" v-bind:alt="post.post_content">
            </router-link >
        </div>
    </div>
</template>

<script>

export default {
    name: 'post-item-content',
    props: {
        post: { type: Object, default: null }
    }
}
</script>

<style>

</style>