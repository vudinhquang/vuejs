<template>
    <div class="main-content">
        <page-title title="Tạo mới một Backlog Item"/>

        <div class="create-board">
            <div class="row">
                <div class="col-xs-12 input-group">
                    <label>Tiêu đề</label>
                    <input type="text" class="form-control" v-model="title" />
                </div>
                <div class="col-xs-12 input-group">
                    <label>Mô tả tác vụ</label>
                    <textarea type="text" class="form-control" v-model="description"></textarea>
                </div>
                <div class="col-xs-12 input-group">
                    <label>Tên Project</label>
                    <input type="text" class="form-control" v-model="name" />
                </div>
                <div class="col-xs-6 input-group">
                    <label>Ngày giờ bắt đầu</label>
                    <datetime type="datetime" v-model="start_at" use12-hour></datetime>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Deadline</label>
                    <datetime type="datetime" v-model="end_at" use12-hour></datetime>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Trang thái</label>
                    <select class="input-group input-select" v-model="status" >
                        <option 
                            v-for="el in STATUS_CONFIG"
                            v-bind:key="el.value + el.text"
                            v-bind:value="el.value">{{ el.text }}</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Độ ưu tiên</label>
                    <select class="input-group input-select" v-model="priority">
                        <option 
                            v-for="el in PRIORITY_CONFIG"
                            v-bind:key="el.value + el.text"
                            v-bind:value="el.value">{{ el.text }}</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Giai đoạn</label>
                    <select class="input-group input-select">
                        <option 
                            v-for="el in TEAM_CONFIG"
                            v-bind:key="el.value + el.text"
                            v-bind:value="el.value">{{ el.text }}</option>
                    </select>
                </div>
                <div class="col-xs-6 input-group">
                    <label>Thành viên đảm nhận</label>
                    <select class="input-group input-select" v-model="email_member">
                        <option value="luctc">@luctc</option>
                        <option value="khang">@khang</option>
                        <option value="nam">@nam</option>
                        <option value="tam">@tam</option>
                    </select>
                </div>
                <div class="col-xs-12 btn-submit-create">
                    <button 
                        v-on:click="handleCreateTask"
                        class="btn btn-success" type="submit">Tạo mới một BackLog</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { STATUS_CONFIG, PRIORITY_CONFIG, TEAM_CONFIG } from '../config/const';
import PageTitle from '../components/PageTitle';
export default {
    name: 'create-task',
    components: {
        PageTitle
    },
    data() {
        return {
            title: '',
            description: '',
            name: '',
            start_at: null,
            end_at: null,
            status: 1,
            priority: 1,
            email_member: '',

            STATUS_CONFIG,
            PRIORITY_CONFIG,
            TEAM_CONFIG
        }
    },
    methods: {
        ...mapActions([
            'createTask'
        ]),
        handleCreateTask() {
            let objData = {
                auth: 'quang@gmail.com',
                title: this.title,
                description: this.description,
                name: this.name,
                start_at: this.start_at,
                end_at: this.end_at,
                status: this.status,
                priority: this.priority,
                email_member: this.email_member,
            };
            this.createTask(objData);
        }
    }
}
</script>

<style>
    .vdatetime .vdatetime-input {
        display: block;
        width: 100%;
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
</style>