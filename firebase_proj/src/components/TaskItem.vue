<template>
    <div class="backlogs-item" v-if="task">
        <div class="project">{{ task.name }}</div>
        <router-link 
            tag="div"
            exactActiveClass=""
            activeClass=""
            v-bind:to="{ 
                name: 'edit-task-page', 
                params: { 
                    id:task.id 
                } 
            }" class="title">{{ task.title }}</router-link>
        <div class="due-date">Deadline: <span>{{ dateFormat }}</span></div>
        <div class="phase">Giai đoạn: <span>{{ task.team }}</span></div>
        <div class="assign">@{{ task.email_member.split('@')[0] }} </div>
    </div>
</template>

<script>

export default {
    name: 'task-item',
    props: {
        task: { type: Object, default: null }
    },
    data() {
        return {

        }
    },
    computed: {
        dateFormat() {
            if (this.task) {
                let d = new Date(this.task.end_at);
                var datestring =  d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                return datestring;
            }
            return '';
        }
    }
}
</script>

<style>
    .title {
        cursor: pointer;
    }
</style>