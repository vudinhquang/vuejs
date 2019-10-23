<template>
    <div class="row">
        <div class="col-lg-8">
            <div class="ass1-section__post-detail">
                <div class="ass1-section">
                    <post-item />

                    <post-feeling />
                </div>

                <post-comment-add />

                <post-comments />
            </div>
        </div>
        <div class="col-lg-4">
            <sidebar />
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import PostItem from '../components/PostItem'
import PostFeeling from '../components/PostFeeling'
import PostComments from '../components/PostComments'
import PostCommentAdd from '../components/PostCommentAdd'

export default {
    name: 'post-detail',

    components: {
        Sidebar,
        PostItem,
        PostFeeling,
        PostComments,
        PostCommentAdd
    }
}
</script>

<style>
    .ass1-section__post-detail {
        margin-top: 44px;
    }
    .ass1-section__post-detail .ass1-section .ass1-section {
        box-shadow: none;
        padding: 0;
        border-bottom: solid 1px #f3f3f3;
    }
    .list-categories {
        padding-bottom: 20px;
    }
    .list-categories ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -5px;
    }
    .list-categories ul li {
        margin: 5px;
    }
    .list-categories ul li a {
        color: #333;
        font-size: 14px;
        display: block;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 20px;
        padding: 3px 10px;
        transition: all .3s ease;
    }
    .list-categories ul li a:hover {
        background-color: #333;
        border-color: #333;
        color: #fff;
    }
    /* .ass1-section__post-detail > .ass1-section {
        padding: 0;
    } */
</style>