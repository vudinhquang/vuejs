<template>
    <div class="ass1-login">
        <div class="ass1-login__content">
            <p>Profile</p>

            <div class="ass1-login__form">
                <div class="avatar">
                    <img v-bind:src="getAvatar" alt="">
                </div>
                <form action="#" v-if="currentUser" v-on:submit.prevent="handleEditProfile">
                    <input 
                        v-bind:value="getFullname"
                        v-on:input="fullname = $event.target.value"
                        type="text" class="form-control" placeholder="Tên ..." required="" />
                    
                    <select  
                        v-bind:value="getGender"
                        v-on:change="gender = $event.target.value"
                        class="form-control">
                        <option value="">Giới tính</option>
                        <option value="nam">Nam</option>
                        <option value="nu">Nữ</option>
                    </select>
                    <input 
                        v-on:change="uploadAvatar"
                        type="file" name="avatar"  placeholder="Ảnh đại diện" class="form-control" />

                    <textarea 
                        v-bind:value="getDescription"
                        v-on:input="description = $event.target.value"
                        class="form-control" cols="30" rows="5" placeholder="Mô tả ngắn ..."></textarea>

                    <div class="ass1-login__send justify-content-center">
                        <button type="submit" class="ass1-btn">Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { parseJwt } from '../helpers'
import { CONFIG_ACCESS_TOKEN } from '../constants'
export default {
    name: 'user-profile',
    data() {
        return {
            fullname: '',
            description: '',
            gender: '',
            avatar: {
                objFile: null,
                base64URL: ''
            },
            userid: this.$route.params.id,
            currentUser: null
        }
    },
    watch: {
        $route(to, from) {
            this.userid = to.params.id;
            this.checkIsCurrentUser();
        }
    },
    created() {
        this.checkIsCurrentUser();
    },
    computed: {
        getAvatar() {
            if (!this.avatar.base64URL && this.currentUser) {
                return this.currentUser.profilepicture;
            } else {
                return this.avatar.base64URL;
            }
        },
        getFullname() {
            if (!this.fullname && this.currentUser) return this.currentUser.fullname;
            return this.fullname; 
        },
        getDescription() {
            if (!this.description && this.currentUser) return this.currentUser.description;
            return this.description; 
        },
        getGender() {
            if (!this.gender && this.currentUser) return this.currentUser.gender;
            return this.gender; 
        }
    },
    methods: {
        ...mapActions({
            getUserById: 'user/getUserById',
            updateProfile: 'user/updateProfile'
        }),
        async checkIsCurrentUser() {
            let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
            let userObj = parseJwt(tokenLocal);
            if (userObj) {
                let resultUser = await this.getUserById(userObj.id);
                if (this.userid && resultUser.ok) {
                    this.currentUser = resultUser.data;
                    if (this.userid !== this.currentUser.USERID) this.$router.push('/');
                }
            }
        },
        handleEditProfile(e) {
            this.fullname = this.getFullname;
            this.gender = this.getGender;
            this.description = this.getDescription;

            if (this.fullname && this.description && this.gender) {
                let data = {
                    fullname: this.fullname,
                    description: this.description,
                    gender: this.gender
                };

                if (this.avatar.objFile) {
                    data.objFile = this.avatar.objFile;
                }

                this.updateProfile(data).then(res => {
                    if (res.ok) {
                        alert('Update thông tin Profile thành công');
                        this.$router.push('/');
                    } else {
                        alert(res.error);
                    }
                });
            }
        },
        uploadAvatar(e) {
            if (e.target.files && e.target.files.length) {
                const fileAvatar = e.target.files[0];
                let reader  = new FileReader();

                reader.addEventListener("load", () => {
                    let previewSrc = reader.result;
                    this.avatar.base64URL = previewSrc;
                    this.avatar.objFile = fileAvatar;
                }, false);

                if (fileAvatar) {
                    reader.readAsDataURL(fileAvatar);
                }
            }
        }
    }
}
</script>

<style scoped>
    .avatar {
        border-radius: 50%;
        overflow: hidden;
    }
</style>