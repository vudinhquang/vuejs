<template>
    <div class="user">
        <h3>{{ user.email }}</h3>
        <button 
            v-on:click="handleDelete"
            class="delete">Delete
        </button>
    </div>
</template>

<script>
export default {
    name: 'user',
    props: {
        user: {
            type: Object,
            default: {}
        }
    },
    data () {
        return {
            
        }
    },
    methods: {
        handleDelete(e) {
            var data = {
                id: this.user.id
            };
            // console.log('handleDelete trong User.vue');
            this.$emit('deleteUser', data);
        }
    }
}
</script>

<style>
    .user {
        position: relative;
        float: left;
    }
    .user .delete {
        position: absolute;
        top: 0px;
        right: 0px
    }
</style>
