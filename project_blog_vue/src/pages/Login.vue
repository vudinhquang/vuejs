<template>
    <div>
        <page-header 
            bg="/dist/img/contact-bg.jpg"
            title="Login Page"
            subHeading="Have questions? I have answers."
        />
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                    <form name="sentMessage" id="contactForm" novalidate>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email Address">
                        <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password">
                        <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <br>
                    <div id="success"></div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
export default {
    name: 'contact',
    components: {
        PageHeader
    }
}
</script>

<style>

</style>