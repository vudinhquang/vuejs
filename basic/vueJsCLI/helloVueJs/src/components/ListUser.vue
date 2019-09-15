<template>
    <div class="list-user">
        <user 
            v-for="user in listUser"
            v-bind:key="user.id"
            v-bind:user="user"
        />
        <!-- <user />
        <user />
        <user /> -->
    </div>
</template>

<script>
import User from './User.vue';
export default {
    name: 'list-user',
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
            
        }
    },
    components: {
        User
    }
}
</script>

<style>

</style>
