<template>
    <div class="row">
        <div class="col-lg-8">
            <!--section-->
            <div class="ass1-section ass1-section__edit-post">
                <div class="ass1-section__content">
                    <form action="#">
                        <div class="form-group">
                            <input 
                                v-model="url_image"
                                type="text" class="form-control ttg-border-none" placeholder="https://">
                        </div>
                        <div class="form-group">
                            <textarea 
                                v-model="post_content"
                                type="text" class="form-control ttg-border-none"
                                placeholder="Mô tả ..."></textarea>
                        </div>
                    </form>
                    <div class="ass1-section__image" v-on:click="uploadImage">
                        <img v-bind:src="renderImage" alt="default">
                    </div>
                    <a href="https://memeful.com/" target="_blank" class="ass1-btn ass1-btn-meme">Chế ảnh từ
                        meme</a>
                    <button 
                        v-on:click="uploadImage"
                        class="ass1-btn ass1-btn-meme">Đăng ảnh từ máy tính</button>
                    <!-- ref -->
                    <input
                        v-on:change="hanleUploadImage"
                        style="display: none"
                        ref="imageUpload"
                        type="file" name="images" class="form-control" />
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <aside class="ass1-aside ass1-aside__edit-post">
                <div>
                    <a href="#" class="ass1-btn">Đăng bài</a>
                </div>
                <div class="ass1-aside__edit-post-head">
                    <span style="display: block; width: 100%; margin-bottom: 10px;">Chọn danh mục</span>
                    <label class="ass1-checkbox" v-for="item in Allcategories" v-bind:key="item.id">
                        <input 
                            v-bind:value="item.id"
                            v-model="categories"
                            type="checkbox" name="state-post">
                        <span></span>
                        <p>{{ item.text }}</p>
                    </label>
                </div>
                <div class="ass1-aside__get-code">
                    <p>Share Link</p>
                </div>
                <div class="ass1-aside__social">
                    <a href="" class="ass1-btn-social__facebook ass1-btn-social"><i class="fa fa-facebook"
                            aria-hidden="true"></i></a>
                    <a href="" class="ass1-btn-social__twitter ass1-btn-social"><i class="fa fa-twitter"
                            aria-hidden="true"></i></a>
                    <a href="" class="ass1-btn-social__google ass1-btn-social"><i class="fa fa-google-plus"
                            aria-hidden="true"></i></a>
                </div>

            </aside>
        </div>
    </div>
</template>

<script>
export default {
    name: 'post-upload',
    data() {
        return {
            post_content: '',
            url_image: '',
            obj_image: {
                objFile: null,
                base64URL: ''
            },
            categories: []
        }
    },
    computed: {
        Allcategories() {
            return this.$store.state.post.categories;
        },
        renderImage() {
            if (this.url_image) return this.url_image;
            else if (this.obj_image.base64URL) return this.obj_image.base64URL;

            return '/dist/images/no_image_available.jpg';
        }
    },
    methods: {
        uploadImage() {
            this.$refs.imageUpload.click()
        },
        hanleUploadImage(e) {
            if (e.target.files && e.target.files.length) {
                const imageUpload = e.target.files[0];
                let reader  = new FileReader();

                // Check xem đuôi ảnh png, gif, jpg
                reader.addEventListener("load", () => {
                    let previewSrc = reader.result;
                    this.obj_image.base64URL = previewSrc;
                    this.obj_image.objFile = imageUpload;
                }, false);

                if (imageUpload) {
                    reader.readAsDataURL(imageUpload);
                }
            }
        }
    }
}
</script>

<style>

</style>