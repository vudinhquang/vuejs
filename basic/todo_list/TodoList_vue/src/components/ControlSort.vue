<template>
    <div class="col-12">
        <div class="form-group">
            <b-dropdown text="Sort by">
                <b-dropdown-item>Name ASC</b-dropdown-item>
                <b-dropdown-item>Name DESC</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Level ASC</b-dropdown-item>
                <b-dropdown-item>Level DESC</b-dropdown-item>
            </b-dropdown>
            <span class="badge badge-success badge-medium">NAME - DESC</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'control-sort',
    data() {
        return {

        }
    }
}
</script>

<style>

</style>