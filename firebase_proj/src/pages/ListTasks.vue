<template>
    <div class="main-content">
        <page-title title="Kangban Board">
            <router-link to="/create" class="create-new-item">Create New Item</router-link>
        </page-title>
    
        <div class="wrapper-board">
            <div class="row">
                <div class="item">
                    <div class="col-title">Todo</div>
                    <task-item 
                        v-for="item in getListTaskFilter.todo" 
                        v-bind:key="item.id" 
                        v-bind:task="item"
                    />
                </div>

                <div class="item">
                    <div class="col-title">In Process</div>
                    <task-item 
                        v-for="item in getListTaskFilter.inProcess" 
                        v-bind:key="item.id" 
                        v-bind:task="item"
                    />
                </div>

                <div class="item">
                    <div class="col-title">Bugs</div>
                    <task-item 
                        v-for="item in getListTaskFilter.toVerify" 
                        v-bind:key="item.id" 
                        v-bind:task="item"
                    />
                </div>

                <div class="item">
                    <div class="col-title">Done</div>
                    <task-item 
                        v-for="item in getListTaskFilter.done" 
                        v-bind:key="item.id" 
                        v-bind:task="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskItem from '../components/TaskItem';
import PageTitle from '../components/PageTitle';
export default {
    name: 'list-tasks',
    components: {
        PageTitle, TaskItem
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['getListTaskFilter'])
    }
}
</script>